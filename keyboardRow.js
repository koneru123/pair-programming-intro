const test = function keyboard(arr) {
  var letters = ['a', 'A', 's', 'S', 'd', 'D', 'f', 'F', 'g', 'G', 'h', 'H', 'j', 'J', 'k', 'K', 'l', 'L'];

  let newFilteredArr = [];

  for(let i = 0; i < arr.length; i++) {
    let eachWord = arr[i];
    let wordExists = true;
    for(let j = 0; j < eachWord.length; j++) {
      let eachWordLetter = eachWord[j];
      if(!letters.includes(eachWordLetter)) {
        wordExists = false;
        break;
      }
    }
    if(wordExists) {
      newFilteredArr.push(eachWord);
    }
  }
  return JSON.stringify(newFilteredArr);
}

var input = ["Hello", "Alaska", "Dad", "Peace"];

console.log(test(input));