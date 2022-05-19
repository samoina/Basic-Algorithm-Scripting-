function repeatStringNumTimes(str, num) {
  var repeatedStr ='';
   for (let index = 0; index < num; index++) {
    repeatedStr +=str;    
  }
   // while (num>0){
  //   repeatedStr += str;
  //   num--;
  // }
  return repeatedStr;
}

console.log(repeatStringNumTimes("*", -2));

//My approach was to create an empty string that will hold he repeated string. I then looped (using a for-loop) through 'num' times, with each iteration adding the string at the end. If a number is less than 0, it returns an empty string. 
//I also used the while loop which I am becoming acquinted with. while(condition) followed by statement.

