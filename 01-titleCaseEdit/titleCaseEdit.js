function titleCaseEdit(title) {
  let count = 0;
  let str = title.split(" ");
  let length = str.length;
  let temp = "";
  let final = new Array();
  //change the first letter to capital
  for(let i=0;i<length; i++){
    temp = str[i].charAt(0).toUpperCase();
    temp += str[i].substr(1);
    final[i]= temp;
  }
  title = final.join(" ");
  return title;
}

// Do not edit this line;
module.exports = titleCaseEdit;