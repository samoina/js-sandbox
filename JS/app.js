// // //Log to console
// // // console.log("Hello World");
// // // console.log(124)
// // // console.log([1, 2, 3, 4, 6])
// // // console.clear();
// // // console.warn("This is a warning!");

// // // console.time("Hello");
// // // console.log("Hellow World");
// // // console.log("Hellow World");
// // // console.log("Hellow World");
// // // console.log("Hellow World");
// // // console.log("Hellow World");
// // // console.log("Hellow World");
// // // console.log("Hellow World");
// // // console.timeEnd("Hello");

// // //var, let , const
// // var name="kafwere";
// // console.log(name);
// // var firstName="kafwere";
// // console.log(firstName);
// // var firstName="SamSmith";
// // console.log(firstName);

// // //Init var - helpful when you have an if else loop, eg if something is tru, show this
// // var greeting;
// // console.log(greeting);
// // greeting = "Hellow there"
// // console.log(greeting);

// // Primitive types

// //string

// // const firstName="John Doe";

// // console.log(typeof firstName);

// // let age=45;
// // console.log(typeof age);

// // let yearBirth="1945";
// // console.log(typeof yearBirth);

// // //Boolean
// // const hasKids = true;
// // console.log(typeof hasKids);

// // //undefined
// // let test;

// // //Reference Types
// // //array
// // const hobbies=["movies", "music"]

// // //object literal
// // const address = {
// //   city: "Kanairo",
// //   county: "Nairobi"
// // }

// // //date
// // const today= new Date();
// // console.log(today);
// // console.log(typeof today);

// // let myNumber = 15;
// // let myDigit = 20;
// // let sum=myNumber + myDigit;
// // console.log(sum);

// // let fName = String("aswito");
// // let bool = Boolean("true");
// // let digit = Number(33);

// // const pi = 3.124;
// // let pi = 6.7;
// // console.log(pi);

// // let Jayden = {
// //   fName:"Jayden",
// //   age: 12,
// //   school: "Musa",
// //   food: "chapo"
// // }

// //Declare it to use it below
// let val;

// //Number to string
// val = 5; 
// val = String(4+4);

// //Bool to string
// val = String(true)

// //Date to String
// val = String (new Date)

// //Array to String
// val = String([6, 7, 8, 9]);

// //toString
// val = (5).toString;

// //Strings to Numbers
// val = Number("5");

// //Bool to Number
// val = Number(false);        //outputs 0 as a number and 0.00
// val = Number(true);         //outputs 1 as a number and 1.00
// val = Number("Hello");      //outputs NaN
// val = Number([1, 2, 3, 4]); //outputs NaN

// //Alternatively, use parseInt for whole numbers and parseFloat for # with dp
// val = parseInt("54.62");     //outputs 54 as a number and 54.00
// val = parseFloat("45.678")   //outputs 45.678 as a number then 45.68

// //output
// // console.log(total);    
// // console.log(typeof total);
// // console.log(val .length);
// // console.log(val .toFixed(2))


// //simple math with numbers
// // const num1 = 1000;
// // const num2 = 505;

// // let total; //This is to initialize a variable to use later

// //math
// // total = num1 + num2;
// // total = num1 - num2;
// // total = num1 / num2;
// // total = num1 * num2;
// // total = num1 % num2;

// //using Math Object (has a property(attribute) and methods (function) )
// // val = Math.PI;
// // val = Math.E;
// // val = Math.round(89.99);
// // val = Math.ceil(89.99);
// // val = Math.floor(89.99);
// // val = Math.min(89, 0.99, 234, 857, -34, 596);
// // val = Math.max(89, 0.99, 234, 857, -34, 596);
// // val = Math.abs(-98);
// // val = Math.pow(6, 3);
// // val = Math.random();
// // val = Math.random() * 100                 //For random numbers up to 100
// // val = Math.floor(Math.random() * 100)     //To get a whole number that is less than 100  

// // //output
// // console.log(val);

 //Exponential notation is a way of writing really large and small numbers with multiples of 10. so 25 is 2.5 * 10. 786 is 7.86 * 10 to power 2. 7.86 *10 * 10 = 786. Can also be written as 7.86e + 2 (where 2 represents 10 to the power of two)

//  let result = 98370923874.32.toExponential(); 

 //the output here will be 9.8370923874e + 10 where 10 is 10 to the power of 10

//  let result = 368947.22.toExponential(3);

//  //output should be 3.689e+5

// console.log(result);
// console.log(typeof result);

// //Strings
// const firstName = "Samoina";
// const secondName = "Kui";
// const age = 33;

// let jina;

// //Concat. Reminds me when you create a phone book or address book
// jina = firstName + secondName;
// jina = firstName + " " + secondName;  //Concat to add a space in between

