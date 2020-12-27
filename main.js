window.addEventListener('load', () => {
  console.log('Javascript Loaded!');

  const number = +prompt('Enter a number: ');

  const isEven = number % 2 === 0;

  const outputString = number + ' is ' + (isEven ? 'Even.' : 'Odd.');

  alert(outputString);
});
