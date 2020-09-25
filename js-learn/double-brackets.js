// https://stackoverflow.com/questions/17174786/what-is-the-significance-of-the-double-brackets-for-the-prototype-property-i
// What is the double bracket mean such as '[[Prototype]]'?
//   - private properties that vendor usually do not expose to be access by normal JS spec.
//   - Example, object.[[Prototype]] usually can be access by object.__proto__, but it's not
//     guarantee.

var object = new Object();
console.log(object);
console.log(Object.getPrototypeOf(object));

// NOTE: Some other object such as Proxy[[target]] uses same syntax.
