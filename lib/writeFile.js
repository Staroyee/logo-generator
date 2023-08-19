//Import fs module.
const fs = require("fs");
//Import classes from shapes.js
const { Triangle, Circle, Square } = require('./shapes')
//Function to create .svg file taking in user input from prompts.
function createSvg(fileName, data) {

    let svg = ``;
  
    svg = `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">`;
  
    let shapeChoice;
  
    if (data.shape === "Triangle") {
      shapeChoice = new Triangle();
      svg += `<polygon points="150, 20 244, 150 56, 150" fill="${data.shapeColour}"/>`;
  
    } else if (data.shape === "Circle") {
      shapeChoice = new Circle();
      svg += `<circle cx="150" cy="100" r="60" fill="${data.shapeColour}"/>`;
  
    } else {
      shapeChoice = new Square();
      svg += `<rect x="100" y="50" rx="0" ry="10" width="100" height="100" fill="${data.shapeColour}"/>`;
    }
  
    svg += `<text x="150" y="113" font-size="40" text-anchor="middle" fill="${data.textColour}">${data.text}</text>`;
  
    svg += `</svg>`;

    fs.writeFile(fileName, svg, (err) => {
      err ? console.log(err) : console.log("Logo generated successfully (See examples folder)");
    });
  }

  //Export the function to index.js file.
  module.exports = createSvg;