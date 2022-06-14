const reverseString = function(stringToReverse) {

    //validate input
    if (typeof(stringToReverse) !== 'string'){
        // if stringToReverse is not of type string, return not a string
        return 'Not a String'
    }
    //declare solution empty string
    let solutionString = '';

    //iterate over the length of the string from length of string to 0
    for (let i = stringToReverse.length-1; i > 0; --i){
        //concatenate the current character to the solution string
        solutionString += stringToReverse[i];
    }
    //return solution string
    return solutionString
};

// Do not edit below this line
module.exports = reverseString;
