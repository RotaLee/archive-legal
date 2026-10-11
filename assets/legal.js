(function () {
  var root = document.documentElement;
  var LANGS = ["zh", "zhHans", "en"];
  var HTML_LANG = { zh: "zh-Hant", zhHans: "zh-Hans", en: "en" };
  function apply(lang) {
    root.setAttribute("data-lang", lang);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("archive-legal-lang", lang); } catch (e) {}
    document.documentElement.lang = HTML_LANG[lang] || "en";
  }
  // 優先順序:網址 ?lang=zh|zhHans|en(App 內開啟時帶入)> 上次在網頁選的 > 繁中
  var saved = "zh";
  try { saved = localStorage.getItem("archive-legal-lang") || "zh"; } catch (e) {}
  var fromURL = null;
  try { fromURL = new URLSearchParams(window.location.search).get("lang"); } catch (e) {}
  var initial = LANGS.indexOf(fromURL) >= 0 ? fromURL : (LANGS.indexOf(saved) >= 0 ? saved : "zh");
  document.addEventListener("DOMContentLoaded", function () {
    apply(initial);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.lang); });
    });
  });
})();
