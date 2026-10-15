/* =========================================================
   CareX Language System
   Supports: English (en) + Hindi (hi)
   ========================================================= */

/* Get currently selected language */
function getLang() {
  const saved =
    localStorage.getItem("carex_lang") ||
    localStorage.getItem("carex-lang");
  
  if (saved === "hi" || saved === "en") {
    localStorage.setItem("carex_lang", saved);
    localStorage.setItem("carex-lang", saved);
    return saved;
  }
  
  return "en";
}


/* Change language */
function setLang(lang) {
  lang = lang === "hi" ? "hi" : "en";
  
  localStorage.setItem("carex_lang", lang);
  localStorage.setItem("carex-lang", lang);
  
  applyTranslations();
  
  // Let other scripts know that language has changed
  document.dispatchEvent(
    new CustomEvent("carexLanguageChanged", {
      detail: { lang: lang }
    })
  );
}


/* Get translated text */
function t(key) {
  const lang = getLang();
  
  if (
    typeof translations !== "undefined" &&
    translations[lang] &&
    translations[lang][key] !== undefined
  ) {
    return translations[lang][key];
  }
  
  // Fallback to English
  if (
    typeof translations !== "undefined" &&
    translations.en &&
    translations.en[key] !== undefined
  ) {
    return translations.en[key];
  }
  
  // Last fallback: show the key itself
  return key;
}


/* ---------------------------------------------------------
   Translate a single element
   --------------------------------------------------------- */
function translateElement(el) {
  if (!el) return;
  
  const key = el.getAttribute("data-i18n");
  
  if (!key) return;
  
  const translated = t(key);
  
  /* Input / textarea */
  if (
    el.tagName === "INPUT" ||
    el.tagName === "TEXTAREA"
  ) {
    el.placeholder = translated;
    return;
  }
  
  
  /* Select */
  if (el.tagName === "SELECT") {
    return;
  }
  
  
  /* Option */
  if (el.tagName === "OPTION") {
    el.textContent = translated;
    return;
  }
  
  
  /*
    If element has child elements, don't destroy them.

    Example:

    <a>
      🏠
      <span data-i18n="home">Home</span>
    </a>

    We only translate the span, not the whole <a>.
  */
  if (el.children.length > 0) {
    return;
  }
  
  
  /* Normal text elements */
  el.textContent = translated;
}


/* ---------------------------------------------------------
   Apply translations to current page
   --------------------------------------------------------- */
function applyTranslations() {
  
  const lang = getLang();
  
  /* Set HTML language */
  document.documentElement.lang = lang;
  
  /* Translate all data-i18n elements */
  document.querySelectorAll("[data-i18n]").forEach(
    translateElement
  );
  
  
  /* -------------------------------------------------------
     Translate elements which have data-i18n-text
     Useful for dynamically generated content later.
     ------------------------------------------------------- */
  document.querySelectorAll("[data-i18n-text]").forEach(el => {
    
    const key = el.getAttribute("data-i18n-text");
    
    if (key) {
      el.textContent = t(key);
    }
    
  });
  
  
  /* -------------------------------------------------------
     Translate placeholders using data-i18n-placeholder
     ------------------------------------------------------- */
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    
    const key = el.getAttribute("data-i18n-placeholder");
    
    if (key) {
      el.placeholder = t(key);
    }
    
  });
  
  
  /* -------------------------------------------------------
     Translate title attributes
     ------------------------------------------------------- */
  document.querySelectorAll("[data-i18n-title]").forEach(el => {
    
    const key = el.getAttribute("data-i18n-title");
    
    if (key) {
      el.title = t(key);
    }
    
  });
  
  
  /* -------------------------------------------------------
     Translate aria-label
     ------------------------------------------------------- */
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    
    const key = el.getAttribute("data-i18n-aria");
    
    if (key) {
      el.setAttribute("aria-label", t(key));
    }
    
  });
  
  
  /* -------------------------------------------------------
     Update language button label if available
     ------------------------------------------------------- */
  const langLabel = document.getElementById("lang-label");
  
  if (langLabel) {
    langLabel.textContent = lang === "hi" ? "EN" : "HI";
  }
  
  
  /* -------------------------------------------------------
     Update language buttons if available
     ------------------------------------------------------- */
  document.querySelectorAll("[data-language-label]").forEach(el => {
    
    el.textContent = lang === "hi" ? "हिन्दी" : "English";
    
  });
}


/* ---------------------------------------------------------
   Helper: translated text inside dynamic HTML
   --------------------------------------------------------- */
function translateDynamic(key) {
  return t(key);
}


/* ---------------------------------------------------------
   Automatically apply language when page loads
   --------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function() {
  applyTranslations();
});