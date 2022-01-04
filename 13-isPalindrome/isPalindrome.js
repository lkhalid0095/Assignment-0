function isPalindrome(word) {
  let isPal = true;
  let len = word.length-1;
  console.log(word + "length: "+len);
  if(word.length == 1){
    return true;
  }
  for(let i=0;i<word.length;i++){
    if(word.charAt(i) != word.charAt(len-i)){
      isPal = false;
    }
  }
  return isPal;
}

// Do not edit this line;
module.exports = isPalindrome;