class Triangle {
    constructor(text, textColor, shape, shapeColor) {
this.text = text;
this.textColor = textColor;
this.shape = shape;
this.shapeColor = shapeColor;
    }
}

module.exports = Triangle

const makeTriangle = ({text, textColor, shape, shapeColor}) => 
`<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="red" />

<${shape} cx="150" cy="100" r="80" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`