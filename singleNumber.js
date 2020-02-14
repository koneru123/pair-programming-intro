/*
Single Number

Given a non-empty array of integers, every element appears twice except for one. Find that single one.

i.e. singleNumber([1,2,2,4,4])
Desired output:
1
*/

//Navigator: Priyanka Koneru
//Driver: Matthew Guidone
//code here

// var arrayOfIntegers = [1, 1, 2, 2, 3, 4, 4];

/*

Steps
- Create value variable for output
- Iterate through array, ignore duplicates
- Return output

*/

var arrayOfIntegers = [1,2,2,4,4];
//{'1' : 2, '2':2, '3' : 1, '4': 2}

let test = function(arr) {
  let obj = {};
  let output = 0;
  for(let i = 0; i < arrayOfIntegers.length; i++) {
    if(!obj[arrayOfIntegers[i]]) {
      obj[arrayOfIntegers[i]] = 1;
    } else {
      obj[arrayOfIntegers[i]]++;
    }
  }

  for(let j in obj) {
    if(obj[j] < 2) {
      output = j;
    }
  }
  return output;
}

console.log(test(arrayOfIntegers));



