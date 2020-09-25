import * as myfoomod from './myfoomod';
import * as myfoomod1 from './lib1/myfoomod1';
import * as myfoomod2 from 'lib2/myfoomod2';

// Test
console.log(myfoomod);
console.log(myfoomod.MyFooMod);
console.log(new myfoomod.MyFooMod().toUpper('hello'));

// Test
console.log(new myfoomod1.MyFooMod1().toUpper('hello'));

// Test
console.log(new myfoomod2.MyFooMod2().toUpper('hello'));

