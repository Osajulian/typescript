// access modifiers is a keyword that we can apply to a member of a class to
// control its access from the outside.
// public
// private 
// protected
// by default, all class members are public


class AccessModifierPoint {
    private x: number;
    private y: number
    draw() {
        console.log(this.x, this.y)
    };

    constructor(x?: number, y?: number) {
        this.x =x;
        this.y = y;
}

}

let acessModifierPoint = new AccessModifierPoint();
// acessModifierPoint.x and .y are inaccessible;


// Access Modifiers in a constructor
// If you ptrfix a constructor parameter with an access modifier, with a private or public 
// the typescript compiler will generate a field(s) with the exact same name and it will also
// initialize that field with the value of the argument.


class ConstructorModifierPoint {
    
    draw() {
        console.log(this.x, this.y)
    };

    constructor(private x: number, public y?: number) {
}

}

let constructorModifierPoint = new ConstructorModifierPoint(7);

// note: we can set constructorModifierPoint.y since its public but 
// cannot access constructorModifierPoint.x since its private.