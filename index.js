const inquirer = require("inquirer");
const fs = require('fs');
const Square = require('./lib/square')
const Triangle =require('./lib/triangle')
const Circle =require('./lib/circle')

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
        let shape;
        if (data.shape === 'Triangle') {
            shape = new Triangle(data.text, data.textColor, 'polygon', data.shapeColor)
        } else if (data.shape === 'Square') {
            shape = new Square(data.text, data.textColor, 'rect', data.shapeColor)
        } else {
            shape = new Circle(data.text, data.textColor, 'circle', data.shapeColor)
        }
    
        fs.writeFile('./examples/logo.svg', shape.render(), (err) =>
            err ? console.log(err) : console.log('Success! Your custom logo has been made at logo.svg.')
        );
    })

