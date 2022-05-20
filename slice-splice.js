function frankenSplice(arr1, arr2, n) {
  let nuArr = arr2.slice();
  nuArr.splice(n, 0, ...arr1);
  return nuArr;
}

console.log(frankenSplice([1, 2, 3, 4], [], 0));

//I first created a new copy of arr2 which is where we are meant to change the elements. Slice returns a shallow copy. ONce this was done, I used the splice() method to add the second array, beginning at index n (number passed in the parameter, deleted 0 elements and then used the spread syntax to add the contents of the first array. One mistake i was making was adding the array as is, but they have to be elements)