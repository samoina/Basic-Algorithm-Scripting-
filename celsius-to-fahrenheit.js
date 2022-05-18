//use provided formula to convert celsius to fahrenheit

function convertToF(celsius) {
  //I had initially done it as celsius * (9/5 + 32) and brackets placement makes it wrong
  let fahrenheit = (celsius * 9/5)+ 32;
  return fahrenheit;
}

console.log(convertToF(20));