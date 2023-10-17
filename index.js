const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter up to three characters of text for your logo.",
    }, {
        type: "input",
        name: "textColor",
        message: "Please enter a color keyword (or a hexadecimal number) for your logo text.",
    }, {
        type: "list",
        name: "shape",
        message: "Please choose a shape for your logo.",
        choices: ["Circle", "Square", "Triangle"],
    }, {
        type: "input",
        name: "shapeColor",
        message: "Please enter a color keyword (or a hexadecimal number) for the shape of your logo.",
    }
];


inquirer
.prompt(questions)
        .then((data) => {
            if (data.shape === Triangle) {

            }  else if (data.shape === Square) {

            } else {
                
            }
            const logo = new Triangle(
                data.text,
                data.textColor,
                data.shape,
                data.shapeColor
              );
            fs.writeFile('./examples/logo.svg', logo, (err) =>
                err ? console.log(err) : console.log('Success! Your custom logo has been made at logo.svg.')
            );
        })

