const { execFileSync } = require("node:child_process");

const CHANGELOG_URL = "https://konto.systemjawnosciwynagrodzen.pl/api/changelog";

function getReleaseTimestamp(release) {
  const timestamp = new Date(release?.releaseDate ?? "").getTime();
  return Number.isNaN(timestamp) ? 0 : timestamp;
}

module.exports = async function () {
  try {
    const response = execFileSync("curl", ["-sS", CHANGELOG_URL], {
      encoding: "utf8",
    });
    const data = JSON.parse(response);
    const releases = Array.isArray(data?.releases) ? data.releases.slice().sort((a, b) => {
      return getReleaseTimestamp(b) - getReleaseTimestamp(a);
    }) : [];

    return {
      releases,
    };
  } catch (error) {
    console.warn(`[changelog] Failed to fetch ${CHANGELOG_URL}: ${error.message}`);

    return {
      releases: [],
    };
  }
};
