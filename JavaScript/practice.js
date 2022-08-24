let time = prompt("enter time : ");
if(time < 12){
    confirm("good morning");
}
else if (time < 18){
    alert("good evening");
}
else {
    alert("good night");
}

var fruits = prompt("enter fruit : ")
switch (fruits) {
    case "mango":
        console.log("mango is sweet and tasty");
        break;

    case "apple":
        console.log("apple is red and healthy");
        break;

    case "banana":
        console.log("banana is yummy");
        break;

    default:
        console.log("not good taste");
        break;
}

for (let i = 0; i < 10; i++) {
   console.log("hi there");   
}

let array = ["ram","sham"];
let animal = {
    name : "dog",
    legs : 4
};

array.forEach(element => {
    console.log(element);
});

for (let key in animal) {
    console.log(key,animal[key]);
}
for (let name of array) {
    console.log(name);
}

console.log(animal.legs,animal["legs"]);

function sum(a,v) {
    console.log(a+v);
}
sum(3,3);

loop1: for(let i = 0; i < 3; i++) {
    loop2:for(let j = 0; j < 3; j++) {
        console.log("hello");
        if(i == 1) {
            continue loop1;
        }
        else{
            break loop2;
        }
    }
}


















// STRINGS

let hello = "Hello";
let m = 123
console.log(hello,typeof hello);
console.log("hello "+"welcome"); 
console.log("hello "+ 123); // type coersion
let hi =  Number(m);
console.log(hi,typeof hi,);
hello = hi.toString(); // String() can also be used 
console.log(hello,typeof hello);
console.log(`${hi + hello} this is template literal ${hi}`);
console.log(hello);
console.log(hello = hello.concat(" welcome"," to js"));
console.log(hello.split(' '));
console.log(hello.charAt(4));
console.log(hello.indexOf('w'));
console.log(hello.slice(4 , 11));
console.log(hello.toUpperCase());
console.log(hello.match('123'));
console.log(hello = hello.replace('123','hi'));
console.log(hello.search('to'));
console.log(hello.trim());
console.log(hello.substring(3 , 8));
console.log(hello.substr(3 ,8));
console.log(hello.replace("Js","JavaScript"));
console.log(hello.replace(/Js/i,"JavaScript"));
console.log(hello.replace(/js/g,"JavaScript"));// all replace

function sum2(a,b){
    return a + b;
}
console.log(sum2(2,3));




















// TYPE CONVERSION

let numb = 3;
let another = '4';
let sum3 = numb + another;
console.log(sum3);
console.log("foo"+ + "bar");
console.log(12 / '6');
console.log(true == "true");
console.log([1] > null);
console.log(["x"] == "x");
console.log(+"123");
console.log(+"123");













// objects

const course ={
    lecture : 10,
    classes : 5,
    title : "javascript",
    enroll(){
        console.log("welcome to javascript");
    }
};

course.enroll();
console.log(course);
course.price = 100;

// factory function 
function createCourse(){
    return{
        lecture : 10,
        classes : 5,
        title : "javascript",
        enroll(){
            console.log("welcome to javascript");
        }
    }
}

const course_1 = createCourse();
course_1.enroll();
console.log(course_1);

// constructor 
function courses(){
    this.title = "javascript";
    this.enroll = function(){
        console.log("welcome to javascript");
    }
}

const course_2 = new courses();
console.log(course_2);
delete course_2.title;
console.log(course_2);
console.log(course_2.constructor);
console.log(course_1);


const course_3 = { ...course};          // rest operator
course_3.title = "c++";
console.log(course_3);

const course_4 = Object.assign({},course)
course_4.title = "java";
console.log(course_4);

console.log(course);









// OBJECTS
const product = {
    itemName : "flower",
    price : 50,
    discount : 20,
    itemCode : 'f40'
};

function createProduct(name,price,discount,itemCode){
    return {
        itemName : name,
        price : price,
        discount : discount,
        itemCode : itemCode
    }
}

function Product(name,price,discount,itemCode){
    this.itemName = name;
    this.price = price;
    this.discount = discount;
    this.itemCode = itemCode;
    this.discountValue = function(){
        return this.price = discount/100;
    }
}

const football = createProduct("football",100,20,"F40");
console.log(football);

const bat = new Product("bat",50,5,"B10");
console.log(bat);




















// CLASSES

class Product2 {
    constructor(name, price, discount){
        this.name = name;
        this.price = price;
        this.discount = discount
    }
    get getDiscount(){
        return this.discount;
    }
    set setDiscount(value){
        this.discount = value;
    }
    calDiscount() {
         return this.price * this.discount / 100;
     }
     getItemName(){
        return this.name + " in the product";
     }
}

const pencil = new Product2("pencil",20,5);
console.log(pencil.getDiscount);
console.log(pencil.setDiscount=5);
console.log(pencil.calDiscount());
console.log(pencil);
 
class Furniture extends Product2{
    constructor(name,price,discount){
        super(name,price,discount);
    }
    getItemName(){
        console.log(super.getItemName());
        return this.name + " in the furniture";
     }
}

