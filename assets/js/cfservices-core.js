/* =====================================================
   CFServices · Core Runtime
   Canonieke Front-End Logica
   Z.A.L. · Active Guidance Enabled
   ===================================================== */

window.CFS = window.CFS || {};

/* -----------------------------------------------------
   Navigatie · Canonieke Terugknop
   ----------------------------------------------------- */

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
   CFServices · AI-Begeleiding (Z.A.L.)
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

/* -----------------------------------------------------
   Z.A.L. · Standaard Activatie
   ----------------------------------------------------- */

CFS.aiGuidance.activate("basic");
