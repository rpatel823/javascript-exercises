const repeatString = function(inputString, repeatNum) {

    if (repeatNum < 0)
    {
        return "ERROR";
    }

    outputString = "";

    for (let i = 0; i < repeatNum; i++)
    {
        outputString += inputString;
    }

    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
