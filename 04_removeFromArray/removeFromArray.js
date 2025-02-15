const removeFromArray = function(list) {
    let deletions = Array.from(arguments).slice(1);
    for (i of deletions){
        for (let j = 0; j < list.length ; j++){
            if( list[j] === i){
                list.splice(j,1)
                j -=1 ;
            }
        }
    }
    return list
};

// Do not edit below this line
module.exports = removeFromArray;
