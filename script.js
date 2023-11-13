document.addEventListener("DOMContentLoaded", () => {
    const apiKey = "65dc902d84dfa41d9b933b63b22f7bd0";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
  
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");

  
    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
      var data = await response.json();
      console.log(data);
  
      document.querySelector(".city").innerHTML = data.name;
      document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
      document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
      document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
  
      if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/weather/clouds.png";
      } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/weather/clear.png";
      } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/weather/rain.png";
      } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/weather/drizzle.png";
      } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/weather/mist.png";
      }
    }
  
    searchBtn.addEventListener("click", () => {
      checkWeather(searchBox.value);
    });
  
    searchBox.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        checkWeather(searchBox.value);
      }
    });

  });
  