function whereDoIBelong(arr, num) {
  arr.push(num);
  let newArr=arr.sort(function (a, b) {
    return a - b;
  });

  console.log(newArr.indexOf(num));
}

whereDoIBelong([40, 30, 66], 35);

/* I added the number provided to the array using .push() method, then sorted the array in ascending order. After that, I used the indexOf array method to find the location of the inserted number in the new array*/
