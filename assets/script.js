const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
document.getElementById("weatherContainer").style.display = "none";

function getApi(city) {
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?appid=ba2dc7edbfab0d54f19c776d6eef06fe&units=imperial&q=";
  document.querySelector(".cityName").innerHTML = searchBox.value;
  fetch(apiUrl + city)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Temp").innerHTML =
          "Temp " + data.list[i].main.temp + "°";
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Humid").innerHTML =
          "Humidity " + data.list[i].main.humidity + "%";
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("day" + (i + 1) + "Wind").innerHTML =
          "Wind Speed  " + data.list[i].wind.speed + "mph";
      }
      for (i = 0; i < 5; i++) {
        document.getElementById("img" + (i + 1)).src =
          "https://openweathermap.org/img/wn/" +
          data.list[i].weather[0].icon +
          ".png";
      }
    });
}
searchBtn.addEventListener("click", () => {
  getApi(searchBox.value);

  document.getElementById("weatherContainer").style.display = "flex";
  localStorage.setItem("memory 1", searchBox.value);
  document.getElementById("memOne").innerHTML =
    localStorage.getItem("memory 1");
});
localStorage.setItem("memory 1", searchBox.value);
document.getElementById("memOne").innerHTML = localStorage.getItem("memory 1");
