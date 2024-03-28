import inquirer from "inquirer"

let myBalance = 10000;

let myPin = 1234;

let pinAnswer = await inquirer.prompt
(

    [
        {
    name: "pin",
    message: "Enter your pin",
    type: "number"
        }
    ]
)

   if (pinAnswer.pin === myPin) {

    console.log("Correct pin code!")

    let operationAns = await inquirer.prompt
(
    [
        {
            name: "operation",
            message: "Please select one option",
            type: "list",
            choices: ["withdraw","checkbalance"]

        }
    ]
)


if (operationAns.operation === "withdraw") {

    let choice = await inquirer.prompt 
(
    [
        {
        
        name: "options",
        message:"choose one of these options",
        type: "list",
        choices: ["Normal","CashAdvance"]

        }
    ]
)

if (choice.options === "Normal" ) {
    let amountAns = await inquirer.prompt
(
    [
        {

        name: "amount",
        message: "enter your amount",
        type: "number"
        }
    ]
)

let currentAmount = myBalance -= amountAns.amount

if (amountAns.amount < 10000 && amountAns.amount > 0 ) {

console.log(`Your remaining balance is: ${currentAmount}`)

}

else {
    
    console.log("Insufficient balance")

}

}

else if (choice.options === "CashAdvance") {

let fastCash = await inquirer.prompt (
    [
        {

    name: "fastCashService",
    message:"choose the amount you want to withdraw",
    type: "list",
    choices: [1000,2000,5000,10000]
        }
    ]
)

let currentAmount2 = myBalance -= fastCash.fastCashService

console.log(`Your current balance is: ${currentAmount2}`)

}

}

else if (operationAns.operation === "checkbalance") {

    console.log(`Your current balance is: ${myBalance}`)
}

else {

    console.log("Please select from the above two options")
}
   
}

   else {
    
    console.log("Incorrect pin!")
   
}

   