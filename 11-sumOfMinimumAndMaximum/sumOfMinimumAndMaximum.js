function sumOfMinimumAndMaximum(nums) {
  let result = 0;
  let min = nums[0];
  let max = nums[0];
  for(let i=0;i<nums.length-1;i++){
     
    if(min > nums[i+1]){
        min = nums[i+1];
    }
    if(max<nums[i+1]){
      max = nums[i+1];
    }
  }
  result = min+max;
  return result;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;