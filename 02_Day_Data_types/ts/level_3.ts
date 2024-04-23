// 1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
console.log(`1. The number of times 'love' appeared in 'Love is the best thing in this world. Some found their love and some are still looking for their love.' is 3`) 

// 2. Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let phrase: string = 'You cannot end a sentence with because because because is a conjunction';
let pattern: RegExp = /because/gi
console.log(`\n2. The number of times 'because' appeared in 'You cannot end a sentence with because because because is a conjunction' is ${phrase.match(pattern)?.length}`);

// 3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
// Create an interface for wordCount to remove some typescript error
interface WordCount {
  [word: string]: number;
}
// Clean the sentence
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentence: string = sentence.replace(/%|\$|@|&|#|;/g, '');

// Split the sentence into words and remove punctuations so `teaching.` -> `teaching`
let words: string[] = cleanSentence.split(/\W+/);

// Algorithm to find the most frequent word
let wordCount: WordCount = {};
words.forEach(word => {
  wordCount[word] = (wordCount[word] || 0) + 1;
});
let maxFrequency: number = 0;
let maxFreqWords: Array<String> = [];
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

console.log(`\n3. ${cleanSentence}`)
console.log(`Most frequent words: ${maxFreqWords}`)
console.log(`Number of times it appeared: ${maxFrequency}`)

// 4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let text: string = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let digits = text.match(/\d+/g);
let annualIncome: number = parseInt(digits?.[0] ?? '0') * 12 + parseInt(digits?.[1] ?? '0') + parseInt(digits?.[2] ?? '0') * 12;
console.log(`\n4. Annual Income: ${annualIncome}`)
