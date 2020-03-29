"use strict";
class Complex {
    constructor(real, imaginary) {
        this.realPart = real;
        this.imaginaryPart = imaginary;
    }
    static addComplex(complexOne, complexTwo) {
        let real = complexOne.realPart + complexTwo.realPart;
        let imaginaryOne = +complexOne.imaginaryPart.substr(0, complexOne.imaginaryPart.length - 1);
        let imaginaryTwo = +complexTwo.imaginaryPart.substr(0, complexOne.imaginaryPart.length - 1);
        return new Complex(real, (imaginaryOne + imaginaryTwo) + "i");
    }
    subComplex(complexOne) {
        let real = complexOne.realPart - this.realPart;
        let imaginaryOne = +complexOne.imaginaryPart.substr(0, complexOne.imaginaryPart.length - 1);
        let imaginaryTwo = +this.imaginaryPart.substr(0, complexOne.imaginaryPart.length - 1);
        return new Complex(real, (imaginaryOne - imaginaryTwo) + "i");
    }
    calculateModule() {
        let imaginary = Math.pow(+this.imaginaryPart.substr(0, this.imaginaryPart.length - 1), 2);
        let real = Math.pow(this.realPart, 2);
        return Math.sqrt(imaginary + real);
    }
    toString() {
        return "real: " + this.realPart + "\n" + "imaginary: " + this.imaginaryPart;
    }
}
let x1 = new Complex(2, "3i");
let x2 = new Complex(1, "2i");
let x3 = Complex.addComplex(x1, x2);
console.log(x3);
let x4 = x3.subComplex(x1);
console.log(x4);
console.log(x4.calculateModule());
