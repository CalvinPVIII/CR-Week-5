export class Person {
  constructor(birthday) {
    this.birthday = birthday;
    this.days = 0;
    this.mercuryYears = 0;
    this.venusYears = 0;
    this.marsYears = 0;
    this.jupiterYears = 0

  }
}

Person.prototype.findDaysAlive = function () {
  let milliseconds = Date.now() - this.birthday.getTime();
  this.days = Math.round(milliseconds / 8.64e+7);

};
