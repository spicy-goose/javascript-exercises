const repeatString = function(stringToRepeat, numberOfRepeats) {

    //validate string is of string type
    if (typeOf(stringToRepeat) !== 'string'){

        //if not, return error string
        return 'ERROR'
    }
    //validate numOfRepeats is of type integer
    if (!numberOfRepeats.isInteger()){
        //if not, return error string
        return 'Error'
    }
    //declare result string as empty string
    let resultString = '';

    //iterate from 0 to numberOfRepeats
    for (let i = 0; i < stringToRepeat; ++i){

        //concatenate new iteration of stringToRepeat to result string variable
        resultString += stringToRepeat;
    }
    //return result string
    return resultString;

};

// Do not edit below this line
module.exports = repeatString;
