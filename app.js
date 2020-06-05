// Do we need writetofile function?
// return out and fs write file to output/team.html - 89
// ROLE IS UNDEFINED - 58
// DO WE NEED THIS? - 15


// DEPENDANCIES & VARIABLES
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path";
const fs = require("fs");

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
      },
      {
        type: "input",
        name: "email",
        message: "Employee email?",
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
        manager(answer.name, answer.email, answer.role);
      }
      if (answer.role == "Engineer") {
        engineer(answer.name, answer.email, answer.role);
      }
      if (answer.role == "Intern") {
        intern(answer.name, answer.email, answer.role);
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
          },
        ])
        .then((startAgainObj) => {
          //if they say no, we are done
          if (startAgainObj.moreEmployees == true) {
            addEmployee();
          } else {
            console.log(render(employeeArray));


            //return out and fs write file to output/team.html - NOT WORKING
            fs.writeFile("team.html", function (err) {
              return writeFileAsync("team.html", data);
              if (err) {
                console.log(err);
              } else {
                console.log("The file was created!");
              }
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
          },
        ])
        .then((startAgainObj) => {
          //if they say no, we are done
          if (startAgainObj.moreEmployees == true) {
            addEmployee();
          } else {
            //generate the template
            console.log(render(employeeArray));
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
          },
        ])
        .then((startAgainObj) => {
          //if they say no, we are done
          if (startAgainObj.moreEmployees == true) {
            addEmployee();
          } else {
            //generate the template
            const html = render(employeeArray);
            console.log(html);
                 writeToFile("Readme.md", html);            //return out and fs write file to output/team.html
          }
        });
    });
}
addEmployee(); 