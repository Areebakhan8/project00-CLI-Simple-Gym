#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

let ex:string[]=["Squat","pushup","Bench press","plank", "walking","Bridge"];

enum Time{
    TIME="Morning Time: 8am to 11am",
    TIME1="Afternoon Time: 11am to 1pm",
    TIME2="Evening Time: 4pm to 6pm",
    TIME3="Night Time: 6pm to 8pm"}
    
const data=await inquirer.prompt([
    {
        name:"info",
        type:'input',
        message:chalk.green("Enter your Name"),
    }
    
])

console.log(`${chalk.yellow(data.info)},${chalk.blue("!...Welcome To Areeba's Fitness Gym")}`);


const obj =await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:chalk.green("Choose Your Favourite Exercise"),
        choices:Object.values(ex),
    }  
])
    console.log(`${chalk.blue("Your favourite exercise is")}, ${chalk.yellow(obj.select)}`);
        
    
   
   
 const trainer =await inquirer.prompt([
    
     {
        name:"name",
        type:"list",
        message:chalk.green("Select your favourite Trainer"),
        choices:["Mubashira","Sara","Kashaf","Sofiya"]
    },
  ]) 
  if (trainer.name === "Mubashira"){
    console.log
    (`${chalk.blue("Your trainer is")} ${chalk.yellow(trainer.name)}${chalk.blue(" & your  exercise shedule is")} ${chalk.yellow(Time.TIME)}`)
  }
  else if (trainer.name === "Sara"){
    console.log
    (`${chalk.blue("Your trainer is")} ${chalk.yellow(trainer.name)}${chalk.blue(" & your  exercise shedule is")} ${chalk.yellow(Time.TIME1)}`)
   }
   else if (trainer.name === "Kashaf"){
    console.log
    (`${chalk.blue("Your trainer is")} ${chalk.yellow(trainer.name)}${chalk.blue(" & your exercise shedule is")} ${chalk.yellow(Time.TIME2)}`)}
   else if (trainer.name === "Sofiya"){
    console.log
    (`${chalk.blue("Your trainer is")} ${chalk.yellow(trainer.name)}${chalk.blue(" & your exercise shedule is")} ${chalk.yellow(Time.TIME3)}`)
   }
   else console.log(chalk.red("plzz Select your Trainer"))
