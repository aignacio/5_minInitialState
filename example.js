'use strict';
let libIS = require('initial-state');
let bucket = libIS.bucket('Dark Side example', 'ibnJuQMFPlKjCxOmIep82kLhMlCO2kld');
let sensorA = true,
    sensorB = 1;

setInterval(function() {
  bucket.push('Sensor A - Temperature of the bacon', !sensorA);
}, 2000);

setInterval(function() {
  sensorB = sensorB+1;
  bucket.push('Sensor B - Voltage of the ESD', sensorB);
}, 3500);
