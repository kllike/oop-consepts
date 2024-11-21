class Circle {
    corners(){
        console.log('Circle does not have any corners.')
    }
    sides(){
        console.log('Circle has one side.')
    }
}

class Rectangle {
    corners(){
        console.log('Rectangle has 4 corners.')
    }
    sides(){
        console.log('Rectangle has 4 sides.')
    }
}

const cornersTest = (shape) => {
    shape.corners()
}

const shape1 = new Circle()
const shape2 = new Rectangle()

cornersTest(shape1)
cornersTest(shape2)