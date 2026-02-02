const formEl = document.getElementById("ip-form");

const btnEl = document.getElementById("btn");
// GLOBAL VARIABLE THAT LETS YOU ACCESS THE MAP
let map;
let marker;

function showMap() {
  map = L.map("map").setView([0, 0], 2);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}
showMap();

function submitAddress(e) {
  e.preventDefault();

  const inputEl = document.getElementById("ip").value.trim();
  if (inputEl === "") {
    alert("Enter IP address");
    return;
  }
  const API_KEY = "at_vQ2nCgFgR98SHYWZdqoubnRehULwR";
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${inputEl}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP Error! ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const resultEl = document.getElementById("result-display");
      resultEl.querySelector(".ip").textContent = data.ip;
      resultEl.querySelector(".location").textContent = data.location.city;
      resultEl.querySelector(".timezone").textContent = data.location.timezone;
      resultEl.querySelector(".isp").textContent = data.isp;
      const { lat, lng } = data.location;
      map.setView([lat, lng], 13);
      if (marker) {
        map.removeLayer(marker);
      }

      marker = L.marker([lat, lng]).addTo(map);
    });
}

formEl.addEventListener("submit", submitAddress);
