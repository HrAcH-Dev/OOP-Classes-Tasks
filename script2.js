// 2.   Create an object called shape that has the type property and a getType() method.
//    Define a Triangle() constructor function whose prototype is shape . Objects created 
//    with Triangle() should have three properties — a, b, and c , representing the lengths
//    of the sides of a triangle. 
//    Add a new method to the prototype called getPerimeter()

// let shape = {
//     type: 'shape',
//     getType: function() {
//         return this.type
//     }
// }

// function Triangle(a,b,c) {
//     this.a = a
//     this.b = b
//     this.c = c
// }

// Triangle.prototype = shape;
// Triangle.prototype.constructor = Triangle;
// Triangle.prototype.type = "triangle"

// Triangle.prototype.getPerimeter = function () {
//     return this.a + this.b + this.c
// }

// let tring = new Triangle(5,10,15)
// console.log(tring.getPerimeter())
