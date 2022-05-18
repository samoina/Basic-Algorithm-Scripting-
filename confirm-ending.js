function confirmEnding(str, target) {
  let strArr=str.split('');
  let targetChecker = strArr.splice(-target.length).join('');

  if (target===targetChecker){
    return true;
  } else {
    return false;
 } 
}

console.log(confirmEnding("Abstraction", "action"));

/*I first split the string to create an array, which I used the .splice() method to get a number of characters equivalent to the length of the target. I then joined these characters to be abkle to make a comparison to the target using the strict equality sign, and if they match, return true, else return false
*/
