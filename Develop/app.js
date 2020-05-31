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
}


//Manager//name email role
    //ask officenum 

    function manager(name, email, role){
        //inquirer ask for officenum
        //create he manager obj
        //ask if more employees
            //if yes call addEmployee()
            //if no call render fx passing in employeeArray
                //write the team.html page with fswritefile
    }
//engineer name role email 
    //ASK  github
//intern name role, email 
    //ask school




