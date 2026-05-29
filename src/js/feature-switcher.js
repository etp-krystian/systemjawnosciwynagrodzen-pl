(() => {
  const root = document.getElementById("feature-switcher");
  if (!root) return;

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const items = Array.from(root.querySelectorAll(".feature-switcher-item"));
  const image = root.querySelector("#feature-switcher-image");
  const list = root.querySelector(".feature-switcher-list");

  if (!items.length) return;

  let activeIndex = 0;
  let timer = null;

  const setActive = (index) => {
    activeIndex = ((index % items.length) + items.length) % items.length;

    items.forEach((item, itemIndex) => {
      const isActive = itemIndex === activeIndex;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", isActive ? "true" : "false");
      item.setAttribute("aria-expanded", isActive ? "true" : "false");
      item.tabIndex = isActive ? 0 : -1;

      if (isActive && image) {
        const nextSrc = item.dataset.featureImage || "";
        const nextAlt = item.dataset.featureImageAlt || "";

        if (nextSrc) {
          image.src = nextSrc;
          image.alt = nextAlt;
          image.hidden = false;
        } else {
          image.src = "";
          image.alt = "";
          image.hidden = true;
        }
      }
    });
  };

  const measureStableHeight = () => {
    if (!list) return;

    const previousActiveIndex = activeIndex;
    let maxHeight = 0;

    items.forEach((_, itemIndex) => {
      setActive(itemIndex);
      maxHeight = Math.max(maxHeight, list.getBoundingClientRect().height);
    });

    setActive(previousActiveIndex);
    list.style.minHeight = `${Math.ceil(maxHeight)}px`;
  };

  const startAutoRotation = () => {
    if (prefersReducedMotion || timer) return;
    timer = window.setInterval(() => {
      setActive(activeIndex + 1);
    }, 4000);
  };

  const stopAutoRotation = () => {
    if (!timer) return;
    window.clearInterval(timer);
    timer = null;
  };

  items.forEach((item, itemIndex) => {
    item.addEventListener("click", () => setActive(itemIndex));
    item.addEventListener("mouseenter", stopAutoRotation);
    item.addEventListener("mouseleave", startAutoRotation);
  });

  setActive(0);
  measureStableHeight();
  startAutoRotation();

  window.addEventListener("resize", measureStableHeight);
})();
