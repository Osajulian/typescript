// inline annontations

// drawpoint is a function that takes an object with 2 properties (x, y) as parameters

// here we are using inline annontations to strongly type the object parameter's properties
let drawPoint = (point: {x: number, y: number}) => {
     // ... code block
}


// calling drawPoint

drawPoint({
    x: 5,
    y: 7
})

// this solution is a little verbose and can be solved by using an ibterfcae

interface Point {
    x: number,
    y: number
}

// so now we can simnply drawPoint 

let enhancedDrawPoint = (point: Point) => {
     // ... code block
}

// note interfaces are purely for declarations, they cannot include any implementations.