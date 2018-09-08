const returnFirstTwoDrivers = (function(a) {
   return a.slice(0,2);
 })

 const returnLastTwoDrivers = (function(a) {
   return a.slice(-2);
 })

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (function(fare) {
  return function(multiplier) {
    return fare * multiplier
  }
})