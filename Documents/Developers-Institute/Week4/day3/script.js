function playTheGame (){
    if(confirm("Do you really want to play the game?")){
        const userInput = prompt("Enter a number between 0 and 10")
        const userNumber = parseInt(userInput)

        if(isNaN(userNumber)){
            alert("Sorry Not a number, Goodbye")
        } else if(userNumber < 0 || userNumber > 10) {
            alert("Sorry its not a good number, Goodbye")
        } else {
          const randomNumber = Math.floor(Math.random() * 11)
            alert("Your number: " + userNumber + "\nRandom number: " + randomNumber);
            if(userNumber === randomNumber){
                alert("WINNER!")
                return 
            }else if 
        }
    }

        // check if users input is a number
        // console.log(typeof userInput)
        // console.log(typeof userNumber)
        // console.log("You entered the number:", userInput)
    // } else {
    //     alert("No problem, Goodbye")
    // }
    // }

const playTheGame = () => {
    alert("arrow function working")
}

/*
    // using the function keyword
    function nameOfFunction(){
        // code here
    }

    // using arrow function
    const nameOffunction2 = () => {
        // code here
    }
*/}
// function playTheGame(){
//     const computerNumber = Math.floor(Math.random()* 11);
//     const userInput = prompt("Enter a number between 0 and 10:");
//     let userNumber = parseInt(userInput);
    
// if (isNaN(userNumber)|| userNumber < 0 || userNumber > 10){
//     alert("Invalid input.Please enter a number between 0 and 10:");
//     userNumber = parseInt(userInput);
// }

function compareNumbers(userNumber, computerNumber){
    if(userNumber === computerNumber){
        alert("WINNER")
    } else if(userNumber < computerNumber){
        alert("Your number is smaller then the computers, guess again")
        const userInput = prompt("Enter again a number between 0 and 10");
        userNumber = parseInt(userInput);
    }else{
        alert("Your number is bigger then the computers, guess again")
        const userInput = prompt("Enter again a number between 0 and 10");
        userNumber = parseInt(userInput);
        }

}


