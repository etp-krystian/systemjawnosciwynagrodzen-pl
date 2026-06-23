(() => {
  const root = document.getElementById("home-pattern-tabs");
  if (!root) return;

  const tabs = Array.from(root.querySelectorAll('[role="tab"]'));
  const panels = tabs
    .map((tab) => document.getElementById(tab.getAttribute("aria-controls") || ""))
    .filter(Boolean);

  if (!tabs.length || !panels.length) return;

  const activateTab = (nextTab, moveFocus = true) => {
    tabs.forEach((tab) => {
      const isActive = tab === nextTab;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
      tab.tabIndex = isActive ? 0 : -1;
    });

    panels.forEach((panel) => {
      const isActive = panel.id === nextTab.getAttribute("aria-controls");
      panel.hidden = !isActive;
    });

    if (moveFocus) {
      nextTab.focus();
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activateTab(tab, false));

    tab.addEventListener("keydown", (event) => {
      let targetIndex = null;

      if (event.key === "ArrowRight") {
        targetIndex = (index + 1) % tabs.length;
      } else if (event.key === "ArrowLeft") {
        targetIndex = (index - 1 + tabs.length) % tabs.length;
      } else if (event.key === "Home") {
        targetIndex = 0;
      } else if (event.key === "End") {
        targetIndex = tabs.length - 1;
      }

      if (targetIndex === null) return;

      event.preventDefault();
      activateTab(tabs[targetIndex]);
    });
  });
})();
