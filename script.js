
/* 
1. Create a function that will be able to convert figures from fahrenheit to Celsius.
*/
function farToCel(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5 / 9;
    console.log(`Celsius: ${celsius}`);
}

farToCel(86); //Output 30


/* 
2. Create a function that will calculate the average of numbers in an array.
*/

function calculateAverage(array) {
    let number = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        number += element;
    }
    const averageNum = number / array.length;
    console.log(`Average-Number: ${averageNum}`);
}

calculateAverage([10,10,10,10,10]); // Output 10

/* 
3. Create a function that checks if a number, n is divisble by two numbers x and y. All inputs are positive, non zero digits.
*/

function checkDivisible(n, x, y) {
    if (Number(n) % Number(x) === 0  && Number(n) % Number(y) === 0) {
        console.log('Positive');
    }else{
        console.log('Negative');
    }
}

checkDivisible(20, 2, 4); // Output Positive

/* 
4. Create a function that will output the first 100 prime numbers.
*/

function isPrimeNumber(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
         if (number % i === 0) {
            return false;
         }   
    }
    return true;
}

function generateFirst100Primes() {
    let count = 0;
    let number = 2;

    while (count < 100) {
        if (isPrimeNumber(number)) {
            console.log(`${number}`);
            count++;
        }
        number++;
    }
}

generateFirst100Primes(); 
/*  2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 67 61 71 73 79 83 89 97 101 103 107 109 113 127 131 139 137 149 151 157 163 167 173
    179 181 191 193 197 199 211 223 227 229 233 239 241 251 257 263 269 271 277 281 283 293 307 311 313 317 331 337 347 349 353 359 367 373 379 383 389 397 401 409 419 421 431 433 439 443 449 457 461 467 479 487 491 499 503 509 521 523 59 541  */


/* 
5. Create a function that will return a boolean specifying if a number is a prime number.
*/    

function checkPrime(number) {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i < number; i++) {
         if (number % i === 0) {
            return false;
         }   
    }
    return true;
}

console.log(checkPrime(461));  //Output true

/* 
6. Create a function that receives an array of diverse numbers and returns an array containing only positive numbers.
*/ 

function printPositiveNumbers(array) {
    let positiveArray = [];
    for (let i = 0; i < array.length; i++) {
        const num = array[i];
        if (num > 0) {
            positiveArray.push(num);
        }
    }
    return positiveArray;
}

console.log(printPositiveNumbers([-1,-2,3,10,12,-199,0,1])); //Output [3,10,12,1]

/* 
7. Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz"..
*/ 

function fizzBuzz() {
    let count = 1;

    while (count <= 100) {
        if (count % 3 === 0) {
           console.log('Fizz'); 
        }

        if (count % 5 === 0) {
            console.log('Buzz'); 
        }
        
        if (count % 3 === 0 && count % 5 === 0) {
            console.log('FizzBuzz'); 
        }
        count++;
    }
}

fizzBuzz(); //Output Fizz Buzz FizzBuzz

/*
8. The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them, our hashtag generator will meet the following criteria; 
    -> It must start with a hash symbol, #.
    -> Ignore all spaces in the input.
    -> All words must have their first letter capitalized.
    -> If the final result is going to be longer than 140 characters, it should return false.
    -> If the input or result is an empty string, it should return false.
*/

function hashtagGenerator(input) {
    if (!input || input.trim() === "") {
        return false;
    }

    const words = input.split(" ");
    let hashtags = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i].trim();
        if (word !== "") {
          hashtags.push(word.charAt(0).toUpperCase() + word.slice(1));
        }
      }

      const result = "#" + hashtags.join("");

      if (result.length > 140) {
        return false;
      }
    
      return result; 
}

console.log(hashtagGenerator("Hashira")); //Output #Hashira

