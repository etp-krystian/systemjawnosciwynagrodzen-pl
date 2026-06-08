(() => {
  const root = document.querySelector("[data-assessment-flow]");
  if (!root) return;

  const steps = Array.from(root.querySelectorAll("[data-assessment-step]"));
  const progressCurrent = root.querySelector("[data-assessment-current]");
  const progressTotal = root.querySelector("[data-assessment-total]");
  const progressBar = root.querySelector("[data-assessment-progress]");
  const backButton = root.querySelector("[data-assessment-back]");
  const submitButton = root.querySelector("[data-assessment-submit]");

  if (!steps.length || !backButton || !submitButton || !progressCurrent || !progressTotal || !progressBar) return;

  const answers = new Map();
  let activeIndex = 0;
  let autoAdvanceTimer = null;

  const updateStepState = () => {
    steps.forEach((step, index) => {
      step.classList.toggle("is-active", index === activeIndex);
    });

    const currentStep = steps[activeIndex];
    const selected = currentStep?.querySelector(".assessment-option.is-selected");
    const progress = ((activeIndex + 1) / steps.length) * 100;

    progressCurrent.textContent = String(activeIndex + 1);
    progressTotal.textContent = String(steps.length);
    progressBar.style.width = `${progress}%`;

    backButton.disabled = activeIndex === 0;
    submitButton.hidden = activeIndex !== steps.length - 1;
    submitButton.disabled = activeIndex !== steps.length - 1 || !selected;
  };

  const selectAnswer = (step, option) => {
    const options = Array.from(step.querySelectorAll(".assessment-option"));
    options.forEach((item) => item.classList.remove("is-selected"));
    option.classList.add("is-selected");
    answers.set(step.dataset.assessmentStep, option.dataset.value || option.textContent.trim());
    updateStepState();

    if (autoAdvanceTimer) {
      window.clearTimeout(autoAdvanceTimer);
      autoAdvanceTimer = null;
    }

    if (activeIndex < steps.length - 1) {
      autoAdvanceTimer = window.setTimeout(() => {
        activeIndex += 1;
        updateStepState();
        root.scrollIntoView({ block: "start", behavior: "smooth" });
      }, 140);
    }
  };

  steps.forEach((step) => {
    const options = Array.from(step.querySelectorAll(".assessment-option"));
    options.forEach((option) => {
      option.addEventListener("click", () => {
        selectAnswer(step, option);
      });
    });
  });

  backButton.addEventListener("click", () => {
    if (activeIndex === 0) return;
    activeIndex -= 1;
    updateStepState();
    root.scrollIntoView({ block: "start", behavior: "smooth" });
  });

  submitButton.addEventListener("click", () => {
    const currentStep = steps[activeIndex];
    const selected = currentStep?.querySelector(".assessment-option.is-selected");
    if (!selected) return;

    const params = new URLSearchParams();
    answers.forEach((value, key) => {
      params.set(`q${key}`, value);
    });
    window.location.href = `/ocena-gotowosci-organizacji/wynik/?${params.toString()}`;
  });

  updateStepState();
})();
