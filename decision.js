// Purpose: returns whichever number is the greater (higher) number.
// Signature: takes 2 arguments, both numbers
// Examples: greaterNum(2,3) -> 3
//           greaterNum(13,6) -> 13
//           greaterNum(10, 20) -> 20


function greaterNum(num1, num2) {
  if (num1 < num2){
    return num2 + " is higher";
  }else if(num1 > num2){
    return num1 + " is higher";
  }else {
    return "these numbers are equal";
  }
}


// Purpose: returns "hello, world" in language selected
// Signature: takes 1 argument, a language code
// Examples: helloWorld(es) -> "hola, mundo"
//           helloWorld(de) -> "hallo, Welt"
//           helloWorld(pt) -> "oi, mundo
//           helloWorld(en) -> "hello, world" (default)

function helloWorld(langCode) {

  if (langCode === "es") {
    console.log("hola, mundo")
  } else if (langCode === "de") {
    console.log("Hallo, Welt")
  } else if (langCode === "pt") {
    console.log("oi, mundo")
  } else {
    console.log("hello, world")
  }
}

// Purpose: returns a letter based on a number score
// Signature: takes 1 argument, a number score
// Examples: assignGrade(90) -> "A"
//           assignGrade(80) -> "B"
//           assignGrade(70) -> "C"
//           assignGrade(60) -> "D"
//           assignGrade(50) -> "F"

function assignGrade(score) {
  if (score >= 90) {
    console.log("A")
  } else if (score >= 80) {
    console.log("B")
  } else if (score >= 70) {
    console.log("C")
  } else if (score >= 60) {
    console.log("D")
  } else {
    console.log("F")
  }
}


// Purpose: return the number and pluralized form of the noun
// Signature: takes 2 argument, a noun and an integer
// Examples: pluralize("dog", 2) -> 2 dogs
//           pluralize("dog", 1) -> 1 dog
//           pluralize("sheep", 1) -> 1 sheep
//           pluralize("sheep", 2) -> 2 sheep
//           pluralize("child", 1) -> 1 child
//           pluralize("child", 4) -> 4 children


function pluralize(noun, amount) {

  if (noun === "child" && amount > 1) {
    console.log(amount + " " + noun + "ren")
  } else if (noun === "sheep") {
    console.log(amount + " " + noun)
  } else if (amount > 1) {
    console.log(amount + " " + noun + "s")
  } else {
    console.log(amount + " " + noun)
  }

}


// function pluralizeNested(noun, amount) {
//
//   if (noun === "sheep") {
//     console.log(amount + " " + noun)
//   } else if (noun === "child" && amount > 1) {
//     console.log(amount + " " + noun + "ren")
//   } else if (amount === 1) {
//
//
//
//   }
//
//   if
//   } else if (amount > 1) {
//     console.log(amount + " " + noun + "s")
//   } else {
//     console.log(amount + " " + noun)
//   }
//
// }


// Purpose:  function that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Signature: this function doesn't take an argument
// Examples: "0 is even"
//           "1 is odd"
//           "2 is even"

function oddEven() {
  var icount = 0
  while( icount <= 14) {
    icount = icount + 1
    if (icount % 2 === 1) {
      console.log(icount + " is odd")
    } else {
      console.log(icount + " is even")
    }
  }
}



// Purpose: program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
// Signature: this function doesn't take an argument
// Examples: "0"
//           "1"
//           "3 Fizz"
//           "5 Buzz"
//           "6 Fizz"
//           "9 Fizz"
//           "10 Buzz"
//           "15 FizzBuzz"
//           "30 FizzBuzz"

  function fizzBuzz() {
    var icount = 0;
    while (icount < 100) {
      icount+=1;

      if ((icount % 3 === 0 && icount % 5 === 0)) {
        console.log(icount + " FizzBuzz");
      } else if (icount % 5 === 0) {
        console.log(icount + " Buzz");
      } else if (icount % 3 === 0){
        console.log(icount + " Fizz");
      } else {
        console.log(icount);
      }
    }
  }

  // Purpose: computer picks random number. user tries to guess number, and the computer will respond with high or low
  // Signature: user will input an integer into the prompt
  // Examples: hiLo(0), 4 responds "low"
            // hiLo(2), 4 responds "low"
            // hiLo(5), 4 responds "high"
            // hiLo(4), 4 responds "good job"

function hiLo() {

  var name = prompt("what's your name?")
  var compNum =  Math.floor(Math.random() * 10); // (max - min)) + min;
  var guess = prompt("guess a number between 1 and 100");
  var tryCount = 7;

    while (guess != compNum && tryCount >= 0) {
      //console.log(typeof(guess));
      while (isNaN(parseInt(guess))){
        guess = prompt("not a number,  type in a valid number");
      }

      if (tryCount === 0) {
        console.log("you lose");
      } else if (parseInt(guess) < compNum) {
        guess = prompt("guess a higher number");
        tryCount -= 1;
      } else if (parseInt(guess) > compNum) {
        guess = prompt("guess a lower number");
        tryCount -= 1;
      } else {
        console.log("rawr");
        guess = prompt("not a number. guess a number");
      }
    }

    if (guess == compNum) {
      alert("you win! " + name)
    } else {
      alert("better luck next time")
    }

}



// Purpose: Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed
// Signature: user will input a sentence (list of words) into the prompt
// Examples: reverse("Hi there neighbor") -> "Hi ereht robhgien"
          // reverse("Hello thy neighbor") -> "olleh thy robhgien"
          // reverse("nick is awesome") -> "nick is emosewa"


function reverse() {

  var final = [];

  var wordArray = prompt("enter a phrase").split(" ")
  // wordArray = wordArray.split(" ");

for (var i = 0; i < wordArray.length; i++) {

  if (wordArray[i].length >= 5) {

    final.push(wordArray[i].split("").reverse().join(""));
  } else {
    final.push(wordArray[i]);
  }

}

return final.join(" ")

}














//
