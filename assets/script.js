const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
var theData;

function getApi(city) {
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?" +
    "appid=ba2dc7edbfab0d54f19c776d6eef06fe" +
    "&units=imperial&q=";

  fetch(apiUrl + city)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      let theData = data;
    });
}

searchBtn.addEventListener("click", () => {
  getApi(searchBox.value);
});
