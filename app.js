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
   
   
inquirer.prompt( [
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email?",
    },
    {
      type: "list",
      name: "role",
      choices:["manager", "engineer", "intern"],
      message: "What is your title?",
    }

  
  
  ]).then(function(answer){
      console.log(answer)
      if(answer.role=="manager"){
         return manager(answer.name, answer.email, answer.role)

      }
  })
.then(function(answer){
      console.log(answer)
      if(answer.role=="engineer"){
         return engineer(answer.name, answer.email, answer.role)

      }
  })
  
  
}

  // MANAGER FUNCTION
    function manager(name, email, role, id){
        console.log("inside manager fx"+ name+email+role);
       
        inquirer.prompt( [
            {
              type: "input",
              name: "officeNum",
              message: "What is your office number?",
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
          // const newEmployees = employeeArray.push(manager)

        
    }



    // ENGINEER FUNCTION
    function engineer(name, email, role, id){
      console.log("inside engineer fx"+ name+email+role);
      //inquirer ask for officenum
     
      inquirer.prompt( [
          {
            type: "input",
            name: "gitHub",
            message: "What is your gitHub?",
          }
        
        ]).then(function(engineerObj){
            console.log(engineerObj)
            const employeeEngineer= new Engineer(name, id, email, engineerObj.gitHub);
      
        })
      
  }


    // INTERN FUNCTION
    function intern(name, email, role, id){
      console.log("inside manager fx"+ name+email+role);
     
      inquirer.prompt( [
        {
          type: "input",
          name: "name",
          message: "What is your name?",
        },
        {
          type: "input",
          name: "email",
          message: "What is your email?",
        },
          {
            type: "input",
            name: "school",
            message: "What school did you attend?",
          }
        
        ]).then(function(internObj){
            console.log(internObj)
            const employeeIntern= new Intern(name, id, email, internObj.school);
          
        })
      
  }

addEmployee();