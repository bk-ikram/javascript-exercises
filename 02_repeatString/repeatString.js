const repeatString = function(string,multiple) {
    let fullString = "";
    for(let i = 0; i < multiple; i++){
        fullString += string;
    }
    return multiple >= 0 ? fullString : 'ERROR'
};

// Do not edit below this line
module.exports = repeatString;
