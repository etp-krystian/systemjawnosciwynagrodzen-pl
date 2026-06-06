(function () {
  const root = document.getElementById("changelog-list");

  if (!root) {
    return;
  }

  const endpoint = root.dataset.changelogEndpoint;

  if (!endpoint) {
    return;
  }

  const sectionLabels = [
    ["newFeatures", "Nowe funkcje"],
    ["improvements", "Ulepszenia"],
    ["fixes", "Poprawki"],
  ];

  function getReleaseTimestamp(release) {
    const timestamp = new Date(release && release.releaseDate ? release.releaseDate : "").getTime();
    return Number.isNaN(timestamp) ? 0 : timestamp;
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => {
      switch (char) {
        case "&":
          return "&amp;";
        case "<":
          return "&lt;";
        case ">":
          return "&gt;";
        case '"':
          return "&quot;";
        case "'":
          return "&#39;";
        default:
          return char;
      }
    });
  }

  function formatDate(value) {
    if (!value) {
      return "";
    }

    const date = new Date(value);

    if (Number.isNaN(date.getTime())) {
      return escapeHtml(value);
    }

    return new Intl.DateTimeFormat("pl-PL", {
      year: "numeric",
      month: "long",
      day: "2-digit",
    }).format(date);
  }

  function renderRelease(release) {
    const parts = [
      '<article class="changelog-entry">',
      `<h2>${escapeHtml(release.version || "Aktualizacja")}</h2>`,
      `<p><strong>Data:</strong> ${formatDate(release.releaseDate)}</p>`,
    ];

    for (const [key, label] of sectionLabels) {
      const items = Array.isArray(release[key]) ? release[key] : [];

      if (!items.length) {
        continue;
      }

      parts.push(`<h3>${label}</h3>`);
      parts.push("<ul>");

      for (const item of items) {
        parts.push(`<li>${escapeHtml(item)}</li>`);
      }

      parts.push("</ul>");
    }

    parts.push("</article>");
    return parts.join("");
  }

  function renderReleases(releases) {
    if (!releases.length) {
      root.innerHTML = '<p class="blog-empty">Brak aktualizacji do wyświetlenia.</p>';
      return;
    }

    const sortedReleases = releases
      .slice()
      .sort((a, b) => getReleaseTimestamp(b) - getReleaseTimestamp(a));

    const markup = sortedReleases
      .map((release) => renderRelease(release))
      .join("");

    root.innerHTML = markup;
  }

  async function loadChangelog() {
    try {
      const response = await fetch(endpoint, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json();
      const releases = Array.isArray(data?.releases) ? data.releases : [];

      renderReleases(releases);
    } catch (error) {
      console.warn("[changelog] Failed to refresh changelog in browser:", error);
    }
  }

  loadChangelog();
})();
