/*
 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null

 // foo does not exist. It is not defined and has never been initialized:
 foo;
 "ReferenceError: foo is not defined"

 // foo is known to exist now but it has no type or value:
 var foo = null;
 foo;
 "null"

 typeof null          // "object" (not "null" for legacy reasons)
 typeof undefined     // "undefined"
 null === undefined   // false
 null  == undefined   // true
 null === null        // true
 null == null         // true
 !null                // true
 isNaN(1 + null)      // false
 isNaN(1 + undefined) // true


 https://stackoverflow.com/questions/5076944/what-is-the-difference-between-null-and-undefined-in-javascript

 */

// In JavaScript, undefined means a variable has been declared but has not yet been assigned a value, such as:
var TestVar;
console.log(TestVar); //shows undefined
console.log(typeof TestVar); //shows undefined

// null is an assignment value. It can be assigned to a variable as a representation of no value:
var TestVar = null;
console.log(TestVar); //shows null
console.log(typeof TestVar); //shows object

/*
// From the preceding examples, it is clear that undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.

null === undefined // false
null == undefined // true
null === null // true

// and
null = 'value' // ReferenceError
undefined = 'value' // 'value'
*/
