//Import inquirer module.
const inquirer = require("inquirer");
//Import createSvg function.
const createSvg = require("./lib/writeFile") 

//Function to prompt user.
function prompt() {
inquirer
  .prompt([
    {
      type: "input",
      message: "Enter up to 3 characters",
      name: "text",
    },
    {
      type: "input",
      message: "Enter colour for text",
      name: "textColour",
    },
    {
      type: "list",
      message: "Choose a shape from the list",
      choices: ["Circle", "Triangle", "Square"],
      name: "shape",
    },
    {
      type: "input",
      message: "Enter colour for shape",
      name: "shapeColour",
    },
  ])
  .then((data) => {
    //Use the data to check if the text length is more than three.
    if (data.text.length > 3) {
      console.log("Please enter no more than three characters.");
      //If the text length is longer than three, run the prompt function again.
      prompt();
    } else {
      //If criteria is met, run the createSvg function.
      createSvg("./examples/logo.svg", data);
    }
  });
}
//Run the prompt function when the app is run.
prompt();