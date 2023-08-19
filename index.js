const inquirer = require("inquirer");
const createSvg = require("./lib/writeFile") 

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
    if (data.text.length > 3) {
      console.log("Please enter no more than three characters.");
      prompt();
    } else {
      createSvg("./examples/logo.svg", data);
    }
  });
}

prompt();