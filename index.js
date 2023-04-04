// const num = 3
// function multiplyBy2(inputNumber){
//     const results = inputNumber*2;
//     return results
// }
// const output= multiplyBy2(num);
// const newOut = multiplyBy2(10);

// console.log(multiplyBy2(3));
// console.log(multiplyBy2(10));

// function squarNum(num) {
// return num*num;
// }
// squarNum(10);
// squarNum(20);
// squarNum(9);
// squarNum(8);
// squarNum(40);

// function copyArrayAndDivideBy2(array){
//     const output=[]
//     for(let i = 0; i < array.length; i++){
//         output.push(array[i]) / 2;
//     }
//     return output;
// }
// const myArray=[1,2,3,4,5];
// const result = copyArrayAndDivideBy2(myArray);


// console.log(copyArrayAndDivideBy2(myArray));

// lets take and array and add by 3

// function copyArrayAndAddBy3(array){
//     const output = []
//     for(let i = 0; i < array.length; i++){
//         output.push(array[i]) + 3;
//     }
//     return output
// }
// const urArray= [1, 2, 3, 4];

// const result = copyArrayAndAddBy3(urArray);

// console.log(copyArrayAndAddBy3(urArray))


// lets substraction be 3


// function copyArrayAndSubstractBy3(array){
//     const output = [];

//     for (let i = 0 ; i < array.length; i++){
//         output.push(array[i] + 3);
//     }
//     return output
// }

// const nemaArray=[1,2,3,4,5];

// const result =copyArrayAndSubstractBy3("nemaArray");

// console.log(nemaArray)


// function copyArrayAndManiPulate(array,instructions){
//     const output = [];
//     for(let i = 0; i < array.length; i++) {
//         output.push(instructions(array[i]));
//     }
//     return output
// }

// function manipulateBy2(input) {return input * 2};

// const result = copyArrayAndManiPulate([1,2,3,4,5,6,7,8,9], manipulateBy2);

// console.log(copyArrayAndManiPulate([1,2,3,4,5,6,7,8,9], manipulateBy2))

// ARROW FUNCTIONS

// function multiplyBy2(input) {return input * 2;};
// const manipulateBy2 = (input) => {return input * 2};
// const manipulateBy =(input) => (input) * 2;
// const manipulateBy4 = input => input * 2;

// Updating our callback function as an arrow function
// function copyArrayAndManiPulate(array, instructions){
//     const output = [];
//     for(let i = 0 ; i < array.length; i++){
//         output.push(instructions(array[i]))
//     }
//     return output;
// }
// const manipulateBy = input => input*2;
// const result = copyArrayAndManiPulate([1,2,3,4,5,5,6,7,7],manipulateBy);
// console.log(copyArrayAndManiPulate([1,2,3,4,5,5,6,7,7],manipulateBy))

// We can even pass in multiplyBy2 directly without a name

// function copyArrayAndManiPulate(array,instructions){
//     const output = [];
//     for(let i = 0; i < array.length; i++){
//         output.push(instructions(array[i]));
//     }
//     return output
// }
// const result=copyArrayAndManiPulate([1,2,3,4,5],input => input* 2);

// console.log(copyArrayAndManiPulate([1,2,3,4,5],input => input* 2))

// Functions get a new memory every run/invocation
function multiplyBy2(inputNumber){
    const result = inputNumber*2;
    return result
}
const output = multiplyBy2(7);
const newOut = multiplyBy2(6);
console.log(output);
console.log(newOut);