window.addEventListener('load', () => {
  console.log('Javascript Loaded!');

  const marks1 = +prompt('Enter 1st subject Marks: ');
  const marks2 = +prompt('Enter 2nd subject Marks: ');
  const marks3 = +prompt('Enter 3rd subject Marks: ');

  const averageMarks = (marks1 + marks2 + marks3) / 3;

  if (averageMarks > 80) alert("You're above standard, Admission Granted!");
  else alert("You're below standard, Admission denied!");
});
