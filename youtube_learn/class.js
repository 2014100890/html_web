/*
    class나 object가 없다면 
    연관된 변수와 함수들을 묶는 container 

    class person{
        name; // 속성(field)
        age;
        speak(); // 행동(method)
    }
    field 만 있는 클래스 : 데이터 클래스 

    class : 틀 template 붕어빵
    -. template, declare once, no data in

    object : class의 실제 데이터를 넣어 만든 Instance 팥 붕어빵 
    해당 클래스의 구조로 할당된 실체  
    -. instance of a class
    -. create many times
    -. data in 
*/

'use strict';
/*
object-oriented programming
class : templatec 
object : instance of a class
javascript classes 
    -. introduced in ES6
    -. syntactical sugar over prototype-based inheritance 문법 상 제공 
*/

// 1. class declaration
class Person{
    // constructor
    constructor(name, age){ // 생성자 
        //fields object를 만들 때 필요한 데이터 전달 
        this.name = name; 
        this.age = age; 
    }
    // methods
    speak(){
        console.log(`${this.name}: hello!`); 
    }
}

const ellie = new Person('ellie', 20); 
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and Setters
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName; 
        this.lastName = lastName; 
        this.age = age;
    }
    get age(){ 
        // 값 리턴  this.age ==> getter 호출 
        return this._age; 

    }
    set age(value){ // 값 설정해야하므로 값을 받아와야 한다. 
        // setter 정의하는 순간 = setter 호출 
        // this.age = value; 
        // = 에서 setter 콜스택에 계속 쌓임
        // if(value<0){
        //     throw Error("age can't be negative"); 
        // } 
        this._age = value <0 ? 0:value;
    }
}

// 나이가 -1? 말도 안되쥬? 
const user1 = new User('steve', 'Jobs', -1); 
console.log(user1._age);
console.log(user1.firstName);

/* 3. Fields(public, private)
Too soon!
# 붙이면 private field 됨. 클래스 내부에서만 접근 및 변경 가능 
*/

class Experiment{
    publicField =2; 
    #privateField = 0 ;  
}

const experiment = new Experiment(); 
console.log(experiment.publicField); 
console.log(experiment.privateField); // undefined  

/*
4. static properties and methods 
Too soon!  
object에 상관없이 (들어오는 데이터에 상관없이)
공통적으로 클래스에서 사용되어지는 값 및 함수 
(메모리의 사용을 줄여줌)
// 데이터에 상관없이 동일하게 반복되어지는 메소드 및 값
*/
class Article {
    static publisher = 'Dream coding'; //  클래스 자체에 할당되어짐 
    constructor(articleNumber){
        this.articleNumber = articleNumber; 
    }
    static printPublisher(){
        console.log('Aritcle.publisher');
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined 
console.log(Article.publisher); // Dream coding
Article.printPublisher(); // static 함수 호출하기 

/* 
상속과 다양성
삼각형
사각형 
모두  높이, 너비, 색상이라는  반복된 속성들이 있음
도형이라는 공통점으로 한번에 정의한다. 
공통적 속성들을 재사용한다. 
*/

/* 
5. Inheritance 상속 
a way for one class to extend another class 
*/

class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color; 
    }
    draw(){
        console.log(`drawing ${this.color} color of`); 
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    // 다양성, 오버라이딩 : 필요한 함수만 재 정의하여 사용한다. 
    draw(){
        super.draw(); // 부모 클래스의 draw() 출력 
        console.log('삼각형을 그려보자 '); // 새로 정의된 draw() 도 출력
    }
    getArea(){
        return this.width * this.height/2;
    }
    toString(){
        return `Triangle: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20, 20, 'blue'); 
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red'); 
console.log(triangle.getArea());
rectangle.draw();
triangle.draw();

/* 
6. Class checking : Instance of 
object는 클래스를 이용하여 만들어진 새로운 Instance다. 
instanceof 왼쪽 인스턴스가 오른쪽 클래스의 오브젝트인지
오른쪽 클래스를 이용해서 만들어진 것인지 확인해준다. 
*/
console.log(rectangle instanceof Rectangle); // true 
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // false
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
// 자바스크립트에서 만든 모든 object 클래스들은 자바스크립트의 Object class를 상속한다. 
// 공통적인 method 사용 가능 
console.log(triangle.toString()); 
