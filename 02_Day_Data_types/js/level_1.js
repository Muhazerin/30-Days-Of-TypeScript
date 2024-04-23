"use strict";
// 1
let challenge = "30 Days Of TypeScript";
// 2
console.log(`2. Challenge: ${challenge}`);
// 3
console.log(`3. Length of challenge: ${challenge.length}`);
// 4
console.log(`4. CHALLENGE: ${challenge.toUpperCase()}`);
// 5
console.log(`5. challenge: ${challenge.toLowerCase()}`);
// 6
let firstWord = challenge.substring(3, 7);
console.log(`6. Challenge first word: ${firstWord}`);
// 7
let challengeNoNum = challenge.slice(3);
console.log(`7. Challenge only words: ${challengeNoNum}`);
// 8
let containsScript = challenge.includes('Script');
console.log(`8. Challenge contains Script: ${containsScript}`);
// 9
// let challengeArray: Array<string> = challenge.split();
let challengeArray = [challenge];
console.log(`9. Challenge Array: ${challengeArray}`);
// 10
let challengeArray2 = challenge.split(" ");
console.log(`10. Challenge Array 2: ${challengeArray2}`);
// 11
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let companiesArrays = companies.split(",");
console.log(`11. Companies Array: ${companiesArrays}`);
// 12
let newChallenge = challenge.replace("TypeScript", "Python");
console.log(`12. New Challenge: ${newChallenge}`);
// 13
console.log(`13. Challenge char at index 15: ${challenge.charAt(15)}`);
// 14
let challengeIndex = challenge.indexOf("T");
console.log(`14. Char code of T in Challenge: ${challenge.charCodeAt(challengeIndex)}`);
// 15
console.log(`15. First occurence of 'p' in Challenge: ${challenge.indexOf('p')}`);
// 16
console.log(`16. Last occurence of 'p' in Challenge: ${challenge.lastIndexOf('p')}`);
// 17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(`Sentence: ${sentence}`);
console.log(`17. First occurence of 'because' in Sentence: ${sentence.indexOf('because')}`);
// 18
console.log(`18. Last occurence of 'because' in Sentence: ${sentence.lastIndexOf('because')}`);
// 19
console.log(`19. First occurence of 'because' in Sentence using 'search': ${sentence.search('because')}`);
// 20
let trailingSentence = ' 30 Days Of JavaScript ';
console.log(`20. New sentence without trailing whitespace: ${trailingSentence.trim()}`);
// 21
console.log(`21. startsWith() returns true: ${challenge.startsWith('30')}`);
// 22
console.log(`22. endsWith() returns true: ${challenge.endsWith('TypeScript')}`);
// 23
console.log(`23. match() to find all 'p' in Challenge: ${challenge.match(/p/g)}`);
// 24
let sentence1 = "30 Days of";
let sentence2 = "TypeScript";
console.log(`24. concat(): ${sentence1.concat(" ", sentence2)}`);
// 25
console.log(`25. repeat() challenge twice: ${challenge.repeat(2)}`);
