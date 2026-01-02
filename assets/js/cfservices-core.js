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

CFS.context = {
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
    label.dataset.access = this.access;
    label.dataset.build = this.build;
    label.dataset.resonance = this.resonance;

    console.info(
      "[CFServices][Context]",
      `${this.access} · ${this.build} · ${this.resonance}`
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
/*
   Niveaus:
   - none      : geen AI
   - basic     : zichtbaar, observerend
   - advanced  : actief begeleidend (kern / partners)
*/

CFS.aiGuidance = {
  enabled: false,
  level: "none",

  activate(level = "basic") {
    this.enabled = true;
    this.level = level;

    document.documentElement.setAttribute(
      "data-ai-guidance",
      level
    );

    // Advanced = actieve Z.A.L.-state
    if (level === "advanced") {
      document.documentElement.setAttribute(
        "data-zal-state",
        "active"
      );
    } else {
      document.documentElement.removeAttribute("data-zal-state");
    }

    console.info(
      "[CFServices][AI]",
      "AI-begeleiding geactiveerd:",
      level
    );
  }
};

/* =====================================================
   Automatische Initialisatie (Default)
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // Standaard context (per pagina overschrijfbaar)
  CFS.context.set({
    access: "public",
    build: "ready",
    resonance: "zal-1-1"
  });

  // Default AI-niveau (veilig & publiek)
  CFS.aiGuidance.activate("basic");
});
