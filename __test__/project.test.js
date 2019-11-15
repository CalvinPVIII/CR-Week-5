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
    expect(person.mercuryYears).toEqual("30.4");
  });
});
