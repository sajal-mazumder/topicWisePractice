

// 01: increasing operator

// let sum = 0;

// for(let i = 0; i <= 10; i++){
//     // console.log(i)
//     sum += i;
//     // console.log(`Sum of ${i} = ${sum}`)
// }
// console.log(`Sum = ${sum}`)


// 02: decresing operator

// let decreaseNum = 10;
// for(let i = 10; i >= 0; i--){
//     // console.log(i)
//     decreaseNum = i;
//     // console.log(decreaseNum) // this line prints result.
// }
// console.log(decreaseNum) // result only 0


/*
 03
 Imagine you are building a system for a gym. Only people who are 18 years or older can enter. Let's look at how we can use a loop to check multiple ages automatically:
*/

// let age = 10;
// for(let i = 0; i < age; i++){
//     if(age >= 19){
//         console.log('can gym.')
//         break;
//     }else{
//         console.log('can not gym.')
//         break;
//     }
// }


// let result = '';
// let age = 24;
// for(let i = 0; i <= age;){
//     if(age >= 18){
//         result += 'Age- ' + age + ': Access granted ✅. \n'
//         break;
//     }else{
//         result += 'Age- ' + age + ': Access denied ❌. \n'
//         break;
//     }
// }
// console.log(result)


/*
NO 01: Print 1 to 10: Write a program to display the first 10 natural numbers (1, 2, 3... 10)
*/

// let numResult = '';
// let sum1 = 0;
// for(let i = 1; i <= 10; i++){
//     // console.log(i)
//     numResult += i +') ' + 'Result- ' + i + '\n' ;
//     sum1 += i;
// }
// console.log(numResult)
// console.log(sum1)


/*
No 2: Even Numbers only: Write a loop that prints only the even numbers from 2 to 20 
*/

// let result = '';
// for(let i = 0; i <= 20; i += 2){
//     if(i % 2 === 0){
//         // console.log(i)
//         result += i + '\n';
//     }
// }
// console.log(result)

// odd number

// let oddNum = '';
// for(let i = 1; i <= 20; i +=2){
//     if(i % 2 === 1){
//         oddNum += i + '\n'
//     }
// }
// console.log(oddNum);

// numbers divided by 3;

// let divide3 = '';
// for(let i = 1; i <= 20; i++){
//     if(i % 3 === 0){
//         divide3 += i + '\n'
//     }
// }
// console.log(divide3)


// divide by 5;

// let divide5 = '';
// for(let i = 1; i <= 30; i++){
//     if(i % 5 === 0){
//         divide5 += i + '\n'
//     }
// }
// console.log(divide5);


/*
No 3: Count Down: Create a countdown loop that starts from 10 and prints each number until it reaches 1, 
when it reach 4 it stop the loop.
*/

// let countdown = '';
// for( let i = 10; i >= 1; i--){
//     if(i === 4){
//         break;
//     }
//     countdown += i + '\n'
// }
// console.log(countdown)


/*
No 4: Multiplication Table: Pick a number (like 5) and print its multiplication table up to 10 (e.g., 5, 10, 15... 50)
when it reach 5 stop the loop
*/

// let num = 5;
// let multipleNum = '';
// for( let i = 0; i <= 10; i++){
//     if( i === 8){
//         break;
//     }
//     multipleNum += i * num + '\n'
// }
// console.log(multipleNum)


/*
No 5: Sum of Numbers: Calculate the total sum of all numbers from 1 to 10 and print only the final result
*/

// let sumResult = 0;
// for(let i = 1; i <= 10; i++){
//     sumResult += i;
// }
// console.log(sumResult)


/*
No 6: Skip a Number: Write a loop that prints numbers from 1 to 10, but skips the number 5 using a continue statement
*/

// let result = '';
// let serial = 1;
// for(let i = 1; i <= 10; i++){
//     if(i === 6){
//         continue;
//     }
//     result += serial + ') ' + i + '\n'
//     serial++;
// }
// console.log(result);



/*
No 7: Reverse Count by 2: Write a loop that starts at 20 and counts down to 0, decreasing by 2 each time (20, 18, 16... 0)
when it reaches 8 continue loop, when it reaches 4 stop loop
*/

