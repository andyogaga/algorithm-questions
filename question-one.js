/* 
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
Implement a function that returns the number of years to see the population >= 1200 inhabitants.
Hints:
Your function can look like this:
function nbYear (p0, percent, aug, p) {
    // your code
}
More generally given parameters:
p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)
the function nb_year should return n number of entire years needed to get a population greater or equal to p.
aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
Note: Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
*/

function nbYear(p0, percent, aug, p) {
  if (!Number.isInteger(p0) || p0 <= 0) {
    return null;
  }
  if (percent !== null && (!Number.isInteger(percent) || percent <= 0)) {
    return null;
  }
  if (!Number.isInteger(aug)) {
    return null;
  }
  if (!Number.isInteger(p) || p <= 0) {
    return null;
  }
  const percentageDecimal = percent / 100;
  let years = 0;
  let percentage = 1 + percentageDecimal;
  let population = p0;
  while (population < p) {
    years++;
    population = (population * percentage)+ aug;
  }
  return years;
}

console.log('result using while loop', nbYear(1000, 2, 100, 3000));


// Solution Using recursion

const getYears = (p0, percent, aug, p, year) => {
  if(p0 > p) return year;
  const population = (p0 * (1 + percent)) + aug;
  year++;
  return getYears(population, percent, aug, p, year)
}

function nbYearRecursion(p0, percent, aug, p) {
  if (!Number.isInteger(p0) || p0 <= 0) {
    return null;
  }
  if (percent !== null && (!Number.isInteger(percent) || percent <= 0)) {
    return null;
  }
  if (!Number.isInteger(aug)) {
    return null;
  }
  if (!Number.isInteger(p) || p <= 0) {
    return null;
  }
  const percentageDecimal = percent / 100;
  return getYears(p0, percentageDecimal, aug, p, 0);
}

console.log('result using recursion', nbYearRecursion(1000, 2, 100, 3000));