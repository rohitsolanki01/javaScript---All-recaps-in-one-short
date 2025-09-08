// `Data Types in JavaScript`

// const name = 'rohit'
// let age1 = 20 
// let ifLearnningJs= true
// let address = null
// let phone;



// console.log(name , typeof name);
// console.log(age1 , typeof age);
// console.log(ifLearnningJs , typeof ifLearnningJs);
// console.log(address , typeof address);
// console.log(phone , typeof phone);



// operators in js an expression



// let a = 10 
//  let  b = 30

//  console.log(a + b)
//  console.log(a - b)
//  console.log(a * b)
//  console.log(a / b)
//  console.log(a % b)
//  console.log(a ** b);




// console.log(10 == "10"); //its return true because it only checks value not data type
// console.log(10 === "10"); //its return false because it checks value and data type both

// console.log(20 > 5 && 5 < 10); //true

//  console.log(true || false) // true
//  console.log(!true) // false


// // conditional statements


// // if statement 


// let age = 18

// if(age >=18) {
//     console.log("you are eligible for vote");
// }
// else {
//     console.log("you are not eligible for vote");
// }






// //if else if statement

// let marks = 85

// if(marks >= 90){
//     console.log("A+ grade");
// }
// else if(marks >=80) {
//     console.log("A grade");
// }
// else if(marks >=70){
//     console.log("B+ grade");
// }
// else if(marks >=60){
//     console.log("B grade");
// }
// else {
//     console.log("fail");
// }



// //ternary operator

// let isMember = false

// let fees = isMember ? 100 : 400;
// console.log(fees);



// // for loop


// for(let i=1; i<=10 ; i++){
//     console.log(i);
// }


// //while loop

// let num = 1;
// while (num <= 10) {
//     console.log(`5 x ${num} = ${5 * num}`);
//     num++;
// }


// // // //for of loop

// // // let colors = ['red', 'green', 'blue', 'yellow']

// // // for(let color of colors){
// // //     console.log(color);
// // // }


// // // //for in  loop

// // // let person = {
// // //     name : 'rohit',
// // //     age : 20,
// // //     city : 'jaipur',
// // //     isStudent : true
// // // }

// // // for(let key in person){
// // //     console.log(key ," : ", person[key]);
// // // }




// // // const cars = {
// // //     brand: 'Toyota',
// // //     model: 'Camry',
// // //     year: 2020,
// // //     color: 'blue'
// // // }


// // // //funtion in js 

// // // function greet(name) {
// // //     return `Hello, ${name}! Welcome to JavaScript programming.`;
// // // }


// // // console.log(greet('Rohit'));




// // // const addNumber = (a,b) => {
// // //     return a + b;
// // // }

// // // let result = addNumber(20,50);

// // // console.log(result);


// // // const square = (n) => {
// // //     return n  * n;
// // // }

// // // console.log(square(5));

// // // const isEven = (num) => {
// // //     const result = num % 2 === 0 ? "Even" : "Odd";
// // //     return result;
// // // }

// // // console.log(isEven(5));


// // // Array in javaScript



// // // let fruits = ["banana","kivi","orange"];



// // // fruits.push("Apple") // add element at end


// // // fruits.pop(); //Removes element ar end


// // // fruits.unshift("pineapple")//add elemmet at first

// // // fruits.shift() //removes elemment for first 


// // // console.log(fruits.length); //return a size of array




// // //example of foreach its does't return a new array
// // // fruits.forEach((fruit) => console.log(fruit))


// // //example of map its return  a new array with modifed values 


// // // let fruitsWithUpperCase = fruits.map((fruit) => fruit.toUpperCase())



// // // console.log(typeof fruitsWithUpperCase);


// // // let logLengthOfChar = fruits.filter((fruit) =>fruit.length > 4 )

// // // console.log(logLengthOfChar);


// // // example of the reduce


// // // let totalLength = fruits.reduce( (sum,fruit) => sum + fruit.length,0);

// // // console.log(totalLength);


// // const fruits = ["apple", "banana", "kiwi", "orange", "mango"];

// // // 1. forEach
// // fruits.forEach(fruit => {
// //     console.log(`i love ${fruit}`);
    
// // });

// // // 2. map
// // const upperFruits = fruits.map((fruit) => fruit.toUpperCase());
// // console.log(upperFruits);

// // // 3. filter
// // const longFruits = fruits.filter((fruit) => fruit.length >4);
// // console.log(longFruits);