// let countDecrease = '';
// let serial = 1; 
// for(let i = 20; i >= 0; i -= 2){
//     if(i === 8){
//         continue;
//     }
//     if(i === 4){
//         break;
//     }
//     countDecrease += serial + ') ' + i + '\n';
//     serial++;
// }
// console.log(countDecrease)


/*
No 8: Square of Numbers: Print the square of each number from 1 to 5 (e.g., 1, 4, 9, 16, 25)
*/

// let sqrResult = '';
// let qubeResult = '';
// let serial = 1;
// for(let i = 1; i <= 5; i++){
//     sqrResult += serial + ') ' + i * i + '\n';
//     qubeResult += serial + ') ' + i*i*i + '\n'
//     serial++;
// }
// console.log(sqrResult, qubeResult);


/*
No 9: Array Iteration: Given an array of fruits ['apple', 'banana', 'cherry'], use a for loop to print each fruit's name
*/

// let fruitArr = ['apple', 'bannana', 'cherry'];
// let arrResult = '';
// let serial = 1;
// for(let i = 0; i < fruitArr.length; i++){
//     arrResult += serial + ') ' + fruitArr[i] + '\n';
//     serial++;
// }
// console.log(arrResult);


/*
No 10: Odd Positions: Create a loop that prints numbers from 1 to 15, but only displays those that are at odd positions (1, 3, 5... 15)
*/

// let oddNum = '';
// let serial = 1; 
// for(let i = 1; i <= 15; i++){
//     if(i % 2 === 1){
//         oddNum += serial + ') ' + i + '\n';
//         serial++;
//     }
// }
// console.log(oddNum)


/*
The Even Skipper
Print all even numbers from 2 to 20, but skip the number 12.
*/

// let evenSkip = '';
// let serial = 1; 
// for(let i = 2; i <= 20; i += 2){
//     if(i === 12){
//         continue;
//     }
//     evenSkip += serial + ') ' + i + '\n';
//     serial++;
// }
// console.log(evenSkip);

/*
The Countdown Rocket
Count down from 10 to 1 and then print the word "Blastoff!" at the very end.
*/

// let countRocket = '';
// for(let i = 10; i >= 1; i--){
//     countRocket += i + '\n'
//     if(i === 1){
        
//         countRocket += 'Blastoff!'
//     }
// }
// console.log(countRocket)


/*
Multiplication Table
Take a number (e.g., 5) and print its multiplication table up to 10 (e.g., 5 × 1 = 5, 5 × 2 = 10, etc.)
*/

// let multipleResult = '';
// let num = 5;
// for(let i = 1; i <= 10; i++){
//     multipleResult += `${num} * ${i} = ${num * i} \n `;
// }
// console.log(multipleResult)


/*
Character Spaced Out
Take a fixed string word (like "HELLO") and print each letter on a new line with a hyphen - before it.
*/

// let arr = 'Hello';
// let arrResult = '';
// for(let i = 0; i < arr.length; i++){
//     arrResult += `-${arr[i]} \n `
// }
// console.log(arrResult)


/*
Sum of First N Numbers
Calculate and print the total sum of all numbers from 1 to 50.
*/
// let result = 0;
// for(let i = 1; i <= 50; i++){
//     result += i;
// }
// console.log(result)


/*
The Right-Angled Triangle
Print a right-angled triangle of asterisks (*) with 5 rows (Row 1 has 1 star, Row 2 has 2 stars, up to Row 5).
*/

// for(let i = 1; i <= 5; i++){
//     let result = '';
//     for(let j = 1; j <= i; j++){
//         result += ' * ';
//     }
//     console.log(result)
// }


// square pattern

// for(let i = 1; i <= 5; i++){
//     let result = '';
//     for(let j = 1; j <= 5; j++){
//         result += ' $ '
//     }
//     console.log(result)
// }


/*
Array Element Doubler
Given a list of numbers (e.g., [1, 2, 3, 4, 5]), use a loop to print double the value of each number.
*/

