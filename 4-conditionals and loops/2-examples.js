(function () {
    'use strict';

    // if else
    var temp = 29;
    var temp2 = '233';
    if (temp === temp2) {
        console.log('its true by ===');
    } else if (temp == temp2) {
        console.log('its true by ==');
    } else {
        console.log('its false');
    }

    // switch case
    // comparison is loose comparison here
    console.log('-------switch case - 1---------');
    var temp2 = 23;
    switch (temp2) {
        case 23:
            console.log('value is 23');
            break;
        case 20:
            console.log('value is 20');
            break;
        case 25:
            console.log('value is 25');
            break;
        case 25:
            console.log('value is 25');
            break;
        default:
            console.log('control is in default');
    }

    console.log('-------switch case - 2 with strings---------');
    // switch also works with strings
    var temStr = '123';
    switch (temStr) {
        case '123':
            console.log('value is "123"');
            break;
        case 123:
            console.log('value is 123');
            break;
        case 'hello':
            console.log('value is hello');
            break;
        default:
            console.log('control is in default');
    }
    console.log('swith case end ----------');
    // suppose i run the above switch case with a number 123
    var tempStr = '123';
    switch (tempStr) {
        case '123':
            console.log('value is "123"', tempStr);
            break;
        case 'hello':
            console.log('value is hello');
            break;
        default:
            console.log('control is in default');
    }
})();

// for loop
function print() {
    for (var i = 0; i < 10; i = i + 2) {
        console.log(i);
    }
    console.log('i -', i);
}

function print2() {
    var i = 0;
    for (; i < 10;) {
        console.log(i);
        i = i + 2;
    }
    console.log('i -', i);
}
print();
console.log('value of i = ', i); // i is not defined

// while
var i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

// do while
var i = 0;
do {
    console.log(i);
    i++;
} while (i < 10)