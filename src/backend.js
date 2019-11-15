export class Person {
  constructor(birthday, continent, gender) {
    this.birthday = birthday;
    this.continent = continent;
    this.gender = gender;
    this.days = 0;
    this.lifeExpectancy = 0;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0;
    this.yearsLeft = [];

  }
}

Person.prototype.findDaysAliveAndAgeOnEachPlanetAndLifeExpectancyAndYearsLeftOnEachPlanet = function () {
  this.days = Math.round((Date.now() - this.birthday.getTime()) / 8.64e+7);
  this.mercuryYears = (this.days / 88).toFixed(1);
  this.venusYears = (this.days / 225).toFixed(1);
  this.marsYears = (this.days / 687).toFixed(1);
  this.jupiterYears = (this.days / 4300).toFixed(1);
  this.lifeExpectancy = this.gender + this.continent
  let daysLeft = (this.lifeExpectancy * 365) - this.days;
  this.yearsLeft = [(daysLeft/365).toFixed(1), (daysLeft/88).toFixed(1), (daysLeft/225).toFixed(1), (daysLeft/687).toFixed(1), (daysLeft/4300).toFixed(1)]

}