let pen = new Furniture("chair",200,40);
console.log(pen);
console.log(pen.getItemName());


















// ARRAYS

const num = [1,2,3,4,5,6,7,8,9];
const names = new Array("Ram","Sham","Ravan","Sita");

num.push(10);
num.unshift(0);
console.log(num);
 
num.pop();
num.shift();
console.log(num);

console.log(num.length);
console.log(num.indexOf(5));
console.log(names.lastIndexOf("Ram"));
console.log(names.includes("Sita"));
console.log(names.splice(2,1));
console.log(names.slice(2));
console.log(names.concat("Lucky"));
console.log(names);

let channels = [{
    name : "CartoonN",
    subs : 20000
},{
    name : "ZeeTv",
    subs : 50000
},{
    name : "SonyTv",
    subs : 10000
}];
// console.log(channels.find((element) =>{
//      return element.subs == 10000
// }));
console.log(channels.find(element => element.subs == 10000));

let name1 = ['aman','neha'];
let name2 = ['sita','ram'];
let name3 = [...name1,...name2];
console.log(name3);

name3.forEach((element,index) => console.log(element,index));
 

let student = ['s','h','a','m'];
student = student.join('_');
console.log(student);
student = student.split('_');
console.log(student);

console.log(channels.filter(channel => channel.subs >= 20000));
console.log(channels.map(channel => channel.subs >= 20000));

const characters = [{
    name : 'Ram',
    height : 170,
    mass : 65,
    eyes : 'brown',
    gender : 'male'
},{
    name : 'Sham',
    height : 175,
    mass : 60,
    eyes : 'black',
    gender : 'male'
},{
    name : 'Sita',
    height : 150,
    mass : 50,
    eyes : 'blue',
    gender : 'female'
},{
    name : 'Sara',
    height : 155,
    mass : 55,
    eyes : 'grey',
    gender : 'female'
}];

console.log(characters.map(ch => ch.name));

console.log(characters.map(ch => { 
    return{
        name : ch.name,
        height : ch.height
    }
}));

console.log(characters.reduce((prevh,currh) => {
    return prevh + currh.height
},0));

console.log(characters.filter(ch => ch.mass >60));

console.log(characters.filter(ch => ch.gender == 'male'));

console.log(characters.sort((ch1,ch2) =>{ 
    if(ch1.name < ch2.name){
        return -1;
    }
    if(ch1.name > ch2.name){
        return 1;
    }
    return 0;
}));

console.log(characters.sort((ch1,ch2) =>{ 
    if(ch1.gender < ch2.gender){
        return -1;
    }
    if(ch1.gender > ch2.gender){
        return 1;
    }
    return 0;
}))

console.log(characters.every(element => element.mass > 60));

console.log(characters.every(element => element.eyes == 'grey'));

console.log(characters.some(element => element.gender == 'male'));

console.log(characters.some(element => element.height > 160));


















// SCOPE

var i = 10; // global
let j = 10; // block
if(true){
    var i = 20;
    let j = 20;
    console.log(i);
    console.log(j);
}
console.log(i);
console.log(j);

var count = 0;
function increement() {
    this.count++;
    console.log(this)
}

increement();
increement();
increement();

function Car(name) {
    this.name = name;
    console.log(this.name + ' has started');
}
 
let swift = new Car('swift');

//exercise

let square = {
    side : 2,
    get area(){
        return this.side * this.side;
    }
}
console.log(square.area);

function strconcat(separator, ...strings){
    let ret = '';
    strings.forEach((string, i) => {
        if (i == strings.length - 1){
            ret += string;
        }
        else {
            ret += string + separator;
        }
    })
    return ret;
}
console.log(strconcat('_','ram','sham','radha'));












// Array/Object Destructuring

let [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(first + '\n' + second + '\n' + third + '\n' +other);

const personOne = {
    name:'shri',
    age:'21'
}
const personTwo = Object.freeze( {          // wont allow to change even object
    name: 'ram'
})

let {name:myname, age, gender='male'} = personOne;
console.log(myname, age, gender);

const personThree = {...personOne, ...personTwo};       // override name by persontwo
console.Table(personThree);
console.time('hello');
console.timeEnd('hello');

// floating point arithmetic cause some errors like 0.1 + 0.2 will give 0.33334

















// OTHER TERMINOLOGY

// 1. Nullish Coalescing : check for undefined and null values (allow '' and 0)
function check(name, age){
    name = name ?? "no Name";           // try ||
    age = age ?? 21;
    console.log(name, age);
}
check("shri", 21);
check(undefined, undefined);
check(null, null);
check("", 0);


// 2. Styling console log
console.log("%c hello this is %c insane", "font-weight: bold; color: green; font-size:31px", "color:blue; font-size:31px");


// 3. Optional Chaining : check if exists and proceed else return undefined and not error
function printMe(person){
    console.log(person?.name, person?.age);
}
printMe({name:"shri",age: 21});
printMe({age: 21});
printMe({name:"shri"});
