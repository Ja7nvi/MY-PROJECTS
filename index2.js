// Learn What Matters ✅
// {"-" for basic topic & "--" for gamechanger topics}

// -word vs keyword
// -var,let & const
//--the difference between var,let & const
//--Window Object
//--Browser context api
//--stack
//--heap memory
//--executive context
//--lexical Enviroment
//-hoisting
//-types in js
//--how to copy referance values
//-conditionals
//-if else else if
//--truthy vs falsey
//--switch

// 1) word vs keyword✅
//  which has no meaning in  js is called a word. ex.chach = word
// which has a meaning in js is called keyword ex.for,forEach = keyword

// 2) Var const let✅
// variables and constance
// var = u can change the value 
// const= u can't change the value
// ex.
// var a = "janvi "
// var b = "pratik "
// console.log(a + "weds" + b)

// 3) hoisting {where u can use the variable before making}✅
// [variables and functions are hoisted which means there declararation is movesd on the top of the code]
// var = a; { declaration }[this line move to the top]
// console.log(a)[this will show undefined]
// var a = 12; //this line convert into 
// a = 12; { intialization }

// differance between the undefined and not defiend
// undefined means which has a existance but the is not defined ex. var a=;
//not defined means which has no existance 

//Types in js✅
//primitive & referance = [],{},().
// aisi koi bhi value jiska copy karne par real copy nhi hota, balki us me value ka referance pass hojata hai ,use hum referance value kahate hai , aur jiska copy karne me par real copy nhii ho jaaye wo value premetive type value  hoti hai.
// for ex. 
// var a = [1, 2]
// var b = [...a];
// b.pop()

//conditionals
//if else else-if

//loops{use to repeate the things}✅
//for,while
// for (var i = 25; i < 51; i++) {
//     console.log(i)
// }
// var a = 12
// while (a < 20) {
//     a++;
// }


//fuctions={pure code ko name dena}✅
//fuction ka mtlb ap kutch code ko dekhkar koi name de skte ho.baad me aap use use kr skte ho  with that name multiple times.

//function mainely has 3 work
// 1) jab aapka code aap turant nhi chalana chahte future me chalana chahte ho
//ex console.log("khna khao")(insted of making this take this into the fuction.)
// function abc() {
//     console.log("khna khao")
// } //but this code will not work until u would not call it
// abc()
// 2) jab apka code aap reuse karna chahte ho
//ex simply call the function with its name
// 3) jab aap code chalama chahte ho har baar with different data
//arguments=real value jo hm dete hai ducchalate wkt.
//paramiters=variables jisme value store hotii hai arguments wali
//ex 
// function abcd(a, b, c, f) {
//     console.log(a, b, c, f)

// }
// abcd(1, 3, 5, 6);

//arays= group of values✅
//push pull shift unshift✅
// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.push(9) //for adding a value in last
// arr.pop() //for removing a value in last
// arr.unshift(9) //for adding a value in the starting
// arr.shift(9) //for removing a value in starting
// arr.spalice(2,1) //for removing a value in the middle

//objects✅

//taking about only one person
//blank obj{}
// exaple {filled obj}
// var arr = {
//         name: "janvi",
//         city: "amt",
//         age: 16,
//     }
// arr.name = "pratik"(that's how we can access the property and change it.)
//for accecing arr.name
// Prop and methods
// name, age, city are properties
// idk: function() {}(its called method object ke ander agr function ho use hm method kahate hai)





// Javascript Versions +✅
// javascript has 2 versions:
// 1] Es - 5(old version) We use Var.✅
// 2]Var = Var is function scope✅
// example:
// function abcd() {
//     for (var a = 1; a < 12; a++) {

//         console.log(a)[it will print 1to 11 bcoz its bracels scope.]
//     }
//     // console.log(a)[it will print 1to 12 bcoz its function scope & we can use this inside of parant anywhere
// abcd()
// 3] var add itself into the window object feature of browser.
//what is window : window gives features to js language.bcoz in js we can use those features which is not available in js language even we can use bcoz of windows.✅

