function countLetter(str) {
  let result = {};

  let newString = str.split(' ').join('');

  for (let i = 0 ; i < newString.length ; i++){
    let letter = newString[i];
    if(result[letter]){
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

return result;
}


console.log(countLetter("lighthouse in the house"));