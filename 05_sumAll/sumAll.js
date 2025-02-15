const sumAll = function(a,b) {
    if (typeof a !== 'number' || typeof b !== 'number'|| a !== Math.floor(a) || b !== Math.floor(b) || a < 0 || b < 0){
        return "ERROR";
    }
    let first = a <= b ? a : b ;
    let last = b >= a ? b : a ;
    console.log(a,b);
    let sum = 0;
    for(let i = first ; i <= last ; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
