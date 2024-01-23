console.log("Javascript algorithm");

//Q.1 - Calculate the sum of natural numbers
function sumOfNaturalNum(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i; //time and space complexity is o(n) - linear
  }
  return sum;
}

console.log(sumOfNaturalNum(4));

// different way to calculate the natual num sum
function optimizedSumOfNaturalNum(num) {
  return num + (num + num / 2); // time and space compexity is o(1) - constant
}
console.log(optimizedSumOfNaturalNum(4));

// Q -3 - fibonnaci series -
function fibonnaci(num) {
  let fib = [0, 1]; //n=1
  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]; //n = num
  }
  return fib; //n=1
}
//time complexity = o(n)
//space complexity = o(1)
console.log(fibonnaci(5));

//Q.4- Find the factorial of a number
function factorial(num) {
  if (num === 0) return 1;
  return num * factorial(num - 1); //use of recursion
}

console.log(factorial(5));

//different approach
function fact(num) {
  // factorial of 0 or 1 is 1
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result = result * i;
  }
  return result;
}
console.log(fact(4));
