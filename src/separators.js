'use strict';

function thousands_separators(num) {
    var num1 = parseInt(num).toString();
    var num2 = num.toString().split(".")[1];
    var arr = [];
    var Arr;

    var j = num1.length % 3;
    if (j != 0) {
        arr.push(num1.substr(0, j));
    }
    for (var i = j; i < num1.length; i += 3) {
        arr.push(num1.substr(i, 3));

    }
    var arr = arr.join(",");
    if (num2) {
        Arr = arr + "." + num2;
    }
    else {
        Arr = arr
    };

    return Arr;
}

module.exports = thousands_separators;
