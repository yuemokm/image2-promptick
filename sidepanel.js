// ═══════════════════════════════════════════════════════
// sidepanel.js — Image2 Promptick
// ═══════════════════════════════════════════════════════

// ── State ──
let currentTemplate = null;
let currentEn = "";
let currentZh = "";

// ── Settings ──
const DEFAULT_SETTINGS = {
  apiBase: "https://api.openai.com/v1",
  apiKey: "",
  model: "gpt-4o",
};
let settings = { ...DEFAULT_SETTINGS };

// ── Init ──
document.addEventListener("DOMContentLoaded", async () => {
  const stored = await chrome.storage.local.get("promptSettings");
  if (stored.promptSettings) settings = { ...DEFAULT_SETTINGS, ...stored.promptSettings };

  // Populate category filter
  const sel = document.getElementById("category-filter");
  CATEGORIES.forEach((c) => {
    const opt = document.createElement("option");
    opt.value = c;
    opt.textContent = c;
    sel.appendChild(opt);
  });

  renderList(TEMPLATES);

  // Bind events
  document.getElementById("search").addEventListener("input", onFilter);
  document.getElementById("category-filter").addEventListener("change", onFilter);
  document.getElementById("btn-back").addEventListener("click", showList);
  document.getElementById("btn-settings").addEventListener("click", openSettings);
  document.getElementById("btn-close-settings").addEventListener("click", closeSettings);
  document.getElementById("btn-save-settings").addEventListener("click", saveSettings);
  document.getElementById("btn-translate").addEventListener("click", doTranslate);
  document.getElementById("btn-sync").addEventListener("click", doSync);

  // Lightbox close
  document.getElementById("lightbox").addEventListener("click", function(e) {
    if (e.target === this || e.target.parentElement === this) {
      document.getElementById("lightbox").classList.add("hidden");
      document.getElementById("lightbox-img").src = "";
    }
  });

  // View full image button
  document.getElementById("btn-view-image").addEventListener("click", function() {
    if (currentTemplate && currentTemplate.previewImageUrl) {
      document.getElementById("lightbox-img").src = currentTemplate.previewImageUrl;
      document.getElementById("lightbox").classList.remove("hidden");
    }
  });

  // Copy buttons
  document.querySelectorAll(".copy-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      const text = target === "en"
        ? document.getElementById("en-input").value
        : document.getElementById("zh-input").value;
      copyText(text, btn);
    });
  });

  document.getElementById("count-badge").textContent = TEMPLATES.length + " 模板";
});

// ── Render template list ──
function renderList(templates) {
  const container = document.getElementById("template-list");
  container.innerHTML = "";
  templates.forEach((t) => {
    const card = document.createElement("div");
    card.className = "tpl-card";
    card.innerHTML = `
      <div>
        ${t.previewImageUrl ? '<div class="tpl-img-wrap"><img src="' + escHtml(t.previewImageUrl) + '" onerror="this.parentElement.innerHTML=\'❌ 加载失败\'" style="width:100%;height:120px;object-fit:cover"></div>' : '<div class="tpl-img-wrap">❌ 无参考图</div>'}
        <div class="tpl-body">
          <div class="tpl-title">${escHtml(t.title || t.id)}</div>
          <div class="tpl-category">${escHtml(t.category || "")} · ${t.aspect || "?"}</div>
          <div class="tpl-tags">${(t.tags || []).slice(0,3).map(function(tag) { return '<span class="tpl-tag">' + escHtml(tag) + '</span>'; }).join("")}</div>
        </div>
      </div>
    `;
    card.addEventListener("click", () => openEditor(t));
    container.appendChild(card);
  });
}

function onFilter() {
  const q = document.getElementById("search").value.toLowerCase();
  const cat = document.getElementById("category-filter").value;
  const filtered = TEMPLATES.filter((t) => {
    const matchSearch = !q || (t.title || "").toLowerCase().includes(q) || (t.prompt || "").toLowerCase().includes(q) || (t.tags || []).some(tag => tag.toLowerCase().includes(q));
    const matchCat = !cat || t.category === cat;
    return matchSearch && matchCat;
  });
  renderList(filtered);
}

