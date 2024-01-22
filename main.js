//Q1 Palindrome number
//An integer is a palindrome number when it reads the same forward and backward.

const isPalindrom = function (x) {
  // adding less than zero condition as below minus value will not be palindrome number
  return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const result1 = isPalindrom(10);
console.log(result1);

//Q2 Fibonacci number
//Fibonacci series - 0,1,1,2,3,5,8,13,21,34,55,89,144,233

const isPalindrom1 = function (x) {
  const normalized = x.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < normalized.length; i++) {
    if (normalized[i] !== normalized[normalized.length - i - 1]) {
      return false;
    }
  }

  return true;
  // adding less than zero condition as below minus value will not be palindrome number
};

const result2 = isPalindrom1("A man, a plan, a canal: Panama");
console.log(result2);

//Q.3 - Vaid anagram
//An anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

//Input (anagram) = output(nagram) == true
//Input (rat) = output(car) == false

//first approach
const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  return s.split("").sort().join() === t.split("").sort().join();
};

console.log(isAnagram("anagram", "nagaram"));

//second approach with better time complexity
const isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram1("anagram", "nagaram"));
