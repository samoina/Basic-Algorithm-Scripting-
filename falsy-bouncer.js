function bouncer(arr) {
 return arr.filter(val=>(val));
};


console.log(bouncer([7, "ate", "", false, 9]));

//I had not quite understood afalsy and a truthy, and had to go through the MDN documentation severally. I was confusing it with the Boolean (true) or (false). I  then tried solving this challenge with a for-loop and if-statement, to loop thru the array, and if a value is a falsy (!val), get rid of it, but this would be cumbersome because I would need the index from the array. So I finally settled on the higher-order array method, .filter, to filter all truthys and it worked :)


