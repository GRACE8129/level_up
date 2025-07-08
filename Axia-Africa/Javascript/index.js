// console.log("hello")

// let age = 30;

// if (age >= 18) {
//    console.log(`i am ${age} years old`)
// }

// let num = "123";
// console.log(Number(num))
// console.log(Boolean(num))


//question 1
// console.log("10" + 1); //101
// console.log("10" - 1); //9
// console.log(true + "3"); //true3
// console.log(false + 10); //10
// console.log("5" * "2"); //10


// //question 2
// function canVote(age) {
//   return age >= 18;
// }
// console.log(canVote(Number("19"))); //false (why)
//Answer should be true because of Type Coercion When you use a relational comparison operator (like >=, <=, >, <) between a string and a number, JavaScript attempts to convert the string into a number before performing the comparison.The string "19" is successfully converted to the number 19.


// //question 3
// let a = Number("123abc");//NaN, Number
// let b = Boolean(""); //false, boolean
// let c = String(false) //"false" string

// console.log(a);
// console.log(b);
// console.log(c);


// // Question 4
// let x = null;
// let y = undefined;

// console.log(x==y); //true checks only the value and not the type.
// console.log(x===y); //false checks both the type and value

//Question 5
// console.log("0" == false); //true
// console.log("0" === false); //false


// function compareValue(a, b) {
//   console.log("==", a == b);
//   console.log("===", a === b);
//   console.log("Object.is", Object.is(a, b)); //the same value is true while opposite value is false it does not obey type coercion
// }

// compareValue("5", 5); // == true, === false, Object.is false
// compareValue(NaN, NaN); //this is not equal to anything including itself output always false
// // == false, === false, Object.is true
// compareValue(null, undefined); // == true, === false, Object.is false


//why is object.is() different from ===
// they both check if values are equal without type coercion but differs when handling NaN and difference betwwen +0 and -0
// when using === for NaN === NaN it sees it as false because it is not a number while object.is() see it as true since they are both equal, 
//while using === for +0 === -0 it sees it as true since 0 is a falsey value while object() sees it as false it look at both the numbers and the symbols.

// const result = function(number) {
//   console.log (number % 2 == 0? "even" : "odd")
// }

// result(10);
// result(15);
// result(12);


// const div = document.createElement('div');
//  div.innerText = ('grace');
//  document.body.appendChild(div);

//  const h1 = document.createElement("h1");
//  h1.innerText = ("hello world")
//  div.appendChild(h1);

//  const p = document.createElement('p');
//  p.innerText = ("almost there");
//  div.appendChild(p);


// 'https:jsonplaceholder.typicode.com/posts'

fetch('https://jsonplaceholder.typicode.com/posts')
.then((response) => {
  if (!response.ok) {
    throw new Error (`Response Status: ${response.status}`)
  }
  return response.json();
})

.then((data) => {
  // console.log(data)
  const container = document.createElement('div');

  data.forEach((post) => {
    const postDiv = document.createElement("div");
    const postH1 = document.createElement("h1");
    const postP = document.createElement("p");

    postH1.textContent = post.title;
    postP.textContent = post.body;


    postDiv.appendChild(postH1);
    postDiv.appendChild(postP);
    container.appendChild(postDiv);
  })
   document.body.appendChild(container);
})

.catch((error) => {
  console.log("error here")
})



const fruits = ['apple', 'banana', 'orange']

fruits.forEach(function(fruit) {
  console.log(fruit);
});

const div = document.createElement('div');
const p = document.createElement('p');
p.textContent = 'Hello';

div.append(p, ' world!');  
document.body.appendChild(div);