// // // 4. reduce
// // const totalChars = fruits.reduce((sum,fruit) => sum + fruit.length,0);
// // console.log(totalChars);


// // Example of the Object 


// // const car = {
// //     brand: "Toyota",
// //     model: "Camry",
// //     year: 2020,
// //     color: "blue"
// // };


// // console.log(car.brand);
// // console.log(car.model);



// // console.log(car["color"]); //carm way but very use fully when id is dynamic



// // //how to modify the value

// // car.color = "Black"
// // car.year = 2025

// // console.log( typeof car);


// // console.log(Object.keys(car));
// // console.log(Object.values(car));

// // console.log(Object.entries(car));





// // let student = {
// //     name : "Rohit",
// //     age : "20",
// //     grade : "A+"
// // }



// // console.log(Object.keys(student));
// // console.log(Object.values(student));



// // student.isEnrolled = true;
// // console.log(student);


// // // for(let key in student){
// // //     console.log(key , ":" , student[key]);
    
// // // }
// // let makingLoop = Object.entries(student);
// // // console.log(makingLoop);

// // for(let [key,val] of makingLoop){
// //     console.log(key , ":" , val);
    
// // }




// // Example of the Array of Object



// // let student = [
// //     {name : "rohit" , age:"20" , grade : "A"},
// //     {name : "topper" , age:"19" , grade:"A+"},
// //     {name:"bhargav" , age: "20" , grade:"A"}
// // ];



// // // Acessing single prpertiy

// // console.log(student[0].name); //rohit
// // console.log(student[1].name); //topper



// // //loop in Array of obeject beacuse it s a array we can use for of loop


// // for(let st of student){  //first making loop in array to get all object 
// //     console.log(st);
// //     for(let key in st){ //second make a for in loop to get a key and value of the object
// //         console.log(key , ":" , st[key]);
// //     }
// // }


// // fro the prectice only 


// let books = [
//     {title:"Phycholloy of money" , auther: "roboto" , price:300},
//     {title:"Rich dada poor dada" , auther:"kiyasaki" , price:600},
// ]

// let titleOfBook = books.map( (b) => b.title);

// console.log(titleOfBook);


// let filterBook = books.filter((b) => b.price > 500 );
// console.log(filterBook);


// let findBook = books.find( (b) => b.auther === "roboto")
// console.log(findBook);


// let totolPrice = books.reduce((sum,b) => sum + b.price ,0);
// console.log(totolPrice);


//some advance topic of javascript


// function fatchData (callback){
//     console.log("feaching data");
//     setTimeout( () => {
//         console.log("data is featched");
//         callback();
//     },2000)
    
// }



// function processingData () {
//     console.log("Processing data");
    
// }

// fatchData(processingData)





//promiss in javasript



// let myPromiss = new Promise((resolve,reject) => {
//     let isSuccess = true;

//     setTimeout(() => {
//         if(isSuccess){
//             resolve("Task is completed")
//         }
//         else{
//             reject("Task is not Completed")
//         }
//     },2000)
// })

// myPromiss.then( (res) => {
//     console.log(res)
// }).catch( (e) => {
//     console.log(e);
    
// })


// async / await in javascript



// function getData(){
//     return new Promise(resolve => {
//         setTimeout( () => resolve("Data received"),2000)
//     })
// }


// async function fatchdata() {
//     console.log("Featching");
//     let result = await getData();
//    console.log(result);
//     console.log("!Done");
    
// }

// fatchdata()


// function orderFood(){
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Food is ready!!"),2000)
//     })  
// }

// async function getOrder() {
//     console.log("Food is preperring");
//     let result = await orderFood();
//     console.log(result);
//     console.log("Completed");
// }

// getOrder()

//some real wor example uing api 



// async function getUserData() {
//     try {
//         console.log("Fetching data [async/await]");

//         let res = await fetch("https://api.api-ninjas.com/v1/randomuser", {
//             headers: { "X-Api-Key": "YOUR_API_KEY_HERE" } // API Ninjas requires an API key
//         });

//         let user = await res.json();
//         console.log("This is random user:", user);

//     } catch (error) {
//         console.log("Error in data fetching:", error);
//     }
// }

// getUserData();





// async function getApiHit(){
//     try{
//         console.log("Fetching data from api");
        
//         let res = await fetch("https://randomuser.me/api/");

//         let users = await res.json(); 

//         users.map((user) => {
//             console.log(`${user.name} , hello ${user.email}`);
//         })

//     }catch(error){ 
//         console.log("Error in the code:", error);
//     }
// }

// getApiHit();

