// They should be the same.
// Index access give you more flexibility such as any character
// can be used, and even using a variable that resolve to string.
foo = {};
foo['hello'] = "bar";
console.log(foo.hasOwnProperty("hello"));
foo.hello2 = "bar";
console.log(foo.hasOwnProperty("hello2"));

foo.hello = "bar2";
console.log(foo);
