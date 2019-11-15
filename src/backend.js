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
  this.days = Math.round((Date.now() - this.birthday.getTime()) / 8.64e+7);

};

Person.prototype.findMercuryYears = function () {
  this.mercuryYears = (this.days / 88).toFixed(1);
}

Person.prototype.findVenusYears = function () {
   this.venusYears = (this.days / 225).toFixed(1);
}

Person.prototype.findMarsYears = function () {

}
