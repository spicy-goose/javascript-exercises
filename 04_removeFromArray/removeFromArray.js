const removeFromArray = function(arrayToModify, ...itemsToDelete){ 

    //declare solution array
    let solutionArray = [];

    //iterate over arrayToModify
    for (item of arrayToModify){
        //verify item is not in itemsToDelete
        if (!itemsToDelete.includes(item)){
            //push item to solution array
            solutionArray.push(item);
        }
    }
    //return solution array
    return solutionArray
};

// Do not edit below this line
module.exports = removeFromArray;
