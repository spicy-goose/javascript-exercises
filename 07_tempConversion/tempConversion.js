const ftoc = function(numberToConvert) {
  //validate tempToConvert is a number
  if (typeof(numberToConvert) !== 'number'){
      return 'Not a Number!'
  }

  //declare solution variable assign value of calculation
  let solution = (numberToConvert - 32)*(5/9);
  //round variable to one decimal place
  solution = Number(solution.toFixed(1));
  //return value of conversion
  return solution
};

const ctof = function(numberToConvert) {
  //validate tempToConvert is a number
  if (typeof(numberToConvert) !== 'number'){
    return 'Not a Number!'
}

//declare solution variable assign value of calculation
let solution = (numberToConvert *(9/5)) + 32;
//round variable to one decimal place
solution = Number(solution.toFixed(1));
//return value of conversion
return solution
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
