/* eslint-disable */
/*
1- Use a constructor function to implement a Laptop. ✅

    a. A laptop has a brand, model, and batteryPercentage properties. ✅
    b. The batteryPercentage property is the current battery level of the laptop. ✅
2- Implement a useSoftware method that will decrease the laptop's batteryPercentage by 15 and log the new battery level to the console.

3- Implement a charge method that will increase the laptop's batteryPercentage by 25, but it should not exceed 100. Also, log the new battery level to the console.

4- Create 2 laptop objects and experiment with calling useSoftware and charge multiple times on each of them.
*/

const decrease = 15;
const increase = 25;

class labtop {
  constructor(brand, model, batteryPrecent = 100) {
    this.brand = brand;
    this.model = model;
    this.batteryPrecent = batteryPrecent;
  }

  useSoftware() {
    if (this.batteryPrecent >= 15) {
      this.batteryPrecent -= decrease;
      console.log(`the battery now is ${this.batteryPrecent}%`);
    } else {
      console.log("Battery low ");
    }
  }

  charge() {
    this.batteryPrecent += increase;
    if (this.batteryPrecent > 100) {
      this.batteryPrecent = 100;
    }
    console.log(`the battery after charging ${this.batteryPrecent}%`);
  }
}
const lab1 = new labtop("lenovo", "2024");
const lab2 = new labtop("mac", "pro");

// ======================

// function labtop(brand, model, batteryPrecent = 100) {
//   this.brand = brand;
//   this.model = model;
//   this.batteryPrecent = batteryPrecent;
// }
// labtop.prototype.useSoftware = function () {
//   if (this.batteryPrecent >= 15) {
//     this.batteryPrecent -= decrease;
//     console.log(`the battery now is ${this.batteryPrecent}%`);
//   } else {
//     console.log("Battery low ");
//   }
// };

// labtop.prototype.charge = function () {
//   this.batteryPrecent += increase;
//   if (this.batteryPrecent > 100) {
//     this.batteryPrecent = 100;
//   }
//   console.log(`the battery after charging ${this.batteryPrecent}%`);
// };

// ===========================
