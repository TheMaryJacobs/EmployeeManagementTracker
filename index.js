//list dependencies 
const inquirer = require("inquirer");
const mysql = require("mysql");
const sequilize = require("./config/connection");
const cTable = require("console.table");
const db = require("./models"); 

//connect to the port
// const connection = mysql.createConnection({
//     host: "localhost",

//     // Your port; if not 3306
//     port: 3306,

//     // Your username
//     user: "root",

//     // Your password
//     password: "root",
//     database: "cms_DB"
// });

//connect server
sequilize.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    console.log(table);
    menu()
    //  connection.end();
});


//create functions for prompts - copied from TwoTables activity
function menu() {
    inquirer.prompt({
        type: "list",
        choices: ["View departments", "View roles", "View employees",  "Add department", "Add role", "Add employee", "Update employee role", "Quit"],
        message: "What would you like to do?",
        name: "option"
    })
        .then(function (result) {
            console.log("You entered: " + result.option)

            switch (result.option) {
                case "View departments":
                    viewDepartment();
                    break;
                case "View roles":
                    viewRole();
                    break;
                case "View employees":
                    viewEmployees();
                    break;
                case "Add department":
                    addDepartment();
                    break;
                case "Add role":
                    viewDepartment();
                    break;
                case "Add employee":
                    viewDepartment();
                    break;
                case "Update employee role":
                    viewDepartment();
                    break;
                default :
                     quit();

            }
        });
}

// "View department" function
function viewDepartment() {
    // select from the db
    const query = "SELECT * FROM department"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        menu()

    })

}

// "View role" function
function viewRole() {
    // select from the db
    const query = "SELECT * FROM role"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        menu()

    })
}

// "View employees" function
function viewEmployees() {
    // select from the db
    const query = "SELECT * FROM employee"
    connection.query(query, function (err, res) {
        if (err) throw err;
        console.table(res)
        menu()
    })
}

// "Add department" function
function addDepartment() {
    inquirer
      .prompt({
        name: "department",
        type: "input",
        message: "What department would you like to add?"
      })
      .then(function(answer) {
          //change this to add functions
        var query = "SELECT position, song, year FROM top5000 WHERE ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          runSearch();
        });
      });
  }

// "Add role" function


// "Add employee" function


// "Update employee role" function





function quit() {

    connection.end()
    process.exit()

}