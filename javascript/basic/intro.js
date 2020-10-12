// Quick Tour of JS

// String
s1 = "Hello";
s2 = "World";
console.log(s1);
console.log(s2);
console.log(s1 + s2);
console.log(s1 + " " + s2 + "!");

// Number (int or float)
n1 = 100;
f1 = 0.10;
console.log(n1);
console.log(f1);

// String and Number
console.log(n1, f1, s1);
console.log(n1 + n1); // Other operators: "+, -, *, /" will work too.
n2 = n1 - 99 * 2;
console.log(n2);
n2 = (n1 - 99) * 2;
console.log(n2);
console.log(n1 + " " + n1);
console.log(n1 + f1);
console.log(s1 + " " + n1);

// Boolean
b1 = true;
b2 = false;
console.log(b1);
console.log(b2);
console.log(b1 && b2);
console.log(b1 || b2);
b3 = b1 || b2 && b1;
b3 = (b1 || b2) && b1;
console.log(b3);

// Boolean and Others
b4 = 100 > 99; // Other comparators: ">, <, >=, <=, ===, !=="
b4 = (100 > 99);
console.log(b4);
console.log(s1 + " " + b1);
console.log(s1 + " " + b2);
console.log(s1 && b2);
console.log(n1 && b2);

// While loop - repeating code
count = 1;
while (count <= 3) {
  console.log("Hello");
  count = count + 1;
}

// If condition branching
count = 1;
while (count <= 3) {
  if (count == 1) {
    console.log("Hello World");
  } else {
    console.log("HELLO WORLD");  
  }
  count = count + 1;
}
