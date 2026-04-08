import { llamas, missions } from "./data.js";

function showLlamas() {
  const llamaBox = document.getElementById("llama-list");
  if (!llamaBox) return;

  llamaBox.innerHTML = llamas.map((llama) => `
    <div class="card">
      <h3>${llama.name}</h3>
      <p>Type: ${llama.type}</p>
      <p>Cost: ${llama.cost} X-Ray Tickets</p>
      <p>${llama.description}</p>
    </div>
  `).join("");
}

function getZoneClass(zone) {
  if (zone === "Stonewood") return "stonewood";
  if (zone === "Plankerton") return "plankerton";
  if (zone === "Canny Valley") return "canny-valley";
  if (zone === "Twine Peaks") return "twine-peaks";
  if (zone === "Ventures") return "ventures";
  return "";
}

function showMissions(list) {
  const missionBox = document.getElementById("mission-list");
  if (!missionBox) return;

  const zones = ["Stonewood", "Plankerton", "Canny Valley", "Twine Peaks", "Ventures"];

  let html = "";

  zones.forEach((zone) => {
    const zoneMissions = list.filter((mission) => mission.zone === zone);

    if (zoneMissions.length > 0) {
      html += `
        <section class="zone-section">
          <h3 class="zone-title ${getZoneClass(zone)}">${zone}</h3>
          <div class="zone-cards">
            ${zoneMissions.map((mission) => `
              <div class="card">
                <h3>${mission.name}</h3>
                <p><strong>Reward:</strong> ${mission.reward}</p>
                <p><strong>Amount:</strong> ${mission.amount}</p>
                <p><strong>Power Level:</strong> ${mission.power}</p>
                <p>${mission.description}</p>
              </div>
            `).join("")}
          </div>
        </section>
      `;
    }
  });

  if (html === "") {
    html = "<p>No missions match this filter.</p>";
  }

  missionBox.innerHTML = html;
}

function setupFilter() {
  const zoneFilter = document.getElementById("zone-filter");
  const rewardFilter = document.getElementById("reward-filter");

  if (!zoneFilter || !rewardFilter) return;

  function updateMissions() {
    let filtered = missions;

    if (zoneFilter.value !== "all") {
      filtered = filtered.filter((mission) => mission.zone === zoneFilter.value);
    }

    if (rewardFilter.value !== "all") {
      filtered = filtered.filter((mission) => mission.reward === rewardFilter.value);
    }

    showMissions(filtered);
  }

  zoneFilter.addEventListener("change", updateMissions);
  rewardFilter.addEventListener("change", updateMissions);

  updateMissions();
}

showLlamas();
setupFilter();