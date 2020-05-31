const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArray = [];

function addEmployee(){
    // inquirer ask email name role
    //if role == "manager"{
       // manager(name, email,role )
   // }
   
inquirer.prompt( [
    {
      type: "input",
      name: "name",
      message: "name?",
    },
    {
      type: "input",
      name: "email",
      message: "email?",
    },
    {
      type: "list",
      name: "role",
      choices:["manager", "engineer", "intern"],
      message: "role?",
    }

  
  
  ]).then(function(answer){
      console.log(answer)
      if(answer.role=="manager"){
          manager(answer.name, answer.email, answer.role)

      }
  })
}


//Manager//name email role
    //ask officenum 

    function manager(name, email, role){
        console.log("inside manager fx"+ name+email+role);
        //inquirer ask for officenum
       
        inquirer.prompt( [
            {
              type: "input",
              name: "officeNum",
              message: "Office Number?",
            }
          
          ]).then(function(managerObj){
              console.log(managerObj)
              const employee= new Manager(name, id, email, managerObj.officeNum);
            //push emo=ployee into array
             //create he manager obj
        //ask if more employees
            //if yes call addEmployee()
            //if no call render fx passing in employeeArray
                //write the team.html page with fswritefile


          })
        
    }
//engineer name role email 
    //ASK  github
//intern name role, email 
    //ask school


addEmployee();

