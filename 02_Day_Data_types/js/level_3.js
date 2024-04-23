var _a, _b, _c, _d;
// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
console.log(`1. The number of times 'love' appeared in 'Love is the best thing in this world. Some found their love and some are still looking for their love.' is 3`);
// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase = 'You cannot end a sentence with because because because is a conjunction';
let pattern = /because/gi;
console.log(`\n2. The number of times 'because' appeared in 'You cannot end a sentence with because because because is a conjunction' is ${(_a = phrase.match(pattern)) === null || _a === void 0 ? void 0 : _a.length}`);
// Clean the sentence
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let cleanSentence = sentence.replace(/%|\$|@|&|#|;/g, '');
// Split the sentence into words and remove punctuations so `teaching.` -> `teaching`
let words = cleanSentence.split(/\W+/);
// Algorithm to find the most frequent word
let wordCount = {};
words.forEach(word => {
    wordCount[word] = (wordCount[word] || 0) + 1;
});
let maxFrequency = 0;
let maxFreqWords = [];
for (let word in wordCount) {
    // console.log(`${word}\t${wordCount[word]}`)
    if (wordCount[word] == maxFrequency) {
        maxFreqWords.push(word);
    }
    else if (wordCount[word] > maxFrequency) {
        maxFrequency = wordCount[word];
        maxFreqWords = [];
        maxFreqWords.push(word);
    }
}
console.log(`\n3. ${cleanSentence}`);
console.log(`Most frequent words: ${maxFreqWords}`);
console.log(`Number of times it appeared: ${maxFrequency}`);
// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let digits = text.match(/\d+/g);
let annualIncome = parseInt((_b = digits === null || digits === void 0 ? void 0 : digits[0]) !== null && _b !== void 0 ? _b : '0') * 12 + parseInt((_c = digits === null || digits === void 0 ? void 0 : digits[1]) !== null && _c !== void 0 ? _c : '0') + parseInt((_d = digits === null || digits === void 0 ? void 0 : digits[2]) !== null && _d !== void 0 ? _d : '0') * 12;
console.log(`\n4. Annual Income: ${annualIncome}`);
