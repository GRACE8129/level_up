// let myAge = 26
// console.log(myAge)


// let myAge = 26
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)


// let bonuspoints = 50
// console.log (bonuspoints)

// bonuspoints = bonuspoints + 50
// console.log (bonuspoints)

// bonuspoints = bonuspoints - 75
// console.log (bonuspoints)

// bonuspoints = bonuspoints + 45
// console.log (bonuspoints)

// function count() {
//   console.log (42)
// }

// count()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function  lap() {
//   let sum = lap1 + lap2 +lap3
//   console.log(sum)
// }

// lap()

// function log() {
//   console.log("I love JavaScript");
// }




// let lapsCompleted = 0

// function lap() {
//   lapsCompleted = lapsCompleted + 1
  
// }

// lap()
// lap()
// lap()

// console.log(lapsCompleted)

//document.getElementById("Html id name").innerText 
let countEl = document.getElementById("count-el")  // pass in argument
let saveEl = document.getElementById("save-el")
let count = 0;
function increment() {
  count += 1;
  countEl.textContent = count;
  //console.log(count);

}

function save() {
let entry = count + "- ";
saveEl.textContent += entry;
count = 0;
countEl.textContent = count;
  //console.log(count);
}

//save()


// let username = "per"
// let message = "You have tree new notifications";
// let = messageToUser = (message + " ," + username + "!")
// console.log(messageToUser);



// let name = "Grace";
// let greeting = "Hi, my name is "
// let = myGreeting = greeting + name
// console.log(myGreeting);

// console.log(4 + 5) // 9
// console.log("2" + "4") // "24"
// console.log("5" + 1) // "51"
// console.log(100 + "100") // "100100