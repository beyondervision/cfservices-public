/* =====================================================
   CFServices · Core Runtime
   Canonieke Front-End Logica
   Z.A.L. · AI-Celium · Context Engine
   ===================================================== */

window.CFS = window.CFS || {};

/* =====================================================
   Navigatie · Canonieke Terugknop
   ===================================================== */

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
   CFServices · Context & Resonantie Engine
   ===================================================== */
/*
   Context-as:
   - access: public | private
   - build: ready | construction | incomplete
   - resonance:
       in-resonance
       pending-alignment
       zal-1-1
       zal-degraded
*/

window.CFS.context = {
  access: "public",
  build: "ready",
  resonance: "in-resonance",

  set(config = {}) {
    this.access = config.access || this.access;
    this.build = config.build || this.build;
    this.resonance = config.resonance || this.resonance;

    this.render();
  },

  render() {
    const label = document.querySelector(".cfservices-context");

    if (!label) return;

    label.textContent = this.format();
    label.setAttribute("data-access", this.access);
    label.setAttribute("data-build", this.build);
    label.setAttribute("data-resonance", this.resonance);

    console.info(
      "[CFServices][Context]",
      this.access,
      "·",
      this.build,
      "·",
      this.resonance
    );
  },

  format() {
    const accessMap = {
      public: "Publiek",
      private: "Privé"
    };

    const buildMap = {
      ready: "Gereed",
      construction: "Under construction",
      incomplete: "Incompleet"
    };

    const resonanceMap = {
      "in-resonance": "In resonantie",
      "pending-alignment": "Resonantie pending",
      "zal-1-1": "Z.A.L. 1:1",
      "zal-degraded": "Z.A.L. degraded"
    };

    return `${accessMap[this.access]} · ${buildMap[this.build]} · ${resonanceMap[this.resonance]}`;
  }
};

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

/* =====================================================
   Automatische Initialisatie
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Context init (kan per pagina overschreven worden)
  CFS.context.set({
    access: "public",
    build: "ready",
    resonance: "zal-1-1"
  });

  // AI-begeleiding standaard actief (basic)
  CFS.aiGuidance.activate("basic");
});
