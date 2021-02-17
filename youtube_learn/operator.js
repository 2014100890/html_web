//1. String concatenation
console.log('my'+'cat'); // my cat
console.log('1'+2);  // 12
console.log(`string literals: 1+2 = ${1+2}`);  // string literals: 1+2 = 3

// 2. numeric operators

// 3. Increment and decrement operators
let counter = 2; 
const preIncrement = ++counter; // postIncrement 3 counter 3 
const postIncrement = counter++; // postIncrement 3 counter 4 
const preDecrement = --counter; // preDecrement 3 counter 3 
const postDecrement = counter--; // preDecrement 3 counter 2

//4. Assignment operators 

// 5. Comparison operators

// 6. Logical operators 
// ||, &&, !  가벼운 operation 부터 연산 

// and 널 체크 시 사용 
// often used to compress long if -statement 
// nummableObject && nullableObject.something
// if(nullableObject != null){
//     nullableObject.something;
// }

//!(not)
// console.log(!value1); 

//7.Equality
// == != loose equality, with type conversion
// 5 '5' 같다. 
// === !== strict equality, no type conversion 
// 5 '5' 다르다 
// object equality by reference 
const ellie1 = {name : 'ellie'}
const ellie2 = {name : 'ellie'}
const ellie3 = ellie1; // 같은 레퍼런스 

console.log(ellie1 == ellie2);// false 레퍼런스 값이 다 다름 
console.log(ellie1 === ellie2);// false
console.log(ellie1 == ellie3);// true 

// equality - puzzler
console.log(0==false); // true
console.log(0===false); // false
console.log(''==false); // true
console.log(''===false); // false
console.log(null==undefined);// true
console.log(null===undefined);// false

// 8. Conditional operator : if 
// if, else if, else
const name= 'ellie'; 

if(name=== 'ellie'){
    console.log('Welcome, Ellie'); 
}else if (name === 'coder'){
    console.log('you are amazing '); 
}else{
    console.log('unknown'); 
}

// 9. Ternary operator : ? 
// condition? value1 : value2?;
console.log(name==='ellie'? 'yes' : 'no');

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'IE'; 
switch (browser){
    case 'IE':
        console.log('go away');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

// 11. Loops
// while loop, while the condition is truthy, 
// body code is excuted.
let i =3; 
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

// do while loop, body code is excuted first, 
// then check the condition.
i = 3;
do{
    console.log(`do while:${i}`); 
    i--;
}
while (i>0);

// for loop, for(begin; condition; step)
for(i=3; i>0; i--){
    console.log(`for: ${i}`); 
}

for(let i=3; i>0; i=i-2){ // inline varible declaration
    console.log(`for: ${i}`); 
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for(let i = 0 ; i<=11; i++){
    if(i%2 !==0){
        continue;
    }
    console.log(i); 
}
for (let i = 0 ; i<=10; i++){
    console.log(i);
    if(i == 8){
        break;
    }
}