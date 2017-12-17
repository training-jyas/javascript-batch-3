console.log('---------\naddition with string\n----------');
console.log(5 + 5);//10
console.log('5' + 5);//55, 10, 55
console.log(5 + '5');// 55, 10, 55
console.log(5 + 'a' + 5);// 10a, 10a/a10, 10a/5a5
console.log('a' + 5 + 5);// 10a, a55, a10
console.log(5 + 5 + 'a');//55a, 10a, 10a
console.log(NaN + 5);//NaN
console.log(NaN + '5');//NaN

console.log('---------\nsubtraction with string\n----------');
console.log('5' - 5);
console.log(5 - '5');
console.log(5 - '5a');
console.log('5a' - 5);

console.log('---------\nmultiplication with string\n----------');
console.log('5' * 5);
console.log(5 * '5');
console.log(5 * '5a');
console.log('5a' * 5);

console.log('---------\ndivision with string\n----------');
console.log('5' / 5);
console.log(5 / '5');
console.log(123/'5');
console.log('123'/5);
console.log('123a'/5);