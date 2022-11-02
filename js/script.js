// Copyright (c) 2022 Ashley Monaghan All rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2OR-Unit-3-03/sw.js", {
    scope: "/ICS2OR-Unit-3-03/",
  })
}

/**
 * This function displays an alert.
 * Math
 */
function calculate() {
  // input
  const r = parseInt(document.getElementById("radius").value)

  // process
  const math = (4.0/3.0) * Math.PI * Math.pow(r, 3)
  // output
  document.getElementById("math").innerHTML = "Numbers: " + math.toFixed(2) + " units"
}