
// function titleCase(str) {
//   let wordArr=[],
//       newWordArr=[],
//       firstLetter,
//       newStr='';

//   let strArr = str.toLowerCase().split(' ').map(function(word){
//     for(let i=0; i<word.length; i++){
//       wordArr = word.split('');
//       firstLetter = wordArr[0].toUpperCase();
//       wordArr.splice(0, 1, firstLetter);
//       newWordArr = wordArr.join('');
//     }
//     newStr = newStr + ' ' + newWordArr;
   
//   });
//   return newStr.slice(1);
// };

// console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

/*This task gave me some bit of a challenge. here's how I had approached it. The first thing would be to :
1. convert the entire string to lowercase
2. split to create an array that I can loop over and use the map method.
3. Loop over the array and split (AGAIN) the individual words to create character array so that I can get the first letter using index[0] and the for-loop
4. Convert that first letter to uppercase then use splice to remove the first element and replace it with the capital letter.
5. Join the character array to form words in string.
6. Use the variable defined for an empty string to build on using the words and return it
NB: Because I wasnt sure how to get rid of the space, I sliced the first character.

*/


//I worked through this solution with a friend and it is indeed DRY code. it takes the same approach as I had: convert the string to lowercase, split to an array, then loop over using the map method. Inside the map function, i take each word, and replace the first letter with its uppercase, then join the array. Far fewer variables.
function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word){
    return word.replace(word[0], word[0].toUpperCase());
  }).join(' ');
}

console.log(titleCase("I'm a little tea pot"));
