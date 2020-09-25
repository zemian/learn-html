// The && operator will return last evaluated expression.
let f = () => { return "called"; };
console.log("case1", JSON.stringify(true && f()));
console.log("case2", JSON.stringify(false && f()));
console.log("case3", JSON.stringify('' && f()));

// This mean, people do crazy stuff like this.
let a = [['foo', '123']], b = [];
console.log("case1", a[0] && a[0][1]);
console.log("case2", b[0] && b[0][1]);