// //Append. To join onto instead of override
// jina = "Kui";
// jina = "C-mone "

// jina += "Kui";

// jina = "Hello my name is" + " " + firstName + " " + secondName + " " + "and I love sushi";
// jina = "Habari, my name is " + firstName + " and I am " + age;

// //Escaping, when you have " " and do not want to mark it as a string you use the escape \
// jina = firstName + " said to me, \"She cute!!\" and then she said that she was only " + age;
// jina = "Hey! " + firstName + " \"You are amazing!\" ."


// //properties for strings 
// jina = firstName.length;   //.length is a property

// //concat as a method to concat something to it. note that concat as a method does not have the + sign.
// jina = firstName.concat(" ", secondName);

// console.log(jina);
//  let example = "pine";
//  let example2 = "apple";

//  let full = example.concat("apple");

// console.log(mfano);
// console.log(typeof mfano);

//Concat method from the LMS
// let const1 = "I am";                  //the variables
// let const2 = "so damn excited";

// let sentensi;                          

// sentensi = const1.concat(" ", const2).toUpperCase();      // concat the variables plus a space and convert to uppercase

// console.log(sentensi);        //output => I AM SO DAMN EXCITED

// let firstName;

// firstName = "zawanentonli";

// let val = firstName.charAt(0);      //output should be 't' becasue arrays and strings start counting from 0

//To get the last character of a string, considering that strings will change from time to time, use charAt, get the length of the variable and then subtract 1 as shown below:

// let example = firstName.charAt(firstName.length - 1)
// console.log(val);

//Methods can also take strings in their argument, declare a variable and then use the .search method to find a specific part of that string. Remember, if the argument passes a string, then it should be in "", i tried it without like ( tafuta.search(mawanentonli); and it brings an error. it should actually be tafuta.search("mawanentonli"); )

// let tafuta = "Please show me where \"mawanentonli\" is in this string";

// let val = tafuta.search("mawanentonli");

//the indexAt method returns the position of the first occurence of a substring

// let tafuta = "Please show me where \"mawanentonli\" is in this string";

// let val = tafuta.indexOf("t");

//the .slice string method can take multiple arguments. remember, arguments are the part of a method that is in parenthesis, and provide more information on what the method is supposed to do. the .slice method is like taking a slice of cake from the whole, cut it and take it to a new saucer. same thing with the method, extracts it and returns on a new string (Saucer)

let matunda = "papaya, melon, avocado";

// let val = matunda.slice(8, 13);
// let val = matunda.slice(-4);
// let vari = matunda.substring(8, 13);

// console.log(val);


//the substring method is similar to the slice method because they both do thing. but with the slice method, you can add a -ve value to count from the back as above.

//Assignement operators

// let faveNumber = 24;

// // faveNumber -= 12;          //12
// // faveNumber /= 12;          //2
// faveNumber += 12;             //36
// // faveNumber *= 3;              //72     


// let testNum = 4;
// testNum +=6;           //10
// testNum -=2;           //8
// testNum *=3;            //24
// testNum /= 4;             //6

//Comparison operators >, <, <=, <=, ===, ==, !-- while Boolean represents true or false

//.split is used to split a string into substrings and then return them as an array

// const str = "Hello there my name is Brad";
// let newStr = str.split(" ");      // using the space as a seperator

// const tags = "PPD, postpartum depression, maternal health, maternal MH matters";

// let newTags = tags.split(",");

//replace()
// const str = "Hello there my name is Brad";
// let newStr = str.replace("Brad", "Mulamwah");

//includes() returns as true if the search string appears as a substring of the result of convering the object to a string
// const str = "Hello there my name is Brad";
// let newStr = str.includes("name");

// console.log(newStr);

//Template Literals - often you will need to insert HTML from JS, so fetch sth thru Ajax and add a table with dynamic data, so you have to create a string with HTML then use data

// let myName = "Samoina";
// let age = 32;
// let job = "Software Developer";
// let city = "Brisbane";

//To do that without template strings, ES5
// html = "<ul><li>Name: " + myName + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: " + city + " </li></ul>";



// html = "<ol>" + 
//       "<li>Name: " + myName + "</li>" +
//       "<li>Age: " + age + "</li>" +
//       "<li>Job: " + job + "</li>" +
//       "<li>City: " + city + "</li>" +
//       "</ol>";

//but the above is kinda messy especially if you have lots of variables to add say in a table. so you can use a template literal/ template string. html = ``; the backticks tell JS that this is a template string, then use $ and { } for the variable plus code like you would in HTML

//Template literals

// html = `
//       <ul>
//       <li>Name: ${myName}</li>
//       <li>Age: ${age}</li>
//       <li>Job: ${job}</li>
//       <li>City: ${city}</li>
//       `;


