let weather = {
  apiKey: "d83aee15964e64ab31cbe1e531fae73c",
  fetchWeather: function () {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=d83aee15964e64ab31cbe1e531fae73c"
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  },
};
