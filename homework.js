// Problem 1
// declare a variable called fruit
// assign your variable the value 6
// console log your variable

let fruit = 6
console.log(fruit)

// write a function called product that accepts two numbers and 
// logs the product in the console and then
// returns the answer when you multiply them both together
// call that function on the numbers 4 & 689 to test it

function product(number1, number2) {
  let solution = number1 * number2
  console.log(solution)
  return solution;
}
product(4, 689)
// Problem 2
// write a function called evens that takes an array of numbers, removes 
// all the numbers that are odd and returns a new array with only the even numbers
// remember that even numbers have a remainder of 0 when you divide them by 2
// call your function on this array of numbers [4, 37, 18, 29, 52, 103, 22]

function evens(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0)
      newArray.push(i)
  }
  console.log(newArray)
  return newArray;
}

evens([4, 37, 18, 29, 52, 103, 22]);


//Problem 3
// write a function called five that takes a word and prints it in the console
// five times
// call your function on the word "pineapple" to test it

function five(word) {
  for (let counter = 0; counter < 5; counter++) {
    console.log(word)
  }
}
five('pineapple')
//Problem 4
// write a function called shortWords that takes an array of words and then
// returns a new array with only the words that are 3 letters long or less
// call your function on this array ["basin", "pit", "cheese", "bun", "river"]
function shortWords(arrayWords) {
  let shortWords = []
  for (let word of arrayWords) {
    if (word.length <= 3) {
      shortWords.push(word)
    }
  }
  console.log(shortWords)
}


shortWords(["basin", "pit", "cheese", "bun", "river"])