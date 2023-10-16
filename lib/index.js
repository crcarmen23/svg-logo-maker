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

const generateLogo = ({ }) =>



    inquirer
.prompt(questions)
        .then((data) => {
            const readmeContent = generateReadme(data);

            fs.writeFile('./lib/logo.svg', readmeContent, (err) =>
                err ? console.log(err) : console.log('Success! Your custom logo has been generated at logo.svg.')
            );
        })
