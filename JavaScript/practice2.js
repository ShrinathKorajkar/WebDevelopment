/*  VARIABLES
    const = constant, let = blockScope, var = globalScope ;

    DATATYPES
    primitivr : undefined, null, number, string, boolean, symbol
    reference : Arrays, objects
*/




// DATE AND TIME
let now = new Date(); // we can give explicit date also
console.log(now);
console.log("Time : ",now.getTime());
console.log("date : ",now.getDate());
console.log("month : ",now.getMonth());
console.log("day : ",now.getDay());
console.log("year : ",now.getFullYear());
console.log("hours : ",now.getHours());
console.log("minutes : ",now.getMinutes());
console.log("seconds : ",now.getSeconds());
now.setHours(3);








// LOCAL STORAGE AND SESSION STORAGE
let myArr = ["Shri","Prc","Teju","Rutika"];
localStorage.setItem('first', JSON.stringify(myArr)); // store as key value
localStorage.setItem('second', 'hello');
let names2 = JSON.parse(localStorage.getItem('first'));
console.log(names2);
localStorage.removeItem('second');
localStorage.clear(); // clear entire storage
sessionStorage.setItem('first', 'I am iron man');








// MATH
console.log(Math.random()); // between 0 and 1
console.log(100*Math.random()); // between 0 and 100
console.log(Math.ceil(50 + (100-50)*Math.random())); // between 50 and 100








// JSON 
let jsonObj = {
    name : 'shri',
    age : 21,
    friend : 'Prc'
};
console.log(jsonObj);

let myJsonStr = JSON.stringify(jsonObj);
myJsonStr = myJsonStr.replace('shri','Shri');
console.log(myJsonStr);

let newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);








// TIMEOUTS
// setTimeout() --> Allows us to run the function once after the interval of time
// setInterval() --> Allows us to run the function repeatedly after the interval of time
function greet(){
    console.log("hello phoenix");
}
setTimeout(greet, 3000);
let timeout = setInterval(greet, 3000);
clearTimeout(timeout);








// CALLBACK FUNC
function hello2(str, callback) {
    setTimeout(() => {
        console.log(str);
        callback();
    }, 2000);
}
function display() {
    console.log("operation successful");
}
hello2('shri',display);








// PROMISE
const students = [
    {name : 'rohan',age : 21},
    {name : 'rahul',age : 23}
];
function enroll(student) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            students.push(student);
            console.log("enrolled");
            const flag = false;
            if(!flag){
                resolve();
            }
            else{
                reject();
            }
        },1000);
    });
}
function getStudents() {
    setTimeout(() =>{
        let str = "";
        students.forEach(student => {
            str += " " + student.name;
        })
        console.log(str);
    },2000);
}
let newStudent = {name : 'shri', age : 21};
enroll(newStudent).then(getStudents).catch(() => {
    console.log("some error occured");
});









// ASYNC AND AWAIT 
async function myfunc() {
    console.log("inside my function");
    // const response = await fetch("https://api.github.com/users");
    const response = await fetch("http://127.0.0.1:5500/WebD/JavaScript/hello.json");
    const users = await response.json(); // response.json will return promise
    return users;
}
let res = myfunc();
res.then(data => console.log(data));









// AJAX NOT USED MUCH (asynchronous java script xml)
let ajaxbtn = document.getElementById('ajbtn');
ajaxbtn.addEventListener('click',buttonHandler);
function buttonHandler() {
    console.log("clicked ajax button");
    const xhr = new XMLHttpRequest();
    // xhr.open('GET', 'http://jsonplaceholder.typicode.com/todos/1',true); 
    xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create',true); // async for true
    xhr.getResponseHeader('Content-Type','application/json');
    xhr.onprogress = () => {
        console.log("on progress");
    }
    xhr.onreadystatechange = () => {
        console.log("on readystatechange");
    }
    // on response
    xhr.onload = () => {
        if (this.status === 200) {
            console.log(this.responseText); // JSON.parse if json file
        }
        else{
            console.log("some error occurred");g
        }
    }
    const params = {"name":"askdfjalsdkf","salary":"22342","age":"33"}
    xhr.send(params);
}









// FETCH 
let fetchbtn = document.getElementById("ftcbtn");
function getData() {
    url = "http://127.0.0.1:5500/WebD/JavaScript/hello.json";
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    }).catch((error) => {
        console.log(error);
    })
}
function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create";
    data = '{"name":"shri","salary":"22342","age":"32"}';
    header = { 
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body : data
    };
    fetch(url, header).then(response => response.json()).then(data => console.log(data)).catch(error =>console.log(error));
}
fetchbtn.addEventListener('click',() => {
    getData();
    // postData();  
})









// REGULAR EXPRESSION
/*
exec() --> return array of info or null 
test() --> return true if regex present in str else false ( false for g)
match() --> return array of results or null with g else like exec
search() --> return index of first match or null 
replace() --> return new replaced string with all replacement if g else only first is replaced
*/
let re = /Shri/; // regex literal 
re = /Shri/g; // global to use multiple exec 
re = /Shri/i; // case insensitive
let str = "hello shri i am Shri shri loving this Shri"
console.log(re);
console.log(re.source);

console.log(re.exec(str)); 
console.log(re.exec(str));
console.log(re.test(str));
console.log(str.match(re));
console.log(str.search(re));
console.log(str.replace(re, 'shri'));

re = /^Shri/;
re = /Shri$/;
re = /S..i/;
re = /S*ri/;
re = /Shh?ri/;
re = /Sh+ri/;
re = /S[hr]ri/;
re = /S[a-zA-Z0-9]ri/;
re = /S[^0-9]ri/;
re = /Sh{2}ri/;
re = /Sh{2,5}ri/;
re = /S(h){2,3}ri/;
re = /Sh(?=r)ri/;   // Assertion after h r should come
re = /Sh(?!i)ri/;   // I should not come
re = /Shr\w+/;
re = /Shr\d/;
re = /Shri\s/;      // we can use D, W, S for negation
re = /Shri\*/;      // escaping *
str = "Shri is Shriii Shhri Shhhri";
if (re.test(str)) {
    console.log(re.source, "is present");
}else{
    console.log(re.source,"is not present");
}










// ITERATORS AND GENERATORS
function iterator(values){
    let index = 0 ;
    return{
        next: () => {
            if(index < values.length){
                return {
                    value: values[index++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
const testarr = ["Apples", "Grapes"];
const fruits2 = iterator(testarr);
console.log(fruits2.next().value);
console.log(fruits2.next().value);
console.log(fruits2.next().value);

function* generator(){
    let i = 0;
    while(true){
        yield i++;
    }
}
const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);









// TRY CATCH 
/*
try{}catch(error){console.log(error.name, error.message);}
*/









// SYMBOLS, SETS AND MAPS
const sym1 = Symbol('my id')
const sym2 = Symbol('my id')
console.log(sym1 == sym2);

const mySet = new Set(); // we can use any type of values in constructor
mySet.add("hello");
mySet.add("hello");
mySet.add("shri");
console.log(mySet);
mySet.has("shri");
mySet.delete("hello");

const myMap = new Map(); // we can use values in constructor
const key1 = 'hey', key2 = {}, key3 = function () {};
myMap.set(key1, 'buddy');
myMap.set(key2, 'this is a blank ibj');
myMap.set(key3, 'this is a function');
console.log(myMap);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.get(key1));
console.log(Array.from(myMap.values()));
for(let [key, value] of myMap) {
    console.log(key, value);
}
