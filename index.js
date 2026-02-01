const formEl = document.getElementById("ip-form");

const btnEl = document.getElementById("btn");

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
    });
}

formEl.addEventListener("submit", submitAddress);
