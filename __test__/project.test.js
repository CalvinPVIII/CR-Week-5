import { Person } from './../src/backend.js'

describe ('Number of Days Alive Function', () => {
  test ('Should return number of days person has been alive', () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date);
    person.findDaysAlive();
    expect(person.days).toEqual(6848);
  });
});

describe ('Number of Mercury Years Function', () => {
  test ("Should return person's age in Mercury years", () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date);
    person.findDaysAlive();
    person.findMercuryYears();
    expect(person.mercuryYears).toEqual("77.8");
  });
});

describe ('Number of Venus Years Function', () => {
  test ("Should return person's age in Venus years", () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date);
    person.findDaysAlive();
    person.findVenusYears();
    expect(person.venusYears).toEqual("30.4");
  });
});

describe ('Number of Mars Years Function', () => {
  test ("Should return person's age in Mars years", () => {
    let date = new Date ('February 14 2001');
    let person = new Person (date);
    person.findDaysAlive();
    person.findMarsYears();
    expect(person.marsYears).toEqual("10.0");
  });
});

describe ('Number of Jupiter Years Function', () => {
  test ("Should return person's age in Jupiter years", () => {
    let date = new Date ('November 11 1966');
    let person = new Person (date);
    person.findDaysAlive();
    person.findJupiterYears();
    expect(person.jupiterYears).toEqual("4.5");
  });
});