// ── Toggle list / editor ──
function showList() {
  document.getElementById("template-list").classList.remove("hidden");
  document.getElementById("editor-view").classList.add("hidden");
}

function openEditor(t) {
  currentTemplate = t;
  currentEn = t.prompt || "";
  currentZh = "";

  document.getElementById("template-list").classList.add("hidden");
  document.getElementById("editor-view").classList.remove("hidden");
  document.getElementById("editor-title").textContent = t.title || t.id;
  document.getElementById("en-input").value = currentEn;
  document.getElementById("zh-input").value = "";
  document.getElementById("trans-status-text").textContent = "就绪";

  const img = document.getElementById("preview-img");
  if (t.previewImageUrl) {
    img.src = t.previewImageUrl;
    img.style.display = "block";
    document.getElementById("btn-view-image").style.display = "inline-block";
  } else {
    img.style.display = "none";
    document.getElementById("btn-view-image").style.display = "none";
  }
}

// ── Translate EN → ZH ──
async function doTranslate() {
  const en = document.getElementById("en-input").value.trim();
  if (!en) return;
  if (!settings.apiKey) { setStatus("⚠️ 请先配置 LLM"); return; }
  setStatus("🔄 翻译中...");
  try {
    const zh = await callLLM(
      "You are a professional prompt translator. Translate the following English AI prompt into natural, fluent Chinese. Keep technical terms, numbers, and brand names intact. Output ONLY the Chinese translation, no explanations.\n\n" + en
    );
    currentEn = en;
    currentZh = zh;
    document.getElementById("zh-input").value = zh;
    setStatus("✅ 翻译完成");
  } catch (e) { setStatus("❌ 翻译失败: " + e.message); }
}

// ── Sync ZH → EN ──
async function doSync() {
  const zh = document.getElementById("zh-input").value.trim();
  const en = document.getElementById("en-input").value.trim();
  if (!zh || !en) return;
  if (!settings.apiKey) { setStatus("⚠️ 请先配置 LLM"); return; }
  setStatus("🔄 同步英文中...");
  try {
    const newEn = await callLLM(
      "I have an English prompt and its Chinese translation. The user edited the Chinese version. Update the English prompt to match the NEW Chinese meaning precisely, keeping the same prompt style (detailed scene descriptions, technical terms).\n\nOriginal English:\n" + en + "\n\nUser-edited Chinese:\n" + zh + "\n\nOutput ONLY the updated English prompt."
    );
    currentEn = newEn;
    document.getElementById("en-input").value = newEn;
    setStatus("✅ 英文已同步");
  } catch (e) { setStatus("❌ 同步失败: " + e.message); }
}

// ── LLM ──
async function callLLM(prompt) {
  const resp = await fetch(settings.apiBase.replace(/\/+$/, "") + "/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + settings.apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: settings.model,
      messages: [{ role: "user", content: prompt }],
      temperature: 0.3,
    }),
  });
  if (!resp.ok) throw new Error("HTTP " + resp.status);
  const data = await resp.json();
  return data.choices[0].message.content.trim();
}

// ── Copy ──
async function copyText(text, btn) {
  try {
    await navigator.clipboard.writeText(text);
    const orig = btn.textContent;
    btn.textContent = "✅ 已复制";
    setTimeout(() => (btn.textContent = orig), 1500);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }
}

// ── Settings ──
function openSettings() {
  document.getElementById("s-api-base").value = settings.apiBase;
  document.getElementById("s-api-key").value = settings.apiKey;
  document.getElementById("s-model").value = settings.model;
  document.getElementById("settings-modal").classList.remove("hidden");
}
function closeSettings() {
  document.getElementById("settings-modal").classList.add("hidden");
}
async function saveSettings() {
  settings.apiBase = document.getElementById("s-api-base").value.trim();
  settings.apiKey = document.getElementById("s-api-key").value.trim();
  settings.model = document.getElementById("s-model").value.trim();
  await chrome.storage.local.set({ promptSettings: settings });
  closeSettings();
  setStatus("✅ 设置已保存");
}

// ── Helpers ──
function setStatus(msg) {
  document.getElementById("trans-status-text").textContent = msg;
}
function escHtml(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

document.querySelector(".modal-overlay")?.addEventListener("click", closeSettings);