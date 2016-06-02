'use strict'
var app = angular.module("portfolioApp", []);
app.controller("portfolioCtrl", function($scope) {
  $scope.portfolios = [
    {"img": "assets/img/portfolio/photo (1).jpg",
    "link": "http://www.nowakowski-studios.com/drowsy-driving/",
    "title": "Drowsy Driving",
    "project": "Recognizing drowsy driving through yawn and blink detection in a car-mounted webcam, powered by Raspberry Pi"},

    {"img": "assets/img/portfolio/photo (2).jpg",
    "link": "http://vibes-mhealth.weebly.com/",
    "title": "VIBES",
    "project": "Mental health is an area of concern in the United States. It is estimated that 1 of 5 adults suffer from at least one mental illness."}
  ];
});
