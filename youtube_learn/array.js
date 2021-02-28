// 배열 : 비슷한 타입의 오브젝트 들을 묶어 놓는 것
'use strict'

// Array 
// 1. declaration 
const arr1 = new Array(); 
const arr2 = [1, 2]; 

// 2. Index position
const fruits = ['🍐', '🥝']; 
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]); // 마지막 

// 3. looping over an array
// print all fruits
// a. for
for(let i = 0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits){
    console.log(fruit);
} 

// c. forEach
// fruits.forEach(function(fruit, index, array){
//     console.log(fruit, index, array);
// })
fruits.forEach((fruit, index, array)=>console.log(fruit, index, array));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍊', '🍒');
console.log(fruits);
// pop : remove an item for the end 
fruits.pop();
console.log(fruits);
 
// unshift : 앞에서 넣기 add an item to the beginning
fruits.unshift("🍍");
console.log(fruits);
// shift : 앞에서 부터 데이터 빼기 remove an item from the beginning 
fruits.shift("🍍"); // ["🍍", "🍐", "🥝", "🍊"]
console.log(fruits); // ["🍐", "🥝", "🍊"]

// note! shift, unshift are slower than pop, push
// splice : 특정 인덱스의 item 삭제 하기 (remove an item by index position)
fruits.push("🍑");
console.log(fruits); // ["🍐", "🥝", "🍊", "🍑"]
// fruits.splice(1)// 지정한 인덱스부터 모두 삭제 되버림 
// fruits.splice(1, 1)// 인덱스 1 부터 1개 삭제  //  ["🍐", "🍊", "🍑"]
fruits.splice(1, 1, "🍇", "🍆"); // 인덱스 1 부터 1개 삭제하고 삭제 위치 부터 추가 
console.log(fruits);//  ["🍐", "🍇", "🍆", "🍊", "🍑"]

// splice : 이어주다. 
// combine two arrays 배열 합치기 
const fruits2 = ["🍐", "🍇"];
const newFruits = fruits.concat(fruits2);

// 5. searching 
// find the index
console.log(newFruits); // ["🍐", "🍇", "🍆", "🍊", "🍑", "🍐", "🍇"]
console.log(newFruits.indexOf('🍐')); // 0 
console.log(newFruits.includes('🍐')); // true
console.log(newFruits.indexOf('🍟')); // -1 (없는 경우)

// last index of
console.log(newFruits.lastIndexOf('🍐')); // 5