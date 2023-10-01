// this returns the lat and long of city name in the input field
// const apiKey = "ba2dc7edbfab0d54f19c776d6eef06fe";
// const apiUrl =
//   "https://api.openweathermap.org/geo/1.0/direct?" +
//   "appid=ba2dc7edbfab0d54f19c776d6eef06fe" +
//   apiKey +
//   "&units=imperial&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
var theData;
// let cityLat = "";
// let cityLon = "";

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
      //   cityLat = theData[0].lat;
      //   cityLon = theData[0].lon;
    });
}

searchBtn.addEventListener("click", () => {
  getApi(searchBox.value);
});
// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city);
//   var data = await response.json();

//   console.log(data);
//   document.querySelector(".city").innerHTML = data[0].name;
//   // gets lat and lon
////   cityLon = data[0].lon;
//   cityLon = data[0].lon;
//   console.log(cityLon);

// }

// // now we need to get the five day data

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });
