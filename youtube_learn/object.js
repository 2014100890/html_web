/* objects
    one of the JavaScript's data types. 
    a collection of related data and/or functionality.
    Nearly all objects in JavaScript are instance of Object. 
    object = {key : value};
*/

/* literals and properties*/
/* 개선 전 */ 
// const name = 'ellie'; 
// const age = 4;
// print(name, age); 

// function print(name, age){
//     console.log(name); 
//     console.log(age); 
// }

/* 오브젝트로 개선 */
const ellie = {name : 'ellie', age : 4}; 
function print(person){
    console.log(person.name); 
    console.log(person.age); 
}
print(ellie); 

/* 오브젝트 만들기 */
const obj1 = {};  // 괄호를 이용해 만들기 object literal 
const obj2 = new Object(); // object constructor syntax

// 동적으로 타입이 런타임 떄 결졍되기 때문에 중간에 속성을 추가할 수 도 있음. 
ellie.hasJob = true; 
console.log(ellie.hasJob);

delete ellie.hasJob; 
console.log(ellie.hasJob);

// 2. computed properties 
// key shoud be always string
console.log(ellie.name);  // 코딩하는 순간 키에 해당하는 값을 받아오고 싶을 떄 
console.log(ellie['name']); // (computed properties) 정확하게 어떤 키가 필요한지 모를 때  
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printfValue(obj, key){
    // console.log(obj.key); // 언제 어떤 키를 받을지 알 수 없는 경우
    console.log(obj[key]);
}
printfValue(ellie, 'name');
printfValue(ellie, 'age');

// 3. property value shorthand
// 문제 : 키를 반복해서 작성하여 오브젝트를 만들고 있음
const person1 = {name : 'bob', age :2}; 
const person2 = {name : 'steve', age :3}; 
const person3 = {name : 'dave', age :4}; 

// 해결책 (함수로) 
function MakePerson(name, age){
    return{
        name, age
    }
}

// 4. Constructor Function
function Person(name, age){
    // this = {}
    this.name = name; 
    this.age = age;
    // return this  
}
const person4 = MakePerson('ellie', 30);
console.log(person4);
const person5 = new Person('ellie', 30);
console.log(person5);

// 5. in operator : property existence check (key in obj)
console.log('name' in ellie); // true
console.log('random' in ellie); // false
console.log(ellie.random); // undefined

// 6. for.. in vs fod .. of 
// for(key in obj)
for(key in ellie){
    console.log(key);
}// name, age, hasJob

// for (value of iterable)
const array = [1,2,4,5]; 
// 개선 전 
// for(let i = 0; i<array.length; i++){
//     console.log(array[i]);
// }

for(value of array){
    console.log(value); // 1 2 4 5
}

// 7. fun cloning
// object.assign(dest, [obj1, obj2, obj3 ...])
const user = {name : 'ellie', age : '20'}; 
const user2 = user;
// user2.name = 'coder'; 
// console.log(user); // 같은 곳을 가리키고 있기 때문에 user도 coder로 변경됨 

// 값을 복사하는 방법
// old way
const user3 = {}; 
for(key in user){
    user3[key] = user[key]; 
}
console.log(user3);

// 다른 방법
const user4 = {}; 
Object.assign(user4, user); 
console.log(user4);
console.log(user4);
// const user4 = Object.assign({}, user);

const fruit1 = {color : 'red'}; 
const fruit2 = {color : 'blue', size : 'big'}; 
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);