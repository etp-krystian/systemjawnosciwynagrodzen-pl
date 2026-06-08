(() => {
  const STORAGE_KEY = "sjw_home_assessment_promo_state_v1";
  const promo = document.getElementById("home-assessment-promo");
  const closeButton = document.getElementById("home-assessment-promo-close");
  const href = promo?.dataset.href;

  if (!promo || !closeButton) return;

  const setCollapsed = (collapsed) => {
    promo.classList.toggle("is-collapsed", collapsed);
    promo.setAttribute("aria-expanded", collapsed ? "false" : "true");
    try {
      localStorage.setItem(STORAGE_KEY, collapsed ? "collapsed" : "expanded");
    } catch {
      // ignore
    }
  };

  try {
    setCollapsed(localStorage.getItem(STORAGE_KEY) === "collapsed");
  } catch {
    // ignore
  }

  closeButton.addEventListener("click", (event) => {
    event.stopPropagation();
    setCollapsed(true);
  });

  if (href) {
    promo.addEventListener("click", () => {
      if (promo.classList.contains("is-collapsed")) {
        setCollapsed(false);
        return;
      }
      window.location.href = href;
    });

    promo.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        if (promo.classList.contains("is-collapsed")) {
          setCollapsed(false);
          return;
        }
        window.location.href = href;
      }
    });
  }
})();
