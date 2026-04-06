import { missions } from "./data.js";

function getZoneClass(zone) {
  if (zone === "Stonewood") return "zone-stonewood";
  if (zone === "Plankerton") return "zone-plankerton";
  if (zone === "Canny Valley") return "zone-canny";
  if (zone === "Twine Peaks") return "zone-twine";
  return "zone-ventures";
}

function createMissionRow(mission) {
  const specialReward =
    mission.reward === "V-Bucks" || mission.reward === "Legendary Survivor";

  return `
    <article class="mission-row">
      <div class="mission-main">
        <h3>${mission.mission}</h3>
        <p>${mission.description}</p>
      </div>
      <div class="reward-side">
        <span class="badge reward ${specialReward ? "special" : ""}">${mission.reward}</span>
        <span class="badge amount">x${mission.amount}</span>
      </div>
    </article>
  `;
}

function groupMissionsByZone(missionList) {
  const grouped = {};

  missionList.forEach((mission) => {
    if (!grouped[mission.zone]) {
      grouped[mission.zone] = [];
    }
    grouped[mission.zone].push(mission);
  });

  return grouped;
}

function renderMissions(missionList) {
  const container = document.querySelector("#missions-container");
  const resultsText = document.querySelector("#results-text");

  if (!container || !resultsText) return;

  resultsText.textContent = `Showing ${missionList.length} mission${missionList.length === 1 ? "" : "s"}.`;

  if (missionList.length === 0) {
    container.innerHTML = `<div class="empty-state">No missions match your filters.</div>`;
    return;
  }

  const grouped = groupMissionsByZone(missionList);

  const zoneOrder = ["Stonewood", "Plankerton", "Canny Valley", "Twine Peaks", "Ventures"];

  container.innerHTML = zoneOrder
    .filter((zone) => grouped[zone])
    .map((zone) => {
      return `
        <section class="zone-group ${getZoneClass(zone)}">
          <div class="zone-header">${zone}</div>
          <div class="zone-list">
            ${grouped[zone].map(createMissionRow).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function filterAndSortMissions() {
  const rewardFilter = document.querySelector("#reward-filter");
  const zoneFilter = document.querySelector("#zone-filter");
  const sortFilter = document.querySelector("#sort-filter");

  let filtered = [...missions];

  if (rewardFilter.value !== "all") {
    filtered = filtered.filter((mission) => mission.reward === rewardFilter.value);
  }

  if (zoneFilter.value !== "all") {
    filtered = filtered.filter((mission) => mission.zone === zoneFilter.value);
  }

  if (sortFilter.value === "reward") {
    filtered.sort((a, b) => a.reward.localeCompare(b.reward));
  } else if (sortFilter.value === "amount") {
    filtered.sort((a, b) => b.amount - a.amount);
  } else {
    const zoneOrder = ["Stonewood", "Plankerton", "Canny Valley", "Twine Peaks", "Ventures"];
    filtered.sort((a, b) => zoneOrder.indexOf(a.zone) - zoneOrder.indexOf(b.zone));
  }

  renderMissions(filtered);
}

function setupControls() {
  const rewardFilter = document.querySelector("#reward-filter");
  const zoneFilter = document.querySelector("#zone-filter");
  const sortFilter = document.querySelector("#sort-filter");
  const resetButton = document.querySelector("#reset-button");

  if (!rewardFilter || !zoneFilter || !sortFilter || !resetButton) return;

  rewardFilter.addEventListener("change", filterAndSortMissions);
  zoneFilter.addEventListener("change", filterAndSortMissions);
  sortFilter.addEventListener("change", filterAndSortMissions);

  resetButton.addEventListener("click", () => {
    rewardFilter.value = "all";
    zoneFilter.value = "all";
    sortFilter.value = "zone";
    filterAndSortMissions();
  });
}

function init() {
  if (document.querySelector("#missions-container")) {
    setupControls();
    filterAndSortMissions();
  }
}

init();