// let arr = [ 1, 2, 3, 4, 5];
// let doubleNum = [];
// for(let i = 0; i < arr.length; i++){
//     doubleNum += arr[i] * 2 + '\n';
// }
// console.log(doubleNum)


/*
Factorial Finder
Find the factorial of 5 (multiply 1 × 2 × 3 × 4 × 5) and print the final result.
*/

// let factorialNum = 1;
// let factorialResult = '';
// for(let i = 1; i <= 5; i++){
//     factorialResult += `${factorialNum *= i} \n`
// }
// console.log(factorialResult)


/*
Count the Vowels
Loop through a given sentence or word and count how many total vowels (a, e, i, o, u) it contains.
*/

// let word = 'sajamazumder is a school teacher.';
// let vowels = 'aeiou';
// let result = ''
// let count = 0;
// for(let i = 0; i < word.length; i++){
//     let char = word[i].toLowerCase();
//     if(vowels.includes(char)){
//         result += char;
//         count++;
//     }
// }
// console.log(result, count)

// printing consonant

// for(let i = 0; i < word.length; i++){
//     let char = word[i].toLowerCase()
//     if(!vowels.includes(char) && char >= 'a' && char <= 'z'){
//         result += char;
//         count++
//     }
// }
// console.log(result, count)

/*
The Number Grid
Print a square grid of numbers from 1 to 3 repeated across 3 rows.
(Output should look like 123 on line one, 123 on line two, and 123 on line three). 
*/

// for(let i = 1; i <= 5; i++){
//     let result = '';
//     for(j = 1; j <= 5; j++){
//         result += j + ' ';
//     }
//     console.log(result)
// }


/*
 The Alternating Grid (পর্যায়ক্রমিক গ্রিড)৩টি লাইনের (Rows) একটি গ্রিড বা চারকোনা বক্স তৈরি করুন, যেখানে প্রথম লাইনে শুধু 1, দ্বিতীয় লাইনে শুধু 2, এবং তৃতীয় লাইনে শুধু 3 প্রিন্ট হবে। প্রতিটি সংখ্যা ৩ বার করে বসবে এবং মাঝখানে স্পেস থাকবে।
 */

//  for(let i = 1; i <= 5; i++){
//     let result = '';
//     for(j = 1; j <= 5; j++){
//         result += i + ' ';
//     }
//     console.log(result)
//  }


/*
The Odd Sum Stop (বিজোড় সংখ্যার যোগফল)১ থেকে শুরু করে ২৫ পর্যন্ত সব বিজোড় (Odd) সংখ্যাগুলোর যোগফল বের করুন। তবে লুপের ভেতরে একটি শর্ত থাকবে—যদি যোগফল কোনো কারণে ৫০ পার হয়ে যায় (sum > 50), তবে লুপটি সঙ্গে সঙ্গে বন্ধ (break) হয়ে যাবে এবং তখনকার চূড়ান্ত যোগফলটি প্রিন্ট করবে।ইঙ্গিত: লুপের ভেতরে if কন্ডিশন এবং break কীওয়ার্ড ব্যবহার করতে হবে।
*/

// let sumOfOdd = 0;
// for(let i = 1; i <= 55; i += 2){
//     sumOfOdd += i;
//     if(sumOfOdd > 270){
//         break;
//     }
// }
// console.log(sumOfOdd)

// let oddSum = 0;
// for( let i = 1; i <= 25; i += 2){
//     oddSum += i;
//     if (oddSum > 50) {
//         break;
//     }
// }
// console.log(oddSum);


/*
challange 1: . Search and Destroy (Intermediate)Goal: Write a loop that prints numbers from 1 to 10. 
However, if the loop hits the number 7, it must stop completely and print nothing else after it.Hint: Use the break; statement inside an if block.
*/

// let num = '';
// for(let i = 0; i <= 10; i++){
//     if(i === 7){
//         break;
//     }
//     num += i + '\n'
// }
// console.log(num)


/*
challange 2: . The Price Filter (Array Challenge)Goal: You are given an array of prices: let prices = [10, 45, 60, 12, 85, 30];. 
Use a loop to print only the prices that are greater than 40.
Hint: Combine your array loop knowledge (prices[i]) with an if condition.
*/

// let priceArr = [10, 34, 24, 35, 45];
// let result = [];
// for(let i = 0; i < priceArr.length; i++){
//     // if(priceArr[i] > 25){
//     //     result += priceArr[i] + '\n'
//     // }
//     if(priceArr[i] < 30){
//         result += priceArr[i] + '\n'
//     }
// }
// console.log(result)


/*
No 1: The Narcissistic Number Search
Find all 3-digit numbers where the sum of each digit raised to the power of 3 equals the number itself (e.g., 1³ + 5³ + 3³ = 153).
*/

// for(let i = 100; i <= 999; i++){
//     let temp = i ;

//     let digit3 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit2 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit1 = temp % 10;
    
//     let sumCubes = Math.pow(digit3, 3) + Math.pow(digit2, 3) + Math.pow(digit1, 3);
//     if(sumCubes === i){
//         console.log(i)
//     }
// }

// for(let i = 10; i <= 99; i++){
//     let temp = i;

//     let digit2 = temp % 10;
//     temp = Math.floor(temp / 10);

//     let digit1 = temp % 10;

//     let sumSqr = Math.pow(digit1, 2) + Math.pow(digit2, 2);
//     if(sumSqr === i){
//         console.log(i)
//     }
// }


// for(let i = 1000; i <= 9999; i++){
//     let temp = i;

//     let digit4 = temp % 10;
//     temp = Math.floor(temp / 10)

//     let digit3 = temp % 10;
//     temp = Math.floor(temp / 10)

//     let digit2 = temp % 10;
//     temp = Math.floor(temp / 10)

//     let digit1 = temp % 10;
    
//     let sumOfPowerFour = Math.pow(digit4, 4) + Math.pow(digit3, 4) + Math.pow(digit2, 4) + Math.pow(digit1, 4);
//     if(sumOfPowerFour === i){
//         console.log(i)
//     }
// }


/*
No 2: The Collatz Conjecture Sequence
Given any positive integer, print its Collatz sequence using a loop. If even, divide by 2; if odd, multiply by 3 and add 1. Stop when it hits 1.
*/

// let number = 9;
// for( let i = number; i > 1;){
//     if(i % 2 === 0){
//         i = i / 2;
//     }else{
//         i = i * 3 + 1;
//     }
//     console.log(i)
// }

// while loop, best practice

// let num = 5;
// while(num > 1){
//     if(num % 2 === 0){
//         num = num / 2;
//     }else{
//         num = num * 3 + 1;
//     }
//     console.log(num)
// }


/*
No 3: Diamond Pattern Generator
Print a perfect diamond shape made of asterisks (*) based on an odd number of maximum rows provided by the user.
*/

// let n = 5;
// let mid = Math.floor(n / 2) + 1;

// for(let i = 1; i <= mid; i++){
//     let rowStar = ""

//     for(let j = 1; j <= mid - i; j++){
//         rowStar += " "
//     }

//     for(let k = 1; k <=( 2 * i) - 1; k++ ){
//         rowStar += "*"
//     }
//     console.log(rowStar)
// }

// for(let i = mid - 1; i >= 1; i--){
//     let rowStar = "";

//     for(let j = 1; j <= mid - i; j++){
//         rowStar += " ";
//     }

//     for(let k = 1; k <= (2 * i) - 1; k++){
//         rowStar += "*"
//     }
//     console.log(rowStar)
// }


let number = 7;
let midLine = Math.floor(number / 2) + 1;

for(let i = 1; i <= midLine; i++){
    let rowStar = "";

    for(let j = 1; j <= midLine - i; j++){
        rowStar += " "
    }

    for(let k = 1; k <= (2 * i) - 1; k++){
        rowStar += "*"
    }
    console.log(rowStar)
}

// below slide

for(let i = midLine - 1; i >= 1; i--){
    let rowStar = ""

    for(let j = 1; j <= midLine - i; j++){
        rowStar += " "
    }

    for(let k = 1; k <= (2 * i) - 1; k++){
        rowStar += "*"
    }
    console.log(rowStar)
}