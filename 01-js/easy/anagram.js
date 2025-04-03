/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  /* String are immutable in java script */
  str1.toUpperCase(); /* this returns a new string , it does not change the original string */
  str2.toUpperCase();
  console.log(str1);
  console.log(str2);
  return (
    str1.toUpperCase().split("").sort().join("") ===
    str2.toUpperCase().split("").sort().join("")
  );
}

let str1 = "Debit Card";
let str2 = "Bad Credit";

isAnagram(str1, str2);

module.exports = isAnagram;
