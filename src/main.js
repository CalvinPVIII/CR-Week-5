import $ from 'jquery'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
  Person
} from './../src/backend.js'

$(document).ready(function() {
  $("#userInfo").submit(function(e) {
    e.preventDefault();
    let userBirthdate = new Date(`${$("#month").val()} ${$("#day").val()} ${$("#year").val()}`)
    let userInformation = new Person(userBirthdate, parseInt($("#continent").val()), parseInt($("#gender").val()))
    userInformation.findDaysAliveAndAgeOnEachPlanetAndLifeExpectancyAndYearsLeftOnEachPlanet();

  });
});
