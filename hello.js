var message = "Hello TS";
console.log(message);
function myfun() {
    console.log("I am in fun 1");
}
var myfun2 = function () {
    console.log("I am in fun 2");
};
var myfun3 = function (msg) {
    if (msg === void 0) { msg = "default name"; }
    console.log("I am in fun 3 " + msg);
};
myfun();
myfun2();
myfun3("hello");
var vehicle = /** @class */ (function () {
    function vehicle(model) {
        this.model = model;
    }
    vehicle.prototype.drive = function () {
        console.log("Driving Vehicle " + this.model);
    };
    return vehicle;
}());
var car = new vehicle("honda");
car.drive();
var html5 = {
    topic: "Local Storage",
    duration: 10,
    startTraining: function () {
        return "In Interface";
    }
};
console.log("training interface");
console.log(html5.topic);
console.log(html5.duration);
console.log(html5.startTraining);
