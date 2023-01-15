document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "d83aee15964e64ab31cbe1e531fae73c";
  let city = "Athens";

  const temp = document.querySelector(".temp");
  const cityHTML = document.querySelector(".city");
  const description = document.querySelector(".description");
  const humidity = document.querySelector(".humidity");
  const wind = document.querySelector(".wind");
  const icon = document.querySelector(".icon");
  const searchBar = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search button");

  // fetch
  const fetchWeather = async () => {
    const fetchApi = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
    const result = await fetchApi.json();
    // console.log(result);
    cityHTML.innerText = `Weather in ${result.name}`;
    temp.innerHTML = `${result.main.temp}°C`;
    description.innerText = result.weather[0].description;
    humidity.innerText = `Humidity: ${result.main.humidity}%`;
    wind.innerText = `Wind speed: ${result.wind.speed} km/h`;
    icon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}.png`;
    //   hide stats on loading
    document.querySelector(".weather").classList.remove("loading");
  };

  // search-bar
  searchButton.addEventListener("click", (e) => {
    e.preventDefault;
    city = searchBar.value;
    fetchWeather();
  });
  searchBar.addEventListener("keyup", (e) => {
    if (e.key == "Enter") {
      city = searchBar.value;
      fetchWeather();
    }
  });
  //   closing DOMContentLoaded
});
