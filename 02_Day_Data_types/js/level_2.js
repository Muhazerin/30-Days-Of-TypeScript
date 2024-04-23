// 1: Console.log
console.log(`1. The quote 'There is no better exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
// 2: Console.log
console.log(`\n2. "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
// 3: Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
if (typeof ('10') === typeof (10)) {
    console.log(`\n3. typeof('10') is equal to typeof(10)`);
}
else if (typeof (parseInt('10')) === typeof (10)) {
    console.log(`\n3. typeof(parseInt('10')) is exactly equal to typeof(10)`);
}
// 4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
if (parseFloat('9.8') === 10) {
    console.log(`\n4. parseFloat('9.8') is exactly equal to 10.`);
}
else if ((parseFloat('9.8') + 0.2) === 10) {
    console.log(`\n4. (parseFloat('9.8') + 0.2) is exactly equal to 10.`);
}
// 5. Check if 'on' is found in both python and jargon
if ('python'.includes('on') && 'jargon'.includes('on')) {
    console.log(`\n5. 'on' is found in python and jargon.`);
}
// 6. I hope this course is not full of jargon. Check if jargon is in the sentence.
if ('I hope this course is not full of jargon.'.includes('jargon')) {
    console.log(`\n6. 'jargon' is in the sentence`);
}
// 7. Generate a random number between 0 and 100 inclusively.
let numBtnZeroAndOneHundred = Math.floor(Math.random() * 101);
// while (numBtnZeroAndOneHundred != 0) {
//   numBtnZeroAndOneHundred = Math.floor(Math.random() * 101)
// }
// while (numBtnZeroAndOneHundred != 100) {
//   numBtnZeroAndOneHundred = Math.floor(Math.random() * 101)
// }
console.log(`\n7. Random number between 0 and 100 inclusively: ${numBtnZeroAndOneHundred}`);
// 8. Generate a random number between 50 and 100 inclusively.
let numBtnZeroAndFifty = Math.floor(Math.random() * 51);
let numBtnFiftyAndOneHundred = numBtnZeroAndFifty + 50;
// while (numBtnFiftyAndOneHundred != 50) {
//   numBtnZeroAndFifty = Math.floor(Math.random() * 51);
//   numBtnFiftyAndOneHundred = numBtnZeroAndFifty + 50;
// }
// while (numBtnFiftyAndOneHundred != 100) {
//   numBtnZeroAndFifty = Math.floor(Math.random() * 51);
//   numBtnFiftyAndOneHundred = numBtnZeroAndFifty + 50;
// }
console.log(`\n8. Random number between 50 and 100 inclusively: ${numBtnFiftyAndOneHundred}`);
// 9. Generate a random number between 0 and 255 inclusively.
let numBtnZeroAnd255 = Math.floor(Math.random() * 256);
// while (numBtnZeroAnd255 != 0) {
//   numBtnZeroAnd255 = Math.floor(Math.random() * 256)
// }
// while (numBtnZeroAnd255 != 255) {
//   numBtnZeroAnd255 = Math.floor(Math.random() * 256)
// }
console.log(`\n9. Random number between 0 and 255 inclusively: ${numBtnZeroAnd255}`);
// 10. Access the 'JavaScript' string characters using a random number.
let javascript = 'JavaScript';
let index = Math.floor(Math.random() * javascript.length);
console.log(`\n10. Random character from 'JavaScript': ${javascript[index]}`);
// 11. Use console.log() and escape characters to print the following pattern.
console.log(`\n11.`);
console.log(`1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125`);
// 12. Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
// You can ignore this error if you build this file individually. `npx tsc <file> -t es2016`
let sentence = 'You cannot end a sentence with because because because is a conjunction';
let phrase = sentence.substring(31, 54);
console.log(`\n12. Phrase: ${phrase}`);
