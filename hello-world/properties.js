var PropertiesPoint = /** @class */ (function () {
    function PropertiesPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    PropertiesPoint.prototype.draw = function () {
        console.log(this.x, this.y);
    };
    ;
    Object.defineProperty(PropertiesPoint.prototype, "X", {
        get: function () {
            return this.x;
        },
        enumerable: true,
        configurable: true
    });
    return PropertiesPoint;
}());
var propertiesPoint = new PropertiesPoint();
var x = propertiesPoint.X;
