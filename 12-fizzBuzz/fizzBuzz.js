function fizzBuzz(start, end) {
  let arr = new Array((end-start)+1)
  arr[0]=start;
  arr[arr.length-1] = end;
  for(let i =0;i<arr.length;i++)  {
    arr[i] = start+i;
    if(arr[i] %15 == 0){
      arr[i] = "FizzBuzz"
    }
    else if(arr[i]%3 == 0){
      arr[i] = "Fizz"
    }
    else if(arr[i]%5 == 0){
      arr[i] = "Buzz"
    }
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;