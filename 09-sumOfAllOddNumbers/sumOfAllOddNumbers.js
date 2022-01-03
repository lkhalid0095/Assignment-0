function sumOfAllOddNumbers(nums) {
  let result = 0;
  for(let i=0;i<nums.length;i++){
    if(nums[i]%2 !=0){
      result++;
    }
  }
  return result;

}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;