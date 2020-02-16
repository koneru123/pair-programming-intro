/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab' bcdea, cdeab, deabc

bcdea, cdeab
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
Note:

A and B will have length at most 100.
*/


// Navigator: Priyanka Koneru
// Driver: Matthew Guidone
// code here

/*
Steps
1. Function expects a string1, string2
2. Create a boolean variable
3. return the boolean variable
4. create a variable newArr and split the string based on ''
5. take the first value of array into the variable
6. pop that first value of an array and push it to the newArr
7. compare it with the second array
8. repeat it till the length of the array
*/

const shiftStrings = function(str1, str2) {
  let stringsCanBeShifted = false;

  for(let i = 0; i < str1.length; i++) {
    let newArr = str1.split('');
    let newArrFirstElement = newArr[0];
    newArr.splice(0, 1);
    newArr.push(newArrFirstElement);
    let newString = newArr.join('');
    if(newString === string2) {
      stringsCanBeShifted = true;
      return stringsCanBeShifted;
    } else {
      str1 = newString;
    }
  }
  return stringsCanBeShifted;
}

const string1 = 'abcde';
const string2 = 'cdeab';
console.log(shiftStrings(string1, string2));
