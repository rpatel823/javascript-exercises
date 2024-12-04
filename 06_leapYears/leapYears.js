const leapYears = function(year) {

    //if year is divisible by 4 and not 100
    if (year % 4 == 0 && year % 100 != 0)
        return true;

    //if divisible by 4 and 100, then it has to be divisible by 400 too
    else if (year % 4 == 0 && year % 100 == 0 && year % 400 == 0)
        return true;

    else 
        return false;
};

// Do not edit below this line
module.exports = leapYears;
