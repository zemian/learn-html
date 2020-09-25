// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators

// Equality (==)
// The equality operator converts the operands if they are not of the same type,
// then applies strict comparison. If both operands are objects, then JavaScript
// compares internal references which are equal when operands refer to the same
// object in memory.

/*
1    ==  1         // true
'1'  ==  1         // true
1    == '1'        // true
0    == false      // true
0    == null       // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1.key == object2.key //true
0    == undefined  // false
null == undefined  // true
*/

// Identity / strict equality (===)
// The identity operator returns true if the operands are strictly equal (see above)
// with no type conversion.
/*
3 === 3   // true
3 === '3' // false
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
object1 === object2 //false
 */

// Tests
var object1 = {'key': 'value'}, object2 = {'key': 'value'};
console.log(object1 === object2);
console.log(object1 === object1);
