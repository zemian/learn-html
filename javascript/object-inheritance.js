// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle; //If you don't set Object.prototype.constructor to Rectangle,
//it will take prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle?',
    rect instanceof Rectangle); // true
console.log('Is rect an instance of Shape?',
    rect instanceof Shape); // true
rect.move(1, 1); // Outputs, 'Shape moved.'


// https://stackoverflow.com/questions/15192722/javascript-extending-class

// Below are for JS ES2015

// define the Person Class
function Person() {}

Person.prototype.walk = function(){
    console.log ('I am walking!');
};
Person.prototype.sayHello = function(){
    console.log ('hello');
};

// define the Student class
function Student() {
    // Call the parent constructor
    Person.call(this);
}

// inherit Person
Student.prototype = Object.create(Person.prototype);

// correct the constructor pointer because it points to Person
Student.prototype.constructor = Student;

// replace the sayHello method
Student.prototype.sayHello = function(){
    console.log('hi, I am a student');
};

// add sayGoodBye method
Student.prototype.sayGoodBye = function(){
    console.log('goodBye');
};

var student1 = new Student();
student1.sayHello();
student1.walk();
student1.sayGoodBye();

// check inheritance
console.log(student1 instanceof Person); // true
console.log(student1 instanceof Student); // true
