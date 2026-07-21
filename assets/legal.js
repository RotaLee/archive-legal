(function () {
  var root = document.documentElement;
  function apply(lang) {
    root.setAttribute("data-lang", lang);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
    });
    try { localStorage.setItem("archive-legal-lang", lang); } catch (e) {}
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
  }
  var saved = "zh";
  try { saved = localStorage.getItem("archive-legal-lang") || "zh"; } catch (e) {}
  document.addEventListener("DOMContentLoaded", function () {
    apply(saved);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.dataset.lang); });
    });
  });
})();
