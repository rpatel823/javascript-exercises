const removeFromArray = function(inputArray, ...removeValue)

 {
    //iterate through inputArray and see if any of its value are in 
    //removeValue. if they are, takem them out the array.
     for (let i = 0; i <= inputArray.length; i++)
    {
        if (removeValue.includes(inputArray[i]))
        {
            inputArray.splice(i, 1);
            i = 0;
        }
    }

    //special case for last element left in array
    if (removeValue.includes(inputArray[0]))
    {
        inputArray.splice(0, 1);
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