// document.body.innerHTML = html;

//ARRAYS
//Arrays are list of things together. You can write them encompassed by [] or you can write a string then declare a new variable and call the .split method on the string to yield an array



let val; 

let numbers = [43, 56, 33, 23, 44, 36, 5];
let numbers2 = [101, 202, 303, 404, 505];

// //Get array length
// val = numbers.length;

// //Check if it is an array
// val = Array.isArray(numbers);

//Get a single value from an array
// val = numbers[2];

//Insert into an array and replace
// numbers[3] = 100;
// val = numbers[3];

//Find index of
val = numbers.indexOf(5);

//Mutating Arrays 
//.push adds the entry at the end
val = numbers.push(250);

//.unshift adds the entry at the front
val = numbers.unshift(1989);

//.shift mutates the array by removing the first element and returning it (so that the array is shorter in length)
val = numbers.shift();

//.pop removes an element from the end of the array, like popping champagne 
val = numbers.pop();


//. splice removes elements from an array and may insert new elements
val = numbers.splice(1, 3);

//.reverse mutates the array by reversing its elements in place.
val = numbers.reverse();

//You can actually concat arrays! i wouldn't have guessed, it returns an array, without needing a second method
let nuArray = numbers.concat(numbers2);
//output --> (9) [5, 36, 44, 43, 101, 202, 303, 404, 505]

//Ian suggested you may also use the + sign and include a comma to separate the last number of 1st array and the first number of 2nd array. But this returns a string, so I then used a .split method to return an array, forgot to add the separator (",") on .split method so it returned an array, but with a length of 1. 
val = (numbers + "," + numbers2).split(",");
//output(after i added the , in the parenthesis) --> (9) ['5', '36', '44', '43', '101', '202', '303', '404', '505']

// let leVal;

// leVal = Array.isArray(val);
// returns true, so this is an array
// I also want to check the length of the new array called val in the instance above. 
// console.log(val.length);

//SORTING AN ARRAY using .sort sorts an array in place and returns a reference to the same array. by default, it stores values as a string
let leVal;
let fruity;

fruity = ["zucchini", "apples", "papaya", "melon", "strawberries"];

// val = fruity.sort();
// console.log(fruity);
//(5) ['apples', 'melon', 'papaya', 'strawberries', 'zucchini']

//When you use .sort method on an array with numbers, it doesn't quite do what you expect it to, because:
// leVal = nuArray.sort();
//output --> (9) [101, 202, 303, 36, 404, 43, 44, 5, 505] it arranges the first digits only, since values are stored as a string , which isnt exactly what you want. so: use the "compare function" alongside .sort method where you have two values a and b. the function asks to return a value of a-b. if the answer is +ve, it means a>b, if-ve, a<b, if it is 0 they are the same.

//Arrange numbers array in ascending order
// leVal = nuArray.sort(function(a, b){
//   return a - b;
// });

//output ---> (9) [5, 36, 43, 44, 101, 202, 303, 404, 505]

//in descending order:
// leVal = nuArray.sort(function (a, b){
//     return b - a;
//   });

//output ---> (9) [505, 404, 303, 202, 101, 44, 43, 36, 5]

//Find uses a function to return the first element where the predicate is true, in this case, the first element where the number is > 50

// let tiredArray = [54, 909, -241, 28, 16, 89, 33, -21];

// function over50(num) {
//   return num>50;
// }

// val = tiredArray.find(over50);
// //output ---> 909

// //use find to get the first instance that is under 50

// function under50 (dig) {
//   return dig<50;
// }

// val = tiredArray.find(under50);
// console.log(val);
// //output ---> -241

//user input
let tiredNumber;
let newStr;
let newDig;
tiredNumber = 12345;

//convert to string
newStr = tiredNumber.toString();

//convert string to array so output is a string
newDig = newStr.split("");

// create new array
let newNumArr = [];

// // Iterate through array of string using for loop push all elements of array of string in array of numbers by typecasting them to integers using parseInt function

  for(var index=0;index<newDig.length; index++){       //For loops: we have created a variable called index and assigned it position 0. For as long as the index is less than the length of the istring, add to it, loop over it. 
    newNumArr.push(parseInt(newDig[index]));

  //We have created a new array called newNumArr and are using .push to add the new entries to it. the new entries are numbers bcz of parseInt. (newDig[index]) is like when you want sth from an array, you type newDig[0] to get element at first position. so newDig[index] loops through the index each time for loop runs 
  }

  //Show the array of numbers
  // console.log(newNumArr);

  //For loop to get the power of each number and add the results to return to sum
