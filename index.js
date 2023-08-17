const inquirer = require("inquirer");
const fs = require("fs");

//Circle logo function
const circleLogo = (data) => `
<svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${data.shapeColour}" />

  <text x="150" y="122" font-size="60" text-anchor="middle" fill="${data.textColour}">${data.text}</text>

</svg>`;

//Triangle logo function
const triangleLogo = (data) => `
<svg height="210" width="500">

  <polygon points="205,0 350,210 60,210" style="fill:${data.shapeColour};stroke:${data.shapeColour};stroke-width:1"/>

  <text x="205" y="160" font-size="60" text-anchor="middle" fill="${data.textColour}">${data.text}</text>
</svg>
`
//
const squareLogo = (data) => `
<svg height="210" width="500">

<rect x="150" y="0" width="200" height="200" fill="${data.shapeColour}"/>

  <text x="250" y="122" font-size="60" text-anchor="middle" fill="${data.textColour}">${data.text}</text>
</svg>
`

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
      choices: ["circle", "triangle", "square"],
      name: "shape",
    },
    {
      type: "input",
      message: "Enter colour for shape",
      name: "shapeColour",
    },
  ])
  .then((data) => {
    if (shape === circle) {
      const logoContent = circleLogo(data);
      fs.writeFile("./examples/logo.svg", logoContent, (err) =>
        err ? console.error(err) : console.log("Success!")
      );
    }
  });
