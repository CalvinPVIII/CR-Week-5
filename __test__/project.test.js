import { Person } from './../src/backend.js'

describe ('Number of Days Alive, Age on Each Planet, Life Expectancy, Years Left on Each Planet', () => {
  test ("Should return the number of days the person has been alive, their age on each planet, their life expectancy, and their years left on each planet or years they have lived passed the life expectancy", () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date, 76, 0 );
    person.findDaysAliveAndAgeOnEachPlanetAndLifeExpectancyAndYearsLeftOnEachPlanet();
    expect(person.yearsLeft).toEqual(["57.2", "237.4", "92.8", "30.4", "4.9"]);
    expect(person.lifeExpectancy).toEqual(76);
    expect(person.days).toEqual(6849);
    expect(person.mercuryYears).toEqual("77.8");
    expect(person.venusYears).toEqual("30.4");
    expect(person.marsYears).toEqual("10.0");
    expect(person.jupiterYears).toEqual("1.6");
  });
});
