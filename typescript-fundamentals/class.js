// A class groups variables (properties) and functions (methods) that are highly related
// borrowing the example from interface.ts and to fullfill the cohesion principle -
// which encourages the grouping of related entities, we use a class
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ' Y: ' + this.y);
    };
    ;
    Point.prototype.getDistance = function (anotherPoint) {
        // ... code block
    };
    ;
    return Point;
}());
// objects
// creating the object from class
var point = new Point();
point.x = 7;
point.y = 77;
point.draw();
// constructors - in OOP, we have this concept callled constructors, so every class can have a constructor,
// which is basically a method that is called when we create an instance of that class.
// so in the example above, we can inirialize x and y in the constructor like below -
var AnotherPoint = /** @class */ (function () {
    function AnotherPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    AnotherPoint.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    ;
    return AnotherPoint;
}());
var anotherPoint = new AnotherPoint(77, 777);
anotherPoint.draw();
