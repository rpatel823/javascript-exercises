const sumAll = function(num1, num2) {

    let total = 0, upper = 0, lower = 0;

    //check parameters
    if (Number.isFinite(num1) == false || Number.isFinite(num2) == false)
    {
        return "ERROR";
    }

    if (num1 < 0 || num2 < 0 || num1 % 1 != 0 || num2 % 1 != 0)
    {
        return "ERROR";
    }


    //assign larger number to upper range
    if (num1 <= num2)
    {
        upper = num2;
        lower = num1;
    }

    else
    {
        upper = num1;
        lower = num2;
    }
    

    //iterate with for loop
    for (; lower <= upper;)
    {
        total += lower;
        lower++;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
