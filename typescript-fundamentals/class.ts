// A class groups variables (properties) and functions (methods) that are highly related

// borrowing the example from interface.ts and to fullfill the cohesion principle -
// which encourages the grouping of related entities, we use a class

class Point {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ' Y: ' + this.y)
    };

    getDistance(anotherPoint: Point) {
        // ... code block
    };

}


// objects
// creating the object from class
let point = new Point();
point.x =7;
point.y = 77;
point.draw();

// constructors - in OOP, we have this concept callled constructors, so every class can have a constructor,
// which is basically a method that is called when we create an instance of that class.

// so in the example above, we can inirialize x and y in the constructor like below -

class AnotherPoint {
    x: number;
    y: number
    draw() {
        console.log(this.x, this.y)
    };

    constructor(x: number, y: number) {
        this.x =x;
        this.y = y;
}

}

let anotherPoint = new AnotherPoint(77, 777);
anotherPoint.draw();

// optional parameters


class YetAnotherPoint {
    x: number;
    y: number
    draw() {
        console.log(this.x, this.y)
    };

    constructor(x?: number, y?: number) {
        this.x =x;
        this.y = y;
}

}

let yetAnotherPoint = new YetAnotherPoint();
anotherPoint.draw();