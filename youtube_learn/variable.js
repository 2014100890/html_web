// 1.use strit added in ES5 
// use this for valina javscript 
// 'use strict'; 

/* 
 변수 선언 방식 2가지
 mutable : let, immutable : const 
*/

// 2.Variable 변수 (변경될 수 있는 값)
// 변수 선언 : let (added in ES6 에서 추가) 
// block scope, global scope
//변경가능 : mutable
{
    let name = 'ellie';
    console.log(name); 
    name = 'hello'; 
    console.log(name); 
}
/* var (don't even use this)
    hoisting(move declaration from bottom to top)  
    어디에서 선언했는지 상관없이 선언을 제일 위로 끌어올려준다. 
    block scope도 안됨 
*/

/* 3. Constant
favor immutable data type always for a few reasons (안바꿀 값)
- security
- thread safety
- reduce human mistakes
*/
const daysInWeek = 7; 
const maxNumber = 5; 

/* 
4. Variable types
1) primitive, single item (더이상 나뉠 수 없는 한 가지 type)
: number(숫자), string, boolean, null, undefine, symbol
2) object, box container : single item을 묶어 한 box로 관리 
: function, first-class function (자바스크립트에서는 function도 데이터 타입임/ 변수에 할당도 가능하다 )
*/
let a = 12; 
// let a: number = 12; 
// number -spcial numeric values : infinity, -infinity, NaN 
const infinity = 1/0; 
const negativeInfinity = -1/0; 
const nAN = 'not a number'/2;  // 숫자가 아닌 string 출력 
const bigInt = 1n; //끝에 n붙이면 big int 타입 
console.log(infinity);
console.log(negativeInfinity);
console.log(nAN);
console.log(`${bigInt}, type : ${typeof bigInt}`);

/* string */
const char = 'c'; 
const newchar = 'c'+char;
console.log( `hi ${char}`); // template literals

/* boolean
false: 0, null, undefined, NaN, ''
true: any other value
*/

/* null : empty 값이라 할당 */
let nothing = null; 
/* undefiened : 선언은 되었지만 값을 안 넣은 상태 */
let x;
// let x = undefined; 

/* symbol, create unique identifiers for objects */
const symbol1 = Symbol('id'); // 우선순위를 주고싶을 때 식별자로 사용 (고유값)
const symbol2 = Symbol.for('id'); 
const symbol3 = Symbol.for('id');  //symbo2 == symbol3

/* Dynamic typing : dynamically typed language */
let text = 'hello'; 
console.log(`value: ${text}, type: ${typeof text}`); //hello string
text =1; 
console.log(`value: ${text}, type: ${typeof text}`); //1 number
text = '7'+5; 
console.log(`value: ${text}, type: ${typeof text}`); //75 string
text = '8'/'2'; 
console.log(`value: ${text}, type: ${typeof text}`); //4 number

/* object, real-life object data structure */
const ellie = {name : 'ellie', age:20};
ellie.age = 21; 