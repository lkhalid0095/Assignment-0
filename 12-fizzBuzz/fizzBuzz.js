function fizzBuzz(start, end) {
  let arr = new Array((end - start)+1);
  for(let i=1;i < arr.length;i++){
    if(i%3 ==0){
      arr[i] = "Fizz";
    }
    else if(i%5 ==0){
      arr[i] = "Buzz";
    }
    else if(i%3 ==0 && i%5 == 0){
      arr[i] = "FizzBuzz";
    }
    else{
    arr[i] = i;
    }
  }
  return arr;
}

// Do not edit this line;
module.exports = fizzBuzz;