function findIndices(str){
  let result = {};

  let newString = str.split(' ').join('');

  for (let i = 0 ; i < newString.length ; i++){
    let letter = newString[i];
    if(!result[letter]){
      result[letter] = [i];
    } else {
      result[letter].push(i);
    }

  }
  return result;

}

console.log(findIndices("lighthouse in the house"));