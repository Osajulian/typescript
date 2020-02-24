
class PropertiesPoint {
    draw() {
        console.log(this.x, this.y)
    };

    constructor(_x?: number, _y?: number) {
}

get x() {
    return this.x;
}

set x(value) {
    if(value < 0)
    throw new Error('Error: value cannot be less than 0');
    this.x = value;
}

}

let propertiesPoint = new PropertiesPoint();
let x = propertiesPoint.x;
propertiesPoint.x= 10;

// if we wanted to give only read pnly access to the fields, we take out the setter

// A property looks like a fiekd from the outside but internally, its really a method in the class, or
// more accurately, its either one metho, which is a getter or a setter ir a combination of a getter and a
// setter.