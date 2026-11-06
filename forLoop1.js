

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

let age = 20;
for(let i = 0; i < age; i++){
    if(age >= 19){
        console.log('can gym.')
        break;
    }else{
        console.log('can not gym.')
        break;
    }
}