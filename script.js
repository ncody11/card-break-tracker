const teams = [
  "cardinals","falcons","ravens","bills","panthers","bears",
  "bengals","browns","cowboys","broncos","lions","packers",
  "texans","colts","jaguars","chiefs","raiders","chargers",
  "rams","dolphins","vikings","patriots","saints","giants",
  "jets","eagles","steelers","49ers","seahawks","buccaneers",
  "titans","commanders"
];

const container = document.getElementById("teams");
const soldCount = document.getElementById("soldCount");

let sold = {};

teams.forEach(team => {
  const div = document.createElement("div");
  div.className = "team";

  div.innerHTML = `
    <img src="logos/${team}.png">
    <div class="team-name">${team.toUpperCase()}</div>
  `;

  div.onclick = () => {
    if (!sold[team]) {
      const name = prompt("Enter buyer name:");
      if (!name) return;

      sold[team] = name;

      const overlay = document.createElement("div");
      overlay.className = "sold-overlay";
      overlay.innerText = name;

      div.appendChild(overlay);
      div.classList.add("sold");

    } else {
      delete sold[team];
      div.classList.remove("sold");
      div.querySelector(".sold-overlay")?.remove();
    }

    soldCount.innerText = Object.keys(sold).length;
  };

  container.appendChild(div);
});
