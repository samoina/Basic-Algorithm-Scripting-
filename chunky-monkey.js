function chunkArrayInGroups(arr, size) {
  const chunkyArr = [];
  for (let i = 0; i < arr.length; i += size) {
    let chunk=arr.slice(i, i + size);
    chunkyArr.push(chunk);
  }
  return chunkyArr;
}

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));



/* My first approach was to loop through the array and then splice it as follows:
for(let i=0; i<arr.length; i++){
  console.log(arr.splice(0, size));
}

This would result in [ 0, 1 ],[ 2, 3 ],[ 4, 5 ] here's why:
In the 1st iteration: i=0. is 0<arr.length(9)? Yes, so splice(0,2) to give [0,1] then i++ so i is now 1.
In the 2nd iteration: i=1. is 1<arr.length(7)? Yes, so splice(0,2) to give [2,3] then i++ so i is now 2.
in the 3rd iteration: i=2. is 2<arr.length(5)? Yes, so splice(0,2) to give [4,5] then i++ so i is now 3.
in the 4th iteration: i=3. is 3<arr.length(3)? Not true. the Loop breaks as at this point, inconclusively so, and moves to the next line of code.. so this wouldn't work. splice() would not work with a reducing arr length. 

I then figured, with some help from stackoverflow, to use slice() instead so that the arr length remains constant all through, but break the array by changing the parameters in the slice() method. So here's how that works:
1. create an empty array that will hold the result from slicing the parent array
2. Use a for loop, create a variable i and set it to 0. the loop will run as long as i is less than the length of the array, and after the loop runs, add the size of the chunk to i (i+=size.). Here's what is happening in the loop:
slice the array between (i and i+size), and put that inside a variable called chunk. With every loop, push the chunk into the array. In the end, return the array. To use the pseudocode above:



 */