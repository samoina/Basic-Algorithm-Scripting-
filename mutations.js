function mutation(arr) {
  arr = arr.map(word => word.toLowerCase());

  for (let i = 0; i < arr[1].length; i++) {
    if (arr[0].indexOf(arr[1][i]) === -1) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["Noel", "Ole"]))

/*This challenge took me a little more time than I thought it would. My pseudocode looked as follows:
1. First convert both elements in the array to lowercase since some test cases matched but one word had an uppercase letter and I would be using the strict equality sign.
2. My first take was to loop through the second word - the one that we are checking if all the letters are present in the first word. The third test' case that starts with zy... is what made me know my logic was flawed, because that test case returns true, yet with my logic, it would fail since z is not present in 'qrstu'
3. I then figured i would need to loop through the second array and use indexOf to check if the letters were present in the first array, and if at any point indexOf() returns -1, to return false since they do not match. if they all match return true.

*/
