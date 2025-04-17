// let countEl = document.getElementById("zero") //.innerText or .textContent
// let count = 0;
// function increment () {
// count = count + 1 //or count += 1
// countEl.textContent = count;
// }


// let saveEl = document.getElementById("previous") //.innerText or .textContent

// function save() {
//   entry = count + "- "
//   saveEl.textContent = saveEl.textContent + entry;
//   count = 0
//   countEl.textContent = count;

// }


//practice

// let name = "Linda"
// let greeting = "Hi there"

// function Hello() {
//   let opening = greeting + " " + name;
//   console.log(opening);
// }

// Hello()



// let myPoints = 3;

// function add3Points() {
//   myPoints = myPoints + 3
  
// }


// function remove1Point() {
//   myPoints = myPoints - 1
  
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()

// console.log(myPoints)


// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// sumEl = document.getElementById("sum-el")

// function added() {
//   let add = num1 + num2
//   sumEl.textContent = "sum: " + add
// }

// function subtracted() {
//   let sub = num1 - num2
//   sumEl.textContent = "sum: " + sub
// }

// function divided() {
//   let div = num1 / num2
//   sumEl.textContent = "sum: " + div
// }


// function multiplied() {
//   let mul = num1 * num2
//   sumEl.textContent = "sum: " + mul
// }


// Challenge 1: create a conditional that logs out "Good morning!", "Good evening!" and so on depending on the value of time (<- a variable)

// Challenge 2: Rewrite the whole thing as a switch statement


const time = "morning";

if (time === "morning") {
    console.log('Good morning');
} else if (time === "afternoon") {
    console.log('Good afternoon');
} else if (time === "evening") {
    console.log('good evening')
} else {
    console.log('good night')
}


switch (time) {
    case "morning":
      console.log("Good morning");
    break;
    
    case "afternoon":
      console.log("Good afternoon");
    break;
    
    case "evening":
      console.log("Good evening");
    break;
    
    default:
      console.log("Good night")   
}

