/*global Weather*/

Weather.getCurrent("Kansas City", function(current) {
  console.log(
    ["currently:",current.temperature(),"and",current.conditions()].join(" ")
  );
});

Weather.getForecast("Kansas City", function(forecast) {
  console.log("Forecast High in Kelvin: " + forecast.high());
  console.log("Forecast High in Fahrenheit" + Weather.kelvinToFahrenheit(forecast.high()));
  console.log("Forecast High in Celsius" + Weather.kelvinToCelsius(forecast.high()));
});