// 1] Es - 6(New Version) We use Let & const✅
// 2] Let and & const  are bracels scope.✅
// example
// function abcd() {
//     for (let a = 1; a < 12; a++) {
// console.log(a)} [it's bracles scope thats why it will print 1 to 11 ]
//  console.log(a)[ it will give u an error ]
// }
// abcd()
// 3] let and const don't and themself into the window object.✅


// What is the heap memory ✅
// all the variable and functions or data we created have to be store somewhere for that we use heap memory.
// for example
// Q.1 1+3+4+5+7+9
//1+3+4+5+7+9=29 [human calculation]
// 1 + 2 = 3;
// 3 + 4 = 7(so intemidiate data should store somewhere for that we use heap memory.)

//  WHat is an Excution Context✅
// excution cotext is a vertual container where the function is excuted and created whenever the function is called.it containes things like vaiables ,functions and lexical enviroment.

//What is  a Lexical Enviroment✅
//it's a chart of the particular function u could use or not & it contains scope & scopechain.

//How to copy referace value from array✅
// [sprade oparates(...)]
// var arr = [1, 2, 3, 4, 5, 6]
// var b = [...arr]
// b.pop() {.pop use to remove 1 character from last }
// console.log(b)

// How to copy referance value from Object✅
// var a = {
//     name: "janvi ",
//     class: "ICTSM ",
//     Age: 16
// }
// var b = {...a }
// b.age = 15(to add)
// console.log(b)


//What is Truthy and Falsey✅
// In js data mainely belong to those two categories.
// 1] Truthy: Beside of falsy all value comes in truthy.
// 2] falsy: all negative values like "0", Null, undefined, document.all, false, NaN comes in falsy.

// lets Learn Loops ✅
//1] forEach loop [it's only use in array.]
// var a = [1, 2, 3, 4, 5, 6]
// a.forEach(function(val) {
//     console.log(val + 1)
// })
// console.log(a)
// Note: It will not change your actual / main array bcoz when u change, u take input from array so it 's  just a copy of that array

//forin[it's only for objects]✅
// var aa = {
//         name: "janvi",
//         age: 16,
//         city: "amravati "
//     }
//for (var key in aa) {
//console.log(aa[key]) //[ //for printing the ans which is janvi,16 and amravati.]
//console.log(key) //[for printing name,age,city.]
//}


//dowhile[its  use when even if ur condition is wrong it will print.]✅
// forexaple:
// var a = 12;
// do {
//     console.log("hey")
//     a++
// }
// while (a < 13)
//even if its condition wrong it will print once.

//Call back Function✅
//It's normal function after completed ur code u could add function that after complete and run this code.
// setTimeout(function() {
//     console.log("hellow Eveyone") //Unit is always in the milli second
// }, 2000)

// What is mean by First class function✅
//In js there is a concept names function means u could use a function as an a value.
// forexample 
// a = 3
// function abcd(a) {
//     a()
// }

// // abcd(function() {
// //     console.log("hello")
// // })

//How arrays are madebehind the scean✅
// var arr = [1, 2, 3, 4, 5, 6]
// console.log(arr)
// 0: 1;
// 1: 2;
// 2: 3;

//How to delete object prof:✅
// var a = {
//     name: "janvi",
//     Age: 16,
//     city: "amravati"

// }
// delete a.Age
// console.log(a)
// console.log(a)
// console.log(a)


//Higher order function✅
// function abcd() {}
// abcd(function() {})
//aise fnc jo accept kre ek or function ya fir vo return krde ek or function ko

//constructor function✅
//normal fnc jisme this ka ismalho & aap fnc ko call krte wkt New keyword ka use kre

// function abcd(color) {
//     this.name = "Janvi",
//         this.Age = color,
//         this.city = "Amravati"
// }
// var a = new abcd("red")
// var b = new abcd("green")
// var c = new abcd("blue ")
// u can use this// function when u need a elements with the same properarty there we can use instanceof.

//first class functions✅
// var abcd = function() {}

//new keyword✅
//jb bhi new hai hmesh ekblank object apne man me bna lo

// function abcd() {
//     this.age = 12
// }
// new abcd()

//iife✅
//Immedietely involked function expression.
//iifi hai function ko turant chalana ki kala,is tareke se ki hm log koi private variable bana payeu
// var ans = (function() {
//     var a = 12;
//     return {
//         getter: function() {
//             console.log(a)
//         },
//         setter: function(val) {
//             a = val;
//         }
//     }


