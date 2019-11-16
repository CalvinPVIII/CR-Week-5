import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
  Person
} from './../src/backend.js';

let uiChanger = function(personObject) {
  $("#daysOld").text(personObject.days);
  $("#mercuryYears").text(personObject.mercuryYears);
  $("#venusYears").text(personObject.venusYears);
  $("#marsYears").text(personObject.marsYears);
  $("#jupiterYears").text(personObject.jupiterYears);
  if (personObject.yearsLeft[0] > 0) {
    $(".result-younger-expectancy").show();
    $(".result-older-expectancy").hide();
    $("#earthLeft").text(personObject.yearsLeft[0]);
    $("#mercuryLeft").text(personObject.yearsLeft[1]);
    $("#venusLeft").text(personObject.yearsLeft[2]);
    $("#marsLeft").text(personObject.yearsLeft[3]);
    $("#jupiterLeft").text(personObject.yearsLeft[4]);

  } else if (personObject.yearsLeft[0] < 1) {
    $(".result-older-expectancy").show();
    $(".result-younger-expectancy").hide();
    for (let i = 0; i < personObject.yearsLeft.length; i++) {
      personObject.yearsLeft[i] *= -1;
    }
    $("#earthExtra").text(personObject.yearsLeft[0]);
    $("#mercuryExtra").text(personObject.yearsLeft[1]);
    $("#venusExtra").text(personObject.yearsLeft[2]);
    $("#marsExtra").text(personObject.yearsLeft[3]);
    $("#jupiterExtra").text(personObject.yearsLeft[4]);
  }
  $(".result-age-on-planets").show();
};

$(document).ready(function() {
  $("#userInfo").submit(function(e) {
    e.preventDefault();
    let userBirthdate = new Date(`${$("#month").val()} ${$("#day").val()} ${$("#year").val()}`);
    let userInformation = new Person(userBirthdate, parseInt($("#continent").val()), parseInt($("#gender").val()));
    userInformation.findDaysAliveAndAgeOnEachPlanetAndLifeExpectancyAndYearsLeftOnEachPlanet();
    uiChanger(userInformation);
  });
});