let powArr =[];
let sum = 0;

  // for (let index=0;index<newNumArr.length;index++){
  //   powArr.push(Math.pow(newNumArr[index], newNumArr.length))
  // };

  // console.log(powArr);

  //Find the sum of the total power


  for(let index=0;index<newNumArr.length;index++){    
    sum = sum + Math.pow(newNumArr[index], newNumArr.length);
  };

  // console.log(sum);
  //Expected output ---> 153

  // Compare user input to sum
  //  if (tiredNumber === sum){
  //    console.log("This number is a narcissitic one")
  //  } else {
  //     console.log("This number is not narcissitic")
  //  }


//FROM THE LMS: ARRAYS
//It is not possible to compare arrays directly, even if they have the same elements inside. To do this, we need to use the .toString method and then compare the return values.

let sampOne = [1, 2, 3, 4, 5];
let sampTwo = [1, 2, 3, 4, 5];

sampOne.toString() === sampTwo.toString();

//output = true

//CLONING ARRAYS - another scenario where arrays may operate differently than we would expect. Create an array to hold original values(origArray) and another that we can add values to experiment with (cloneArray) and that is equal to the original. Call some methods on the cloned array, and then console.log the original array. You find that it is the same. That's because origArray and cloneArray are pointers, and they refer to an object in memory and not the object itself per se.

let origArray = [1, 2, 3, 4, 5, 6, 7];

let cloneArray = origArray;

cloneArray.pop();
cloneArray.push(101); 

// console.log(origArray);

//The only way to clone an array successfully is to create a separate entity instead of a pointer to the original array. Remember the .slice() methid returns a shallow copy of a part of an array into a new array object. The original array remains unaffected.

let newerArray = origArray.slice();
newerArray.push(333);

newerArray[4];

// console.log(newerArray);      // output - [1, 2, 3, 4, 5, 6, 101, 333]
// console.log(newerArray.slice(2, -1));    //output => 3, 4, 5, 6, 101

//Additional examples of .slice
let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(-2));       //output =>duck elephant

 //LMS Practice
let sibNames = ["Gathoni", "Ian", "Ryan", "Denno"];

let parNames = ["Pato", "Nancy", "Caroline"];

let famNames = sibNames.concat(parNames);
famNames.push("Nala");
famNames.reverse();

console.log(famNames);

//Change an element in an array










//FROM THE js E-BOOK

//Objects, properties, events, methods - JS & jQuery with Jon Duckett

//Objects are things, like the way in real life we have a hotel, house, car etc

//Properties are the characteristics of those things, eg for a hotel, rooms, gym, spa, booking, ratings etc

//Events are interactions that people have with the computer, eg making a reservation, cancelling a reservation, starting the car, accelerating etc

// Methods are the things that people pneed to do with objects. Fundamentally, methods can 1) tell us more about the properties of the objects and 2) change the value of one or more properties eg makeABooking()

//so the object + property + events + methods create a working model of that object

// for the hotel object for example, we could have a method called checkAvailability() [which will be rooms available - rooms booked]. Additionally, when a oreservation is made, it fires the book event. this calls the makeBooking() method which increases the value of the bookings property.

//Web browsers are programs built with objects. The document object models the current web page loaded into each window. The document object has properties (eg title of the page), methods (tasks that are associated with the document currently loaded), events ([eg the user clicking]). Using the document object, there are implemented properties you can access to find out about the current page in the browser, as well as tasks you might want to do with an HTML page. Remember, when the broswer creates a model of a webpage, it creates a document object AND a new object for each element on the page - what is known as the Document Object Model (DOM)

//Object Type:Document
// Properties     url: http://www.samoinalibves.wordpress.com
//                  last modified: 11/11/2021
//                 title: Samoina Lives

// Event      happens when:load - page finishes loading
//                         click - user clicks on the page

//Method()    write() - adds new content to the page
//            getElementById() - accesses an element when you state its Id attribute 

//To understand how the broswer sees a webpage, first it receives the page as HTML code. Remember each page on a website is seen as a separate document. 2) it creates a model of the page and stores it in memory. A basic page is represented as a family tree. At the top is the document object. Below each document object is a node which represents elements, text, attributes etc. 3)The broswer uses a rendering engine to show the page on the screen. Without a CSS file it applies default styles. With a CSS file it requests the stylesheets and displays the page accordingly. It applies each rule to the corresponding element.

//An interpreter takes the instructions in JS and translates them to instructions the browser can use to achieve the tasks. Every line of code is translated one by one as the scripts run.

//how does html, CSS and Js fit in together? the html provides page structure & semantics. The CSS shows how HTML content is presented and the JS changes the page behaviour to make it more interactive. the three build on each other (html > CSS >JS). Keeoing the three in seperate files is what programmers commonly refer to as separation of concerns. This creates a popular approach to building web pages, progressive enhancement








































