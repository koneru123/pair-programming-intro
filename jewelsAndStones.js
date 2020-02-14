/*
You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:

Input: J = "aA", S = "AaAbbbb" // a , A, A
Output: 3
Example 2:

Input: J = "z", S = "ZZ" // 0
Output: 0
Note:

Input: J = "abC", S = "aAbBC" // a b  - 3

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
*/
// Navigator: Matthew
// Driver: Priyanka
// your code here
/*

J = Jewels (guaranteed distinct)
S = Stones

a = 'different type of stone from A'
A = 'stone'

Steps:-
- Given two strings(str1, str2)
- str1 is distinct, str2 can have repetitive letters
- Calculate the length of str1
- Create a sum variable, and initialize to 0
- iterate through the str1 (i)
    - iterate through the str2 (j)

Length of J - 2
var J = "aA";
S = "AaAbbbb";
var sum = 0;

ite            currentValue  | Iter2     |Output
0               a              str2[0]   | sum + 1 = 1
1               A              str2[1]   | sum + 1 + 1 = 3
return sum;
*/

var J = "abC";
var S = "aAbBcC";

var sorted = function(str1, str2){
    var sum = 0;
    // First iteration
    for(i = 0; i < str1.length; i++){
        // Second iteration
        for(j = 0; j < str2.length; j++){
            if(str1[i] === str2[j]){
                sum++;
            }
        }
    }
    return sum;
}
console.log(sorted(J, S));



