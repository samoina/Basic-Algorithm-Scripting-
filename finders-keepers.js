function findElement(arr, func) {
  let num;
  for(let i=0; i<arr.length; i++){
    num=arr[i];
    if(func(num)){
      return num;
    } 
  }
}

console.log(findElement([1, 3, 5, 8, 12, 90], num => num % 2 === 0));

//I initialized a variable num, then used a for-loop to go over the array, and assigned the value at each iteration to the num variable i created. I used an if-statement and passed in the callback function alongside num (which at this point, is obtained from the array. If it passes, return that particular value) else it will return undefined. 