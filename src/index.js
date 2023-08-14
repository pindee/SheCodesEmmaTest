//Setting APIs and units etc.
function handleSearch(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showWeather);
}

function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unitSelect = document.getElementById("unit");
  var unit = unitSelect.options[unitSelect.selectedIndex].value;
  var convertedTemperature;

  if (unit === "celsius") {
    let units = "metric";
  } else if (unit === "fahrenheit") {
    let units = "imperial";
  }
}

function searchCity(event) {
  event.preventDefault();

  var cityInput = document.getElementById("cityInput");
  var cityName = document.getElementById("cityName");

  handleSearch(cityInput.value);
}

function showWeather(response) {
  let h1 = document.querySelector("h1");
  let temperature = Math.round(response.data.main.temp);
  let city = response.data.name;
  let message = `It is ${temperature} degrees in ${response.data.name}`;
  h1.innerHTML = message;
}

function retrievePosition(position) {
  let apiKey = "73e033409ae64db8bc8adc4245bd483c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showWeather);
}

navigator.geolocation.getCurrentPosition(retrievePosition);

let form = document.querySelector("form");
form.addEventListener("submit", searchCity);
