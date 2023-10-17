const Square = require('./square')

it('renders a square', () =>{
    let square = new Square ('CER', 'white', 'rect', 'green')
    expect(square.render()) .toBe (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="green"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">CER</text></svg>`)

})


const Triangle = require('./triangle')

it('renders a triangle', () =>{
    let triangle = new Triangle ('CER', 'white', 'polygon', 'green')
    expect(triangle.render()) .toBe (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150,18 244, 182 56, 182" fill="green" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="white">CER</text></svg>`)

})

const Circle = require('./circle')

it('renders a circle', () =>{
    let circle = new Circle ('CER', 'white', 'circle', 'green')
    expect(circle.render()) .toBe (`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="100" r="80" fill="green" /><text x="100" y="110" font-size="60" text-anchor="middle" fill="white">CER</text></svg>`)

})