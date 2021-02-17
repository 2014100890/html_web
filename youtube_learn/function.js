//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculate a value

/*
Function declaration
function name(param1, param2) {body... return;}
one function === one thing
naming: doSomethng, command, verb
e.g createCardAndPoint -> createCard, createPoint
function is object in JS
*/
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message)
}
log('HELLO');
log(1234);

/* 2. Parmater
primitive parameters : passed by value
object parameters : passed by reference
*/
function changeName(obj){
    obj.name = 'coder'; 
}
const ellie = {name: 'ellie'}; 
changeName(ellie);
console.log(ellie); // {name : "coder"}

// 3.Default parameters (added in ES6)

function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`); 
}
showMessage('Hi'); // Hi! by unknown

// 4. Rest parameters (added in ES6) ... 배열 형태로 전달 
function printAll(...args){
    // for(let i = 0; i<args.length; i++){
    //     console.log(args[i]); 
    // }
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg)=>console.log(arg));
}
printAll('dream', 'coding', 'elite');

//5. local scope 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 
let globalMessage = 'global'; //global variable
function printMessage(){
    let message = 'hello'; 
    console.log(message);  // local variable
    console.log(globalMessage); 
    function printAnother(){
        console.log(message); 
        let childMessage = 'hello';
    }
}
printMessage(); 

// 6. return a value 
function sum(a,b){
    return a+b; 
}
const result = sum(1,2);  // 3 
console.log(`sum: ${sum(1,2)}`);

// return type 없을 경우 = return undefined.


// 7. Early return, early exit 
function upgradeUser(user){
    // bad 
    // if(user.point>10){
    //     // long upgrade logic 
    // }   
    // better 
    if(user.point <= 10){
        return; 
    }
    // long upgrade logic
}


/* 
First-class function
function are treated like any other variable 함수는 변수처럼 다뤄짐
can be assigned as a value to variable 변수에 할당도 되고 
can be passed as an argument to other functions. 파라미터로 전달도 되고 
can be returned by another function. 리턴값으로도 사용가능하다. .

1. function expression 이걸 통해 가능해졌다. 
a function declaration can be called earlier than it is delievered(hoisted)
할당 된 다음부터 호출이 가능하다. 
a function expression is crated when the execution reaches it. 
함수 선언 전에도 사용 가능하다. 
*/

const print = function(){ // 함수를 선언함과 동시에 Print에 할당함 
    // 함수에 이름이 없음 anonymous function
    console.log('print'); 
};
// const print = function print(){ 
//     // 함수에 이름이 있음 named function 
//     console.log('print'); 
// };
print(); 
const printAgain = print;
printAgain(); 
const sumAgain = sum; 
console.log(sumAgain(1,3)); 

// 2. Callback function using function expression 상황이 맞는 함수 호출
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    } else{
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!'); 
};
// named function
// better debugging in debugger's stack traces 
// recursions
const printNo = function print(){
    console.log('no!'); 
};

randomQuiz('wrong', printYes, printNo); 
randomQuiz('love you', printYes, printNo); 

 /* 
 Arrow function
 always anonymous 
 */
const simplePrint = function(){
     console.log('simplePrint'); 
}
// arrow function으로 변경
// const simplePrint = () => console.log('simplePrint'); 
const add = (a, b) => a+b;
const simpleMultiply = (a, b) => {
    // do something more 
    return a*b;  // block 사용 시 return 키워드 사용해야함
};

/* 
선언함과 동시에 사용해보자. 
IIFE : Immediatley Invoked Function Expression
*/
(function Hello(){
    console.log('IIFE');
})();

/*
fun quiz time
function calculate(command, a, b)
command : add, subtract, divide, multiply, remainder 
*/

function calculate(command, a, b){
    switch (command){
        case 'add':
            return a+b; 
        case 'subtract':
            return a-b;
        case 'divide':
            return a/b;
        case 'remainder':
            return a%b; 
        case 'multiply':
            return a*b; 
        default:
            throw Error('unknown command'); 
    }
}
console.log(calculate('add', 2, 3));
console.log(calculate('subtract', 2, 3));
console.log(calculate('divide', 2, 3));
console.log(calculate('remainder', 2, 3));
console.log(calculate('multiply', 2, 3));
