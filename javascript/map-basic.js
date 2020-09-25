// ES2015
var map = new Map([["one", 1], ["two", 2], ["three", 3]]);
console.log("map['two']: ", map.get('two'));
console.log("map.has('two'): ", map.has('two'));
console.log("map.has('twoX'): ", map.has('twoX'));
map.set("four", 4);
console.log("map['four']: ", map.get('four'));

for (var [k,v] of map.entries())
    console.log("Map entry: ", k, v);

map.delete("two");

// NOTE: forEach pair is value-key, unlike entries()!
map.forEach((v, k) => console.log("Map.forEach", k, v));
