const sumAll = function(number1, number2) {
    //validate numbers, return ERROR if not numbers
    if (!Number.isInteger(number1) || !Number.isInteger(number2) || number1 >= 0 || number2 >= 0){
        return 'ERROR'
    }
    //declare solution
    let solution = 0;
        
    //Declare variable for lower bound and higher bound. Assign lower number to low bound.
    if (number1<number2){
        let lowerBound = number1;
        let higherBound = number2;
    }else{
        let lowerBound = number2;
        let higherBound = number1;   
    }

    //iterate from lower bound to higher bound
    for (let i = lowerBound; i <= higherBound; ++i){
        //add every item to solution
        solution += i;
    }
    //return solution
    return solution
};

// Do not edit below this line
module.exports = sumAll;