// })()
// val = 23

//Prototype✅
//Js by deafault adds a property called[{prototype}] to every object, so if u ever see any obj u can blindly belif that obj contains prototype ,sonow,what does it contains?
// var obj = {
//         name: "janvi "
//     }
// when u go to console thenwhen u want to know that obj actually contain name or not so u could use bydefault propery which is obj.hasOwnPropery(name)

// when u make array and if u want to the lenght of it u use arr.lenght but did we made this the ans is no but still how ?
// the ans is, many properties and methods are already available to use built by js creators inside prototype of every obj.


//Prototype Inheritance✅(means passing parats features  or properties to their childran to do same thinf in js with the help of prototype)
// var human = {
//     name: "janvi",
//     canFly: false,
//     canTalk: true,
//     willdie: true

// }
// var sheriyanStudent = {
//     solve: true,
//     crateModernWebsite: true
// }

//This line will make the magic
// sheriyanStudent.__proto__ = human;

//this ✅
//jb bhi koi cheez{} brascles ke ander nhi hoti use hm global scope khte hai
// console.log(this) gives u window
// function abcd() {
//     // console.log(this) gives u window
// }
// method = ek function jo obj ke ander ho, usemethod kehtte hai.
// var obj = {
//     baatKr: function() {
//         console.log(this)
//     }
// }
//method gives u object
//what is the value of this in eventlisters
// var button = document.querySelector("button");
// button.addEventListener("click", function() {
//         this.style.color = "pink";
//     })
//jobhi addEventListers ke phle ho vo this ki value hogi

// Call apply Bind ✅=agr aply this ki value window na hokar or kutch chahiye where u can use it.

//call ✅=> agr tmhare pass koi function hai or koi object or fumhe function chalna hai or by deafaut jo this ki value window hai use window hai use window naa rkhake kar point krwana hai kisi object ki taraf
// function abcd(val, val2) {
//     console.log(this, val, val2)
// }
// var obj = { age: 23 }
// abcd.call(obj, 1, 2)

//apply ✅
// function abcd(val, val2) {
//     console.log(this, val, val2)
// }
// var obj = { age: 23 }
// abcd.apply(obj, [1, 2])

//bind✅
// function abcd(val, val2) {
//     console.log(this, val, val2)
// }
// var obj = { age: 23 }
// var a = abcd.bind(obj, [1, 2]);
// a()

//pure function is ant fnc which has these 2 features

//1] it should always return same o/p for same input.
//2] it will never change/update the value of a global variable.

// function abcd(a, b) {
//     return a * b
// }
// var ans1 = abcd(1, 2)
// var ans2 = abcd(1, 2)

// Impure function
// function abcd(val) {
//     return Math.random() * val
// }
// var a = abcd(2)
// var b = abcd(2)


//Dom Learn what matters
//what is DOM[document object model(frontent js)]
//Pillars of DOM
//1)selection of an element
// var a = document.querySelector("h1")
// console.log(a)
//2)Changing HTML
// var a = document.querySelector("h1")
// a.innerHTML = "Changed HTML"
//3)CHanging Css
// var a = document.querySelector("h1")
// a.style.color = "pink"
// a.style.backgroundColor = "gray"
// a.style.fontSize = "13vw"
//4)Event Listner
// var a = document.querySelector("h1")
// a.addEventListener("click", function() {
//     a.innerHTML = "I M Hacker"
//     a.style.color = "yellow"
//     a.style.backgroundColor = "black"

// })


//Simple example of bulb or whatever clicking on the same button
// var a = document.querySelector("#bulb")
// var btn = document.querySelector("button")
// var flag = 0
// btn.addEventListener("click", function() {
//     if (flag == 0) {
//         a.style.backgroundColor = "yellow"
//         flag = 1
//     } else {
//         bulb.style.backgroundColor = "transparent"
//         flag = 0
//     }
// })


// selecting multiple elements at a time
// var h = document.querySelectorAll("h1")
// h.forEach(function(elem) {
//     console.log(elem)
// })

//.textcontent =use for u can write anything("<h1>Hello</h1>")