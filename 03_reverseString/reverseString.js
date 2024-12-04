const reverseString = function(word) {

    let reversedWord = word.split('');
    reversedWord.reverse();
    return reversedWord.join('');

};

// Do not edit below this line
module.exports = reverseString;
