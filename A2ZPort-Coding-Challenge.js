// input output require fun

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// count the word which have maximum english letter
function logestWord(sentence) {
  const words = sentence.split(' ');

  let longestWord = '';
  let maxVowelCount = 0;

  for (const word of words) {
    
    const newWord = word.replace(/[^a-zA-Z]/gi, '');
    const vowelCount = countVowelEachWord(newWord);

    if (newWord.length > longestWord.length) {
      longestWord = newWord;
      maxVowelCount = vowelCount;
    } else if (newWord.length === longestWord.length && vowelCount > maxVowelCount) {
      longestWord = newWord;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

// compare maximum Vowel if two or more than words have same length of letters
function countVowelEachWord(word) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (const char of word) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}
// input and output funtion 
rl.question('Enter a sentence =====> ', (input) => {
  const result = logestWord(input);
  console.log('Ans is ======>', result);
  rl.close();
});

                                                    ////////// SAMPLE test Cases //////////
 // (1)  “Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)
//  experience


////////////////////English-Alpha/////////////////////12/////////////////////////26////////////////////////26/////////////////////////////////48///////////////////////////////////43////////////////////////////////////////39////////////                                       
// (2) hello Usman Ali Ansari are you ready for aaaaaaaaaa10    A7z-portcodingchallenge21,   A6z-portcodingchallengh21, A2------------------------portcodingchallenge20, ####a###$%#%#$%@#$@$#%@#$@#$@#$#@$#@$#@@#$1   125456456487845454dfdfds54654654654sds9

////////Azportcodingchallenge                           reason :- (i.e. A2z-portcodingchallenge) as given scenario//////////
