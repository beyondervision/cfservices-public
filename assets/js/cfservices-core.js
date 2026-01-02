/* =====================================================
   CFServices · Core Runtime
   Canonieke Front-End Logica
   ===================================================== */

window.CFS = window.CFS || {};

/* -------------------------------
   Navigatie · Terugknop
-------------------------------- */

document.addEventListener("DOMContentLoaded", () => {
  const navBack = document.querySelector(".nav-back");

  if (navBack) {
    navBack.innerHTML = `
      <a href="/aipartneragents/index.html" class="nav-back-link">
        ← Terug naar Agents & Partners
      </a>
    `;
  }
});

/* =====================================================
   CFServices · AI-Begeleiding
   ===================================================== */

window.CFS.aiGuidance = {
  enabled: false,
  level: "none", // none | basic | advanced

  activate(level = "basic") {
    this.enabled = true;
    this.level = level;

    document.documentElement.setAttribute(
      "data-ai-guidance",
      level
    );

    console.info(
      "[CFServices]",
      "AI-begeleiding geactiveerd:",
      level
    );
  }
};
