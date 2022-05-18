//Take 1
// function findLongestWordLength(str) {
//  let strArr = str.split(' ');
//  let wordsArr=[];

//   for(let i=0; i<strArr.length; i++){
//     wordsArr.push(strArr[i].length);
   
//   }
//   console.log(Math.max(...wordsArr));
// }

// findLongestWordLength("The quick brown fox jumped over the lazy dog");

//Explanation
/* I first split the sentence, then created an empty array. I looped over the split sentence words abd got the length of each word, which I pushed into the empty array. Outside the for-loop, I used the Math.max function to return the largest of the lengths. the (...) is the spread syntax for the array since Math.max uses numbers as input parameters.*/


//Take 2
function findLongestWordLength(str) {
  return Math.max(...str.split(' ').map(word=> word.length));
}

console.log(findLongestWordLength("Google do a barrel roll"));

/* In the second take above, I first started by splitting the string, then chained the ,map method which creates a new array (of the length of words) from every word in the array of words. I then preceded the code with the spread syntax and Math.max*/