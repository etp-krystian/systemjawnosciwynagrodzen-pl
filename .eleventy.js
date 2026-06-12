module.exports = function (eleventyConfig) {
  const buildDate = new Date();
  const iso = buildDate.toISOString();
  const display = `${iso.slice(0, 10)} ${iso.slice(11, 16)} UTC`;

  eleventyConfig.addGlobalData("build", {
    iso,
    display,
  });

  eleventyConfig.addShortcode("ms", (name, options = {}) => {
    const iconName = (name || "").toString().trim();
    if (!iconName.length) return "";

    const opts = options && typeof options === "object" ? options : {};
    const className = (opts.class || "material-symbols-rounded").toString().trim();
    const label = (opts.label || "").toString().trim();
    const iconMap = {
      arrow_forward:
        '<path d="M5 12h14" /><path d="m13 6 6 6-6 6" />',
      calendar_month:
        '<rect x="3.5" y="5" width="17" height="15.5" rx="2.5" /><path d="M7.5 3.5v3" /><path d="M16.5 3.5v3" /><path d="M3.5 9.5h17" />',
      cookie:
        '<path d="M12 3.5a8.5 8.5 0 1 0 8.5 8.5A5.5 5.5 0 0 1 15 6.5 3 3 0 0 1 12 3.5Z" /><circle cx="8.9" cy="12" r="1.1" fill="currentColor" stroke="none" /><circle cx="12.8" cy="14.9" r="1" fill="currentColor" stroke="none" /><circle cx="10.8" cy="9.3" r="0.9" fill="currentColor" stroke="none" />',
      rocket_launch:
        '<path d="M8.3 15.7c-1.7 1.3-2.8 3.4-2.8 5.8 2.4 0 4.5-1.1 5.8-2.8m0 0 4.2-4.2m-4.2 4.2-3-3m7.2-7.2c2.6-2.6 5.8-3.7 7.8-4-.3 2-1.4 5.2-4 7.8m-3.8-3.8 3.8 3.8M14.8 6.2l2.9 2.9" />',
      search:
        '<circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" />',
    };

    const svgBody = iconMap[iconName];
    if (!svgBody) {
      if (label.length) {
        return `<span class="${className}" role="img" aria-label="${label.replace(/\"/g, "&quot;")}">${iconName}</span>`;
      }
      return `<span class="${className}" aria-hidden="true">${iconName}</span>`;
    }

    const roleAttrs = label.length
      ? ` role="img" aria-label="${label.replace(/\"/g, "&quot;")}"`
      : ' aria-hidden="true"';

    return `<svg class="${className}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"${roleAttrs}>${svgBody}</svg>`;
  });

  eleventyConfig.addPassthroughCopy({
    "src/images": "images",
    "src/js": "js",
    "src/_redirects": "_redirects",
    "src/_headers": "_headers",
    "src/favicon.ico": "favicon.ico",
    "src/favicon.svg": "favicon.svg",
    "src/favicon-16x16.png": "favicon-16x16.png",
    "src/favicon-32x32.png": "favicon-32x32.png",
    "src/apple-touch-icon.png": "apple-touch-icon.png",
    "src/web-app-manifest-192x192.png": "web-app-manifest-192x192.png",
    "src/web-app-manifest-512x512.png": "web-app-manifest-512x512.png",
    "src/site.webmanifest": "site.webmanifest",
    "src/d859d2f35fbe4132bc0a858c5f832aff.txt": "d859d2f35fbe4132bc0a858c5f832aff.txt",
    "src/722af461e9cb4d108ffaadea3226b9ab.txt": "722af461e9cb4d108ffaadea3226b9ab.txt"
  });

  // Draft support:
  // - `draft: true` => do not write output + exclude from collections.
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => (data.draft ? false : data.permalink),
    eleventyExcludeFromCollections: (data) =>
      data.draft ? true : data.eleventyExcludeFromCollections,
  });

  eleventyConfig.addFilter("readableDate", (dateObj, locale = "en") => {
    if (!dateObj) return "";
    try {
      return new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "2-digit",
      }).format(dateObj);
    } catch {
      return String(dateObj);
    }
  });

  eleventyConfig.addFilter("json", (value) => JSON.stringify(value));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
