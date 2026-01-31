const formEl = document.getElementById("ip-form");
const inputEl = document.getElementById("ip").value;
const btnEl = document.getElementById("btn");

function submitAddress(e) {
  e.preventDefault();

  const API_KEY = "at_vQ2nCgFgR98SHYWZdqoubnRehULwR";
  const url = `https://geo.ipify.org/api/v2/country?apiKey=${API_KEY}&ipAddress=${inputEl || "8.8.8.8"}`;
  if (inputEl == "") {
    alert("enter ip");
  }

  fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error("");
    }
  });
}

formEl.addEventListener("submit", submitAddress);
