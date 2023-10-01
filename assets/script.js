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
    "https://api.openweathermap.org/geo/1.0/direct?" +
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
      console.log(theData[0].lat);
      return theData;
    });
}

searchBtn.addEventListener("click", () => {
  getApi(searchBox.value);
  console.log(theData);
});
