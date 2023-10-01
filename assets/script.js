// this returns the lat and long of city name in the input field
const apiKey = "ba2dc7edbfab0d54f19c776d6eef06fe";
const apiUrl =
  "https://api.openweathermap.org/geo/1.0/direct?" +
  "appid=" +
  apiKey +
  "&units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city);
  var data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
