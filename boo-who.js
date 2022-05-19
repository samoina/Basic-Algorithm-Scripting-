function booWho(bool) {
 if(typeof bool === 'boolean'){
   return true
 } else {
   return false
 }
}

console.log(booWho(null));

//My approach was to use the typeof operator that gets the data type of the parameter, but I was making a mistake initially because my code read as: typeof bool === Boolean. and the results would be undefined for all since Boolean references an object that is an object wrapper for a boolean value.the former are primitive values