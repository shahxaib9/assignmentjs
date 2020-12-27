window.addEventListener('load', () => {
  console.log('Javascript Loaded!');

  const tempCelsius = +prompt('Enter a temperature in celsius: ');
  const tempFahrenheit = (9 / 5) * tempCelsius + 32;

  const outputString =
    'Temprature in Celsius: ' +
    tempCelsius.toFixed(2) +
    '°C \nTemprature in Fahrenheit: ' +
    tempFahrenheit.toFixed(2) +
    '°F';

  alert(outputString);
});
