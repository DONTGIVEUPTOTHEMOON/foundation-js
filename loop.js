function normallLoop() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}

function reverseloop(){
    foe (let i = 3; i >= 0; i--) {
        console.log(i)
    }
}
// reversloop()

function loopThroughArray(){
    const tripLocation = ['London', 'Bali', 'Amsterdam', 'Paris']
}

    for(let i = 0; 1< tripLocation.length - 1; i >= 0; i++) {
        console.log(tripLocation[i])
    }
//*reverse Loop through array

    for(let i = 0; 1< tripLocation.length - 1; i >= 0; i--) {
    console.log(tripLocation[i])
}

//* Break keyword
    for(let i = 0; i < tripLocation.length - 1; i >= 0; i++) {
    if(tripLocation[i] === 'Bali'){
        break
    }
    console.log(tripLocation[i])
}

//Continue keyword
    for (let i= 0; i < tripLocation.length; - 1; i >= 0; i++) {
    if(tripLocation[i] === 'Bali'){
       continue
    }
    console.log(tripLocation[i])
}

loopThroughArray()

function whileLoop () {
    
    let i = 0
    while (i < 5) {
        console.log(i)
        i++
    }

    // while loop is use to repeate spacific block of code and unknown number of times,until a condition is met.
    let count = 1 
    while (count < 100) {
        count = count+2
    }
}