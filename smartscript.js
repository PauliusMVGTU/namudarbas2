let currentTemperature = 24; 

function updateTemperature(value) {
  currentTemperature = value;
  updateTemperatureDisplay();
}

function updateTemperatureDisplay() {
  document.getElementById('temperatureDisplay').innerText = currentTemperature + '°C';
}