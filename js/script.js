// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Olivia Ten Den
// Created on: Mar 24, 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates the users take home salary and amount of income tax they must pay.
 */
function calculateUserPayAndTax() {
  // input
  const ONTARIO_INCOME_TAX = 0.18

  const numberOfHoursWorked = parseFloat(
    document.getElementById("number-of-hours-worked").value
  )

  const hourlyWage = parseFloat(document.getElementById("hourly-wage").value)

  // process
  const incomeTaxToPay = (numberOfHoursWorked * hourlyWage) * ONTARIO_INCOME_TAX
  const takeHomeSalary = (numberOfHoursWorked * hourlyWage) - incomeTaxToPay

  // output
  document.getElementById("take-home-salary").innerHTML =
    "Your take home salary will be: $" + takeHomeSalary.toFixed(2)
    document.getElementById("income-tax-to-pay").innerHTML =
    "The amount of income tax you will pay will be: $" + incomeTaxToPay.toFixed(2)
}
