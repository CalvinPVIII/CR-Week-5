import { Person } from './../src/backend.js'
// The get days function is based on the exact time the function is ran. These tests are updated and passing as of 11/21/2019, but will be slightly off on any later dates
describe ('Person', () => {
  test ('Should return number of days person has been alive', () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date);
    person.findDaysAlive();
    expect(person.days).toEqual(6855);
  });

  test ("Should return person's age on each planet", () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date);
    person.findDaysAlive();
    person.findAgeOnEachPlanet();
    expect(person.mercuryYears).toEqual("77.9");
    expect(person.venusYears).toEqual("30.5");
    expect(person.marsYears).toEqual("10.0");
    expect(person.jupiterYears).toEqual("1.6");
  });


  test ("Should return the user's life expectancy", () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date, 76, 0);
    person.findDaysAlive();
    person.getLifeExpectancy();
    expect(person.lifeExpectancy).toEqual(76);
  });


  test ("Should return an array of numbers that correlate to the years left a person has on for each planet, or how many years they have lived passed life expectancy", () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date, 76, 0 );
    person.findDaysAlive();
    person.getLifeExpectancy();
    person.howManyYearsLeft();
    expect(person.yearsLeft).toEqual(["57.2", "237.3", "92.8", "30.4", "4.9"]);
  });
});
