const convertToCelsius = function(fVal) {

  //formula for conversion
  let cVal = (fVal - 32) * 5 / 9;
  let roundedCVal = Math.round(cVal * 10) / 10;

  return roundedCVal;
};

const convertToFahrenheit = function(cVal) {

  let fVal = cVal * (9/5) + 32;
  let roundedFVal = Math.round(fVal * 10) / 10;

  return roundedFVal;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
