(() => {
  const root = document.querySelector("[data-assessment-result]");
  if (!root) return;

  const scoreNode = root.querySelector("[data-result-score]");
  const percentNode = document.querySelector("[data-result-percent]");
  const leadNode = root.querySelector("[data-result-lead]");
  const summaryNode = root.querySelector("[data-result-summary]");
  const listNode = root.querySelector("[data-result-list]");

  if (!scoreNode || !percentNode || !leadNode || !summaryNode || !listNode) return;

  const params = new URLSearchParams(window.location.search);
  const answers = {};
  params.forEach((value, key) => {
    if (key.startsWith("q")) {
      answers[key.replace("q", "")] = value;
    }
  });

  if (!Object.keys(answers).length) {
    scoreNode.textContent = "Brak wyniku";
    percentNode.innerHTML = "0<small>%</small>";
    leadNode.textContent = "Nie znaleziono odpowiedzi z formularza.";
    summaryNode.textContent = "Wróć do oceny i uzupełnij formularz.";
    return;
  }

  const scoreMap = {
    "Tak": 2,
    "Częściowo": 1,
    "Nie": 0,
    "Regularnie": 2,
    "Sporadycznie": 1,
    "1-49": 1,
    "50-249": 1,
    "250+": 2
  };

  const areaLabels = {
    "1": "struktura stanowisk",
    "2": "poziomy lub kategorie stanowisk",
    "3": "widełki wynagrodzeń",
    "4": "kryteria awansów i zmian poziomu",
    "5": "porównywanie wynagrodzeń podobnych ról",
    "6": "spójność danych wynagrodzeniowych",
    "7": "analiza różnic wynagrodzeń"
  };

  const values = Object.entries(answers);
  const total = values.reduce((sum, [, value]) => sum + (scoreMap[value] ?? 0), 0);
  const maxScore = 16;
  const percent = Math.round((total / maxScore) * 100);

  let level = "Średnia gotowość";
  let lead = "Część podstaw jest już uporządkowana, ale są obszary wymagające dopracowania.";
  let summary = "Priorytetowe obszary do uporządkowania:";

  if (percent >= 75) {
    level = "Dobra gotowość";
    lead = "Podstawowe elementy są uporządkowane i można przejść do dalszego wdrożenia.";
    summary = "Najważniejsze obszary do dalszego dopracowania:";
  } else if (percent <= 45) {
    level = "Niska gotowość";
    lead = "Najpierw warto uporządkować podstawy systemu wynagrodzeń i danych.";
    summary = "Najważniejsze obszary do uporządkowania:";
  }

  const weakest = values
    .filter(([key]) => key !== "8")
    .filter(([, value]) => (scoreMap[value] ?? 0) < 2)
    .map(([key, value]) => {
      const prefix = value === "Częściowo" || value === "Sporadycznie" ? "do doprecyzowania" : "do uporządkowania";
      return `${areaLabels[key]} ${prefix}`;
    });

  scoreNode.textContent = level;
  percentNode.innerHTML = `${percent}<small>%</small>`;
  leadNode.textContent = lead;
  summaryNode.textContent = summary;

  listNode.innerHTML = "";
  if (weakest.length) {
    weakest.slice(0, 4).forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      listNode.appendChild(li);
    });
  } else {
    const li = document.createElement("li");
    li.textContent = "podstawowe obszary wyglądają na uporządkowane";
    listNode.appendChild(li);
  }
})();
