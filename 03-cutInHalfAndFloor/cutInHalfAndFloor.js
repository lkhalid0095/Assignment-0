function cutInHalfAndFloor(num) {
  let result = 0;
  let mod = num%2;
  //if it has a remainder we decreae by one, since we're rounding down
   if(mod > 0 ){
     num--;
   }
   result =  num/2;
  return result;
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;