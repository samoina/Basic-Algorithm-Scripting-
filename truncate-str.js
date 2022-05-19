function truncateString(str, num) {
  if (str.length>num){
    return str.slice(0, num)+ '...';
  }
  return str;
}

console.log(truncateString("Absolutely Longer", 2));

//If the length of string is greater than the number provided, extract the part bewteen 0 and num using slice(), then join that with ... as expected in the challenge.