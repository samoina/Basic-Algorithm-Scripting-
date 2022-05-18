function factorialize(num) {
  //create a variable to initialize the numbers and keep track in the for-loop
  let digit = 1;
  for(let i=num; i>0; i--){
    //in the first iteration, digit = digit * i (where i is the number passed into the function, and that decrements with each iteration)
    digit *=i;
  }
  return digit;
}

console.log(factorialize(0));
