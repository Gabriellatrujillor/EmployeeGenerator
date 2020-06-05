// Do we need writetofile function?
// return out and fs write file to output/team.html - 89
// ROLE IS UNDEFINED - 58
// DO WE NEED THIS? - 15


// DEPENDANCIES & VARIABLES
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);



const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const employeeArray = [];
// ADD EMPLOYEE FUNCTION
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Employee name?",
        validate: function(useLetter){
          //A-z or a-z
          var letters= /^[A-Za-z]+$/;
          if(useLetter.match(letters)){
            return true
          }else{
            console.log("\n Must be upper or lowercase letters.");
            return false;
          }

        }
      },
      {
        type: "input",
        name: "id",
        message: "Employee ID?",
        validate: function(useLetter){
          //A-z or a-z
          var letters= /^[1-100000]+$/;
          if(useLetter.match(letters)){
            return true
          }else{
            return ("\n Try again. Must be between 0 - 100001");
           
          }

        }
      },
      {
        type: "input",
        name: "email",
        message: "Employee email?",
        validate: function(useLetter){
          //A-z or a-z
          var letters= /^[A-Za-z]+$/;
          if(useLetter.match(letters)){
            return true
          }else{
            console.log("\n Must be valid email address.");
            return false;
          }

        }
      },
      {
        type: "list",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"],
        message: "Employee role?",
      },
    ])
    .then((answer) => {
      console.log(answer);
      if (answer.role == "Manager") {
        manager(answer.name, answer.id, answer.email, answer.role);
      }
      if (answer.role == "Engineer") {
        engineer(answer.name, answer.id, answer.email, answer.role);
      }
      if (answer.role == "Intern") {
        intern(answer.name, answer.id, answer.email, answer.role);
      }
    });
}
// MANAGER FUNCTION
// ROLE??
function manager(name, id, email, role) {
  console.log("inside manager fx" + name + email + role);


  inquirer
    .prompt([
      {
        type: "input",
        name: "officeNum",
        message: "Employee office number?",
      },
    ])
    .then((managerObj) => {
      console.log(managerObj);
      const employee = new Manager(name, id, email, managerObj.officeNum);
      employeeArray.push(employee);
      console.log(employeeArray);
      //ask if there are anymore employees
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "moreEmployees",
            message: "Do you want to add more employees?",
            default: true
          },
        ])
        .then((startAgainObj) => {
          //if they say no, we are done
          if (startAgainObj.moreEmployees == true) {
            addEmployee();
          } else {
            
            //generate the template
            const html = render(employeeArray);
            fs.writeFile(outputPath, html, function(err) {

              if (err) {
                return console.log(err);
              }
            
              console.log("Success!");
            
            });
          }
        });
    });
}
// ENGINEER FUNCTION
function engineer(name, id, email, role) {
  console.log("inside engineer fx" + name + email + role);
  inquirer
    .prompt([
      {
        type: "input",
        name: "gitHub",
        message: "Employee Github?",
      },
    ])
    .then((engineerObj) => {
      console.log(engineerObj);
      const employee = new Engineer(name, id, email, engineerObj.gitHub);
      employeeArray.push(employee);
      console.log(employeeArray);
      //   ask if there are any more employees?
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "moreEmployees",
            message: "Do you want to add more employees?",
            default: true
          },
        ])
        .then((startAgainObj) => {
          //if they say no, we are done
          if (startAgainObj.moreEmployees == true) {
            addEmployee();
          } else {
            //generate the template
            const html = render(employeeArray);
            fs.writeFile(outputPath, html, function(err) {

              if (err) {
                return console.log(err);
              }
            
              console.log("Success!");
            
            });
            //return out and fs write file to output/team.html
          }
        });
    });
}
// INTERN FUNCTION
function intern(name, id, email, role) {
  console.log("inside intern fx" + name + email + role);
  inquirer
    .prompt([
      {
        type: "input",
        name: "school",
        message: "School employee attended?",
      },
    ])
    .then((internObj) => {
      console.log(internObj);
      const employee = new Intern(name, id, email, internObj.school);
      employeeArray.push(employee);
      console.log(employeeArray);
      //   ask if there are any more employees?
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "moreEmployees",
            message: "Do you want to add more employees?",
            default: true
          },
        ])
        .then((startAgainObj) => {
          //if they say no, we are done
          if (startAgainObj.moreEmployees == true) {
            addEmployee();
          } else {
            //generate the template
            const html = render(employeeArray);
            fs.writeFile(outputPath, html, function(err) {

              if (err) {
                return console.log(err);
              }
            
              console.log("Success!");
            
            });
          
          }
        });
    });
}
addEmployee(); 