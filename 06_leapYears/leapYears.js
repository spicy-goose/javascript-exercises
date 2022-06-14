const leapYears = function(yearToCheck) {
    //validate yearToCheck is a positive integer
    if (!Number.isInteger(yearToCheck) || yearToCheck < 0){
        //if not, return not a year
        return 'ERROR'
    }
    //check if year is divisible by 4
    if (yearToCheck%4 == 0){
        //check if year is divisible by 100
        if (yearToCheck%100 == 0){
            //check if year is divisible by 400
            if (yearToCheck%400 == 0){
                //return true
                return true
            }else{
            //return false
            return false
            }
        }else{
        //return true
        return true
        }
    }else{
        //return false
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
