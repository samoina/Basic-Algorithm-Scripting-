function largestOfFour(arr) {
  let largeArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i].sort(function (a, b) {
      return b - a;
    })
    largeArr.push(arr[i][0]);
  }
  return largeArr;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));

/* I first created an empty array that would hold the largest numbers from the subarrays. I then looped through the parent array, so that at each iteration, the subarray would be represented by arr[i]. Using the sort() method & compare function to arrange the arrays in descending order, I then took the first element of each subarray and pushed it into the empty array I created. the result is an arrayt containing the biggest numbers from each subarray */

