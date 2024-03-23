
import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random()* 6 + 1);

const NumGuess = await inquirer.prompt ([
    
    {
        name:"NumberGuess",
        type:"number",
        message:"Select any one Number between 1 to 6",
    },

]);

if(NumGuess.userGuessnumber === randomnumber){

    console.log("Congrates You Guess Right Number");
    
}
else{

    console.log("you Guess Wrong Number");
    
}