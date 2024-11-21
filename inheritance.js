class Shape {
    #color
    constructor(color){
        this.#color = color 
    }

    setColor(color){
        this.#color = color
    }

    getColor(){
        return this.#color
    }

    getArea(){
        return null
    }
}

class Circle extends Shape {
    #radius
    constructor(color, radius){
        super(color)
        this.#radius = radius
    }

    getArea(){
        return Math.PI * Math.pow(this.#radius, 2)
    }

    print(){
        return `Circle (r: {${this.#radius}}, color: {${this.getColor()}}).`
    }
    
}

class Rectangle extends Shape{
    #length 
    #width
    constructor(color, length, width){
        super(color)
        this.#length = length
        this.#width = width
    }  

    getArea(){
        return this.#length * this.#width
    } 

    print(){
        return `Rectangle (l: ${this.#length}, w: ${this.#width}, color: ${this.getColor()})`;     
    }  
}     

class Square extends Shape{
    #side
    constructor(color, side){
        super(color)
        this.#side= side
    }
    getArea(){
        return this.#side * this.#side
    }

    print(){
        return `Square (a: {${this.#side}}, color: {${this.getColor()}}).`
    }
}

class Paint{
    #shapes
    constructor(){
     this.#shapes = []
    }
    addShape(shape){
        this.#shapes.push(shape)
    }
    getShapes(){
        return this.#shapes
    }
    calculateTotalArea() {
        return this.#shapes.reduce((total, shape) => total + shape.getArea(), 0); // Sum up areas
    }
}

const shape1 =  new Shape('red')
console.log('shape color', shape1.getColor())
console.log('shape area', shape1.getArea())

const circle1 =  new Circle('blue', 5)
console.log(circle1.print())
console.log('circle area', circle1.getArea())

const rectangle = new Rectangle( "green",6,4)
console.log(rectangle.print())
console.log("rectangle area", rectangle.getArea())

const square = new Square('yellow', 7)
console.log(square.print())
console.log("square area", square.getArea())

const paint = new Paint()
paint.addShape(circle1)
paint.addShape(rectangle)
paint.addShape(square)
console.log()
paint.getShapes().forEach(shape =>console.log(shape.print()));
console.log(paint.calculateTotalArea())