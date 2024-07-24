"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let disc = Math.pow(b, 2) - 4 * a * c;
  if (disc === 0) {
    arr[0] = -b / (2 * a);
  } else if (disc > 0) {
    arr[0] = (-b + Math.sqrt(disc)) / (2 * a);
    arr[1] = (-b - Math.sqrt(disc)) / (2 * a);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent /= 100;
  let creditBody = amount - contribution;
  let p = percent / 12;
  let monthPayment = creditBody * (p + (p / (Math.pow(1 + p, countMonths) - 1)));
  let payment = monthPayment * countMonths
  return +payment.toFixed(2);
}