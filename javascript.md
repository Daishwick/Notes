# Javascript

# Basic JS



# Scope and Hoisting

### Global Scope

---
Scope refers to an area in which you declare a variable
Global scope is the sum total of all your JS files

polluting the global scope is bad

use one application object:
```
const app = {
  productID: 12345,
  userName: "Joe",
  orderNumber: 789,
};

function showProductId() {
  console.log(app.productID);
}
showProductId();
```

### Function scope

---
Declaring a variable within a function is called a function scope
You cannot acces the variable outside the function
```
function showProductId() {
  let productId = 12345;
  console.log(productId);	// 12345
}
console.log(productId); 	// home.js:5 Uncaught ReferenceError: 													productId is not defined
showProductId();
```

```
function showProductId() {
  let productId = 12345;
  
  function fix(){
      let productId = 45678;
      console.log("in fix: ", productId);
  }
  fix();
  console.log("in productId: ", productId);
}

showProductId();
```

[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653993994922.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653993994922.png)

### var and Hoisting

---

Hoisting means that a value will be set to undefined. e.g.

```
console.log(productId);

var productId = 123;
```
returns `undefined`

If it's a function it will work because it gets "hoisted" to the top. e.g. 
```
showProductId();

function showProductId(){
    console.log(123);
} // 123
```
JS works in 2 passes;
- in the first pass JS knows there is a function
- in the second pass it'll work from top to down


**Use let and var to avoid hoisting problems**
### Undeclared Variables and Strings

--- 

Always declare variables. If you don't do that it'll get assigned to `window`.

```
productId = 1234;
console.log(productId); // 1234
```
Even without declaring this code works

**`"use strict";`** forces users to declare their variables

```
"use strict";

productId = 1234;
console.log(productId);
```
returns `Uncaught ReferenceError: productId is not defined at `

```
"use strict";

let productId = 1234;
console.log(productId); // 1234
``` 
declaring the variable fixed the problem

# Arrays

## Creating and Initializing Arrays
---

*To create an array use square brackets `[]`* 
```
// create an Array
let values = [] ;
```

Each item inside an array is called an element
*Value here has 3 elements*

```
let values = [1, 2, 3];
```

```
// initialize an array
let values = Array.of(1, 2, 3);
```
You can mix and match different data types within an array.
<br> **Best practice** is to use the **same data type** within an array
```
const values= ["a", "b", "c"];

console.log(values);
// all values (a b c)
```
An array is not a build in data type but an **object**
`console.log(typeof values)` will show `object`in the console.

```
const values= ["a", "b", "c"];

console.log(Array.isArray(values));
// true
```
This shows that value is an array.

[MDM Arrays link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Accessing Array Items

---
You can access an Array by using the `[]`.
*Remeber you start counting at 0, so `[0]` returns `a` and `[2]`returns `c`. If the value doesn't exist e.g. `[22]` you'll get `undefined`*
```
const values= ["a", "b", "c"];

console.log(values[0]);
// a
```

## Manipulating Arrays

---
`.push("added value")` adds an element at the **end** of the Array.
```
const values= ["a", "b", "c"];

values.push("d");

console.log(values);
// a b c d
```

`.pop()`removes the last element of the array
```
const values= ["a", "b", "c"];

const last = values.pop();

console.log(last);
console.log(values);
// c
// [a , b]
``` 
`.shift` removes the first element
```
const values= ["a", "b", "c"];

const first = values.shift();

console.log( first ); //a
console.log(values); // b, c
```

`.unshift` adds the first element

```
const values= ["b", "c"];

values.unshift("a");

console.log(values); // a, b, c
```

- removing an element -- assign it to a value
- adding an element -- `value.ArrayFunction("element you wish to add")`
## slice() and splice()

---

`slice()` creates a brand new array - that sliced away the elements in the array.
<br> `splice()` is used to insert or delete an element somewhere within the array.

**slice** 
```
const values= ["a", "b", "c"];
const newValues = values.slice(1, 2 );
console.log(newValues); //b
console.log(values); //a, b, c
```
**splice**
```
const values= ["a", "b", "c"];
values.splice(1, 1);
console.log(values); // a, c
```
`values.splice(1,1)` the first values`(1, x)`shows the index - this refers to `[b]`
<br>
The second value `(x, 1)` shows how  many items you want to remove

```
const values= ["a", "b", "c"];
values.splice(2, 0, "inserted");
console.log(values); // a, b, inserted, c
```
- `(2, x, x)` refers to the index - in this case it means before nr. 2(c)
- `(x, 0, x)` refers to how many items you wish to delete - in this case none
- `(x, x, "inserted") - shows the value you want to add

## Array Searching and Looping

---
#### .indexOf
*To find the index number of an array you use `.indexOf`*
```
const values= ["a", "b", "c", "d", "e"];

console.log(values.indexOf("c")); //2
console.log(values.indexOf("f")) // -1
```
<small> negative -1 shows you did the search but nothing came up.</small>
#### filter()
 
```
const values = ["a", "b", "c"];

const set = values.filter(function (item) {
  return item > "b";
});
console.log(set); // c
```
*The only item that's greater than b is c*

#### find()

```
const values = ["a", "bbb", "c"];

const found = values.find(function(item){
    return item.length > 1;
});
console.log(found);
```
*This will find an item with the length longer than 1*
#### forEach()
Calls out a function for each element
```
const values = ["a", "b", "c"];
values.forEach(function(item){
    console.log(item);
});
```
## Arrays in the DOM

---
remove a certain element on the page
```
const containers = document.getElementsByClassName("container");
containers[2].classList.add("d-none")
console.log(containers);
```

# Objects and the DOM

## Object Properties

---
DOM = Document Object Model

*This is an object* <br>
	*The object has properties*
```
let person = {
	name:"Jitske",
	age: 29,
	partTime: false
}

console.log(person.name); 		//Jitske
console.log(person.age); 		// 29
console.log(person.partTime); 	// false
``` 

`console.log(object.property);`

you can use a square bracket notation
`person["age"] = 24;`
<br> or you can use the .dot notation
`console.log(person.age); `


## Object Methods 

---
You can add functions to objects -> This is called methods.

```
let person = {
	name:"Jitske",
	age: 29,
	partTime: false,
    showInfo: function(){
        showMessage(this.name);
    }
};

person.showInfo();
```
`this.name` this refers to this object.

## Passing Objects to Functions

---

compare the following snippets:
```
 let message = "hello";

 function changeMessage(message){
     message = "Hi!";
 }

 changeMessage(message);

 showMessage(message);
 
 // hello
 ```
 
 and
 
 ```
 let person = {
    name:"Jitske",
    age: 29,
    partTime: false
};

function incrementAge(person){
    person.age++;
}

incrementAge( person ); // passes an object - this calls the function
If you leave this line out, you get 29

showMessage(person.age);
// 30

```

 

## Standard Built-in Objects

---
[built-in Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

**Shows the date**
```
let now = new Date();

showMessage( now.toDateString());
```

**Math**
```
showMessage( Math.abs(-42));
// Shows the absolute value (42) - removes negative
```

**String**
```
let s = "hello";
showMessage( s.charAt(0));
 // h
```

## The Document Object Model (DOM)

---

[DOM info MDM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model?retiredLocale=nl)


## Styling DOM elements

---
styling in DOM elements is done by using camelCase.
```
const header = document.getElementById("message");

header.style.color="blue";
```
## Detecting Button Clicks

---
```
const button = document.getElementById("see-review");

button.addEventListener("click", function() {
    console.log("click");
});

```


## Showing and Hiding DOM Elements
---
*Toggle this `div` on and off by clicking the `btn`*
```     <div id="review" class=""container d-none>
            <h4>Review Title...</h4>
            <p>Review text...</p>
        </div>
```

```
const button = document.getElementById("see-review");

button.addEventListener("click", function () {
  const review = document.getElementById("review");

  if (review.classList.contains("d-none")) {
    review.classList.remove("d-none");
    button.textContent = "CLOSE REVIEW";
  } else {
    review.classList.add("d-none");
    button.textContent = "SEE REVIEW";
  }
});
```

##Summary

---
**Object Propterties and Methos**
- obj.propName
- obj["propName"]

**Passing Objects to Functions**
- Functions cna change an object's properties and methods

**Standard Built-in Objects**
- Check MDM for built-in DOMS

**Styling DOM Elements**
- element.style.cssProp="value"  - ONLY CAMELCASE

**Detecting Button Clicks**
- element.addEventListener(event, fn)

**Showing and Hiding DOM elements**
- element.classList.add ( className)
- element.classList.contains ( className)
- element.classList.contains( className)

# Functions

## Function basics

---

```
function showMessage() {
	console.log("in a function");
}

showMessage();

showMessage();

// The message is shown twice
```

## Function Expressions

---

```
let fn = function() {
	console.log("Here is a message");
}
fn();
fn();

// the expression/function is used twice
``` 
## Passing Information to functions

---
```
let myFunction = function (message, firstName) {
	console.log(message);
    console.lg(firstName);
   
}

myFunction("Hi", "Jitske");
// Hi
// Jitske 
```

## Function return values

---

```
function getSecretCode(value){
    let code = value * 42 ;
    return code;
}
console.log (getSecretCode(2));

//84
```

## Function scope

---

functions have their own scope; parameters and local functions only work within that function.

```
let key = 42;

function getSecretCode(value) {
  let keyGenerator = function() {
    let key = 12;
    console.log("in keyGenerator:", key);   // 12
    return key;
  };
  let code = value * keyGenerator();
  console.log("in getSecretCode:", key);   // 42
  return code;
}
let secretCode = getSecretCode(2);
showMessage(secretCode);     // 24 
```

## Using Functions to Modify Web Pages 

---

```
function showMessage(message) {
  document.getElementById('message').textContent = message;
}

function changePercentOff(percentage) {
  document.getElementById("percentOff").textContent = percentage +"% OFF";
}
```

## Summary

---

**Functions** 
- function name(){...}
- let fn = function() {...}

**Passing Information to Functions**
- myFunction(a, b, c);

**Function Return Values**
- return value;

**Function Scope**
**Using Functions to Modify Web Pages**

# Program Flow

## Conditionals Using if()
---

if 5 is equal to 5  // true
```
if (5 === 5) {
console.log("Yes");
}
```

If 5 is greater than 10 // false
```
if (5 > 10) {
console.log("No");
}
```

If 5 is greater than or equal to 5 //true
```
if (5 >= 5) {
console.log("Yes");
}
```

If state is equal to FL then taxPercent is 7 
```
let state = "FL";
let taxPercent = 0;

if (state === "FL"){
    taxPercent=7;
}
console.log(taxPercent);

// 7
```
`!==`means not equal to

## Truthy and Falsy
--- 
| Falsy | Truthy |
| --- | ----------- |
| false | Everything NOT falsy |
| O | true |
| "" or '' (empty strings) | 0.5
| null | "0" (zero as a string)
| undefined
| NaN

JS uses inaccurate float equal numbers. To fix this you could always round off your numbers 
`if (1.1 + 1.3 === 2.4){
showMessage("true");
// nothing will happen because JS returns this as 2.400000000004
`

`()` put it in parenthesis so you can treat is as an object<br>
`.toFixed(2)` this will create a fixed number with 2 decimals, but it returns as a string - you do want a number. <br>
`+` Will make sure that it is a number not a string <br>

```
if ( +(1.1 + 1.3).toFixed(2) ===2.4){
    showMessage("true");
   }
   // true
```

## if ... else
---
if the state if FL then taxpercent = 7 else it's 0

```
let state ="FL";
let taxPercent;

if (state ==="FL"){
    taxPercent = 7;
} else {
    taxPercent=0;
}

console.log(taxPercent);

//7
```
If the state is equal to FL taxPercent = 7 else it's 0.
In this case the state is DC and not FL so it's "ELSE"  --> 0
```
let state ="DC";
let taxPercent;

if (state ==="FL"){
    taxPercent = 7;
} else {
    taxPercent=0;
}

console.log(taxPercent);
//0
```


```
let price = 20;
if (price > 10){
    showMessage("true");
} else if(price <5){
    showMessage("less than 5");
}

// true
```

```
let price = 2;
if (price > 10){
    showMessage("true");
} else if(price <5){
    showMessage("less than 5");
}

// less than 5
```

##Comparing === and ==

---

integer vs string is not equal 
```
if (1 === "1"){
	showMessage("true");
} else {
	showMessage("false");
}

// false
```

The `==` doesn't compare the type, so here it's just one versus one. Doesn't matter if it's an integer or string.
```
if (1 == "1"){
	showMessage("true");
} else {
	showMessage("false");
}

// true
``` 

use `!==` for inequality
use  `===` for equality 

## The Ternary Operator

---

``` 
// (condition) ? true-statement : false-statment;

let message = (price > 10) ? "expensive": "cheap";
showMessage (message); 
//expensive
```

`?` means if
`:` means else

## looping with ()for

---
```
for (let i = 0; i < 3; 1++) {
console.log(i);
}

// 0 1 2
```
`i = 0` `if i is less than 3` `plus 1 (++)`
So you start at 0 then do +1
1 is still less than 3 so you do + 1 again
2 is still less than 3 so you do + 1 again
3 is equal to three. this isn't logged and the loop has ended.

The condition here is very important and changes the result.
Make sure you don't get an infinte loop. 

## While() Loop

---

```
let count = 1;
while (count < 5) {
	console.log(count);
    count++;
}
// 1 2 3 4 
```

## do ... while() Loop

---
```
let count = 1;
do {
	console.log(count);
    count++;
} while (count < 5);
// 1 2 3 4 
```

# Types and Operators

## Numbers
---
<strong> typeof</strong> tells you the actual data type
```
let price = 20.99;

showMessage(typeof price);

```
[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653379926238.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653379926238.png)

*put price in quotes to create a string*

```
let price = '20.99';

showMessage(typeof price);

```
[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653380066515.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653380066515.png)

## Math / operators
---
let price = 20.99;
```
price = price +1;     	21.99			plus/adding	

price = price - 1;	19.99			substraction

price = price * 3;	62.97			times
	
price = price / 3;	6.996666666666666 	division

price = price % 3;	2.9899999999999984	remainder(modules)

```
<strong> shortcuts</strong>

```
price += 1;
price -= 1;
price *= 3;
price/= 3;
price %=3;
```


<strong> ++ increment operator </strong> means +1
<strong> -- de-crement operator </strong> means -1
```
let price = 20.99;

showMessage(++price);
console.log(price);
```

[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653381024070.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653381024070.png)

## Operator Precedence
---

*Same as math*

```
let price = 3 + 2 * 2;

console.log(price);

7
```

Just like in math -->  2 * 2 = 4 + 3 = 7.

```
let price = (3 + 2) * 2;

console.log(price);

8
```
3 + 2 = 5 + 3 = 8

---
[Check Mozzilla Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Number precision
---
<span style="color:red"> <strong>Precice numbers aren't always accurate</strong> </span>
```
let price = 1.1 + 1.3;

showMessage(price);
```
[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653381976933.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653381976933.png)

## Negative numbers
---
Are usually put in parenthesis ( )

```
let price = 20 - (-2);
```

```
let price = 0;

console.log(--price);

-1
```


## Strings
---
Strings are written between ' '  or " " (single or double quotes)
```
let message "Hello \"World\"";
```
Will show: <strong> Hello "World"</strong>
<br> Same works with single quotes

[Find the escape notation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

You can also use `` (backticks) for strings, they are used for interpolation.

```
let name = `Jitske`;
let message = `Hello ${name}`;

showMessage(message);
```
[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653382650463.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653382650463.png)

## Manipulating Strings
---
Use the + to add strings together -- <strong> Concatenation =*aaneenschakeling*</strong>
#### toLowerCase
```
let message = "Hello";
message = message.toLowerCase(); 
showMessage(message);

hello
```
#### toUpperCase
```
let message = "Hello";
message = message.toUpperCase(); 
showMessage(message);

HELLO
```
#### Substring
```
let message = "Hello";
message = message.substring(1); 
showMessage(message);

ello
```

[More string methods here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Properties
adds value to a string

```
let message = "Hello";
message=message.length;
showMessage(message)

returns 5
```

```
let message = "Hello";
message=message.length;
showMessage(typeof message)
```

[![[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653394037101.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653394037101.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653394275722.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653394275722.png)

**Numbers turn into a string not a value**
```
let message = "123";

showMessage(typeof message);
```

[![[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653394088469.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653394088469.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653394285601.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653394285601.png)

**string+2 - this just adds to a string not as a value/number**

```
let message = "123";
showMessage(message + 2);
```
[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653394316390.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653394316390.png)

### Converting Strings and Numbers

You can use `toString()` to convert a number to a string

```
let amount = 123;
amount = amount.toString();
showMessage(typeof amount);
```

![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653394441969.png)

You can use `Number.parseFloat("123"); ` to parse a string of numbers into a number 

When you do `Nubers.parseFloat("A123");`  you get  `NaN`
```
let amount = Number.parseFloat("123.12");
showMessage(typeof amount);
```

![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653394550299.png)
### Boolean Variables
---
`true` or `false` are called boolean

```
let saved = false;
showMessage(typeof saved);
```
![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653394966413.png)

You flip boolean values

```
let saved = false;
saved = !saved;
showMessage(saved);
```
<ol>
  <li> saved is true</li>
  <li> saved is not (!) true (thus false)</li>
</ol>
returns **FALSE** 


## null and undefined


```
let saved;
showMessage(saved);
console.log(saved);
```
will show `undefined` in console

``` 
let saved = 10
saved = null;
showMessage(saved);
console.log(saved);
```

will show `null` in console and nothing (" ") in the browser

- undefined is assigned by JS
- null is assigned by developers


## Objects and Symbols
---
for objects you use `{}`

```
let person = {
	firsName: "Jitske",
    lastName: "Riswick"
};
console.log(typeof person)
```
returns `object`

```
let person = {
  firsName: "Jitske",
  lastName: "Riswick",
};
console.log(person.firsName);
```

returns `Jitske` .

1. You take from the object (person)
2. Then you take a property (firstName)

# Variables

## Declaring variables
___
```js
let 
const
var
```

```JS
let total = 149.99;
let product = `Hiking Boots`;
let discounted = true;
```


strings (words) are put between quotes

true and false are called boolean values -- doesn't need quotes.


## Rules for naming variables
---
<ul>
  <li> a (alleen voor i, j of e)</li>
  <li><strong> account</strong> </li>
  <li> account_99</li>
  <li> <strong>accountNumber</strong> </li>
  <li> _accountNumber </li>
  <li> $accountNumber </li>
  <li> _123 </li>
  <li> __proto</li> 
</ul>  

---

## Constants
---
```
const price = 40;

price = 49.99;

showMessage(price);
```

[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653378837517.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653378837517.png)

if the variable is not going to change == const
if the variable is going to change == let

## The var variable
---
<span style="color:red"> var is prone to errors<br></span>

*Normally you code from top to bottom; if you make a mistake and don't do that <strong>var</strong> won't show an error&*
```
showMessage(price);
console.log(price);

var price = 25;
```

[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653379215089.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653379215089.png)


*Now with the variable <strong> let </strong>*
```
showMessage(price);
console.log(price);
let price = 25;
```

[![](http://wiki.nuccie.local/uploads/images/gallery/2022-05/scaled-1680-/image-1653379514835.png)](http://wiki.nuccie.local/uploads/images/gallery/2022-05/image-1653379514835.png)

This does give an error & it will also show the original message.

# Basics

# Basics 101

1. You can create strings with " or '
2. .length is a property that gives you the length of a string
3. .toUpperCase() is a function that converts the string to upper case
4. .toLowerCase() is a function that converts the string to lower case
5. parentheses () on functions are required. .length is a property that is already pre-computed; therefore, it does not need parentheses.
6. console.log(...) is used for debugging and is NOT a replacement for return.
7. Square brackets [index] are used to access a specific index from a string
8. The index starts at 0. So the first character is index 0
9. You can combine it with the length of a string to get another character in another position
10. A substring is a part or a portion of a string.
11. string.substring(indexStart, indexEnd) is used to return a portion of the string.
12. indexStart: the position of the first character you'd like to include.
13. indexEnd: the position of the first character you'd like to ignore.
14. the indexEnd argument is optional which means you can leave it out.
15. The + operator is used to add 2 numbers
16. The + operator is used to concatenate 2 strings
17. A template string is a string created with the backtick character: `
18. Template strings can span multiple lines
19. Template strings support interpolation with the ${variableName} syntax

# Throw error

function ensure(value) {
  if (value===undefined){
    throw new Error ('no arguments');
  }
  return value;
}

try {
  console.log(ensure());

# Test snippets



# Attribute manipulation

```JS
<div id='numbers'>
 <span>1</span><span>2</span><span>3</span><span>4</span><span>5</span>
 <button id='btn' onclick='toggleEvenColor()'>Toggle even number highlighting</button>
</div>
function toggleEvenColor() {
  let spanElements = document.querySelectorAll('#numbers span:nth-child(2n)');
  spanElements.forEach(function(item) {
     item.style.backgroundColor = item.style.backgroundColor !== 'yellow' ? 'yellow' : 'transparent';
   });
 }
 ```
 You select even numbers by - ('#numbers span:nth-child(2n)')
 #numbers is id.
span:nth-child(2n)  - selects the second element in a list - continuesly because of the (n)
 
 
 
 !== 'yellow' ? 'yellow' : 'transparent'  --> if the background color is not equal to yellow, then it turns yellow, otherwise it turns transparent.

# Adding lists and paragraphs

```JS
function showCustomers(customers, targetList) {
var ul=document.getElementById('customer');
for (var i=0 ;i < customers.length ; i++) {
    var li= document.createElement('li');
    var paraName=document.createElement("p");
    var nameNode=document.createTextNode(customers[i]['name']);
    paraName.appendChild(nameNode);

    li.appendChild(paraName);
    targetList.appendChild(li);

    paraName.addEventListener("click", function(e){
     let x = e.target.parentElement;
     if ( x.childNodes.length ==1){
         for (var j = 0 ; j < customers.length;j++){
             if (e.target.innerHTML == customers[j]['name']){
                 var paraEmail = document.createElement('p');
                 var emailNode = document.createTextNode(customers[j]['email']);
                 paraEmail.appendChild(emailNode);
                 x.appendChild(paraEmail);
             }
            }
        } else {
            x.removeChild(x.childNodes[1]);
        }
       })
    }
}
```JS

# For loops & arrays

# Two Sum

Write a function that, when passed an array and a target sum, returns, efficiently with respect to time used, two distinct zero-based indices of any two of the numbers, whose sum is equal to the target sum. If there are no two numbers, the function should return null.

For example, findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10) should return an array containing any of the following pairs of indices:

0 and 3 (or 3 and 0) as 3 + 7 = 10
1 and 5 (or 5 and 1) as 1 + 9 = 10
2 and 4 (or 4 and 2) as 5 + 5 = 10

```JS
/**
 * @param {number[]} numbers The array of numbers.
 * @param {number} sum The required target sum.
 * @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
  for (let i=0 ; i< numbers.length; i++) {
    for ( let j=numbers.length -1 ; j>=0; j--){
      if (i !== j && numbers[i] + numbers[j]=== sum ){
        return [i,j]
      }
    }
  }
  
  return null
} 

const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
console.log(indices);
```

# Parentnode & clickevent

```JS
function setup() {
  var upClick = document.querySelectorAll("button");
  for (var i = 0; i < upClick.length; i++) {
    upClick[i].addEventListener("click", function () {
      if (this.innerHTML === "Up!") {
        
        var listItem = this.parentElement;
        if (listItem.previousElementSibling)
        listItem.parentNode.insertBefore(
          listItem,
          listItem.previousElementSibling
        );
      }
      if (this.innerHTML === "Down!") {
        var listDown = this.parentElement;
       if (listDown.nextElementSibling);
        listDown.parentNode.insertBefore(listDown.nextElementSibling, listDown);
      }
    });
  }
}
```

```HTML
// Example case
document.body.innerHTML = `<ol>
  <li><button>Up!</button>Taco<button>Down!</button></li>
  <li><button>Up!</button>Pizza<button>Down!</button></li>
  <li><button>Up!</button>Eggs<button>Down!</button></li>
</ol>`;

setup();
document.getElementsByTagName("button")[2].click();

console.log(document.body.innerHTML);

```

# Loop - DOM manipulation

This one works

```JS
function appendChildren(decorateDiv) {
  var allDivs = document.querySelectorAll("div");

  for (var i = 0; i < allDivs.length; i++) {
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

//appendChildren(function(div) {});
console.log(document.body.innerHTML);

```

This one doesn't - because getElementsByTagName; retags each div over and over again, so it will keep on adding. 

Whereas querySelectorAll grabs all divs in one go.

```JS
function appendChildren(decorateDiv) {
  var allDivs = document.getElementsByTagName("div");

  for (var i = 0; i < allDivs.length; i++) {
    var newDiv = document.createElement("div");
    decorateDiv(newDiv);
    allDivs[i].appendChild(newDiv);
  }
}

// Example case. 
document.body.innerHTML = `
<div id="a">
  <div id="b">
  </div>
</div>`;

//appendChildren(function(div) {});
console.log(document.body.innerHTML);
```

# Closures (with index)

```JS
function registerHandlers() {
  var link = document.getElementsByTagName('a');
  for (var i = 0; i < link.length; i++) {
    as[i].onclick = (function() {
	  link indexNumber=i;
	  return function(){
		  alert(indexNumber);
		  return false;
	  }
    })();
  }
}
```

If you click on a link, that you tag by using the document.getElementsByTagName('a);
you will get a number that is linked to the index - so Yahoo would return an alert stating 0

```HTML
<body>
  In my life, I used the following web search engines:<br/>
  <a href="//www.yahoo.com">Yahoo!</a><br/>
  <a href="//www.altavista.com">AltaVista</a><br/>
  <a href="//www.google.com">Google</a><br/>
</body>
```

# Dom & attribute manipulation

```JS
function newMessage(topicName) {
  var changeColor = document.querySelector(`p[data-topic-name="${topicName}"]`);
  if(changeColor !== null){
   changeColor.style.backgroundColor="red";

   }
 
}

// Example case
document.body.innerHTML = `<div>
  <p data-topic-name="discussion">General discussion</p>
  <p data-topic-name="bugs">Bugs</p>
  <p data-topic-name="animals">Animals</p>
</div>`
```

Write the function newMessage, which receives the name of the topic as the parameter. Function should change the background color of the p tag to red where the data-topic-name is topicName. A topicName that doesn't have a matching data-topic-name should be ignored.

  Example case: Correct answer 
  The topic with the newest message is red: Correct answer 
  Function newMessage is called with some topicName(s) that do not exist: Correct answer

# Selectors

```JS
function endangeredSpecies(continent, species) {
  let area = document.querySelector(`div [data-continent="${continent}"]`);
  let animal = area.querySelector(`div [data-species="${species}"]`).innerHTML;

  let endangeredSpecies = `${animal}`;
  return animal
}

// Example case
document.body.innerHTML =
`<div>
  <ul data-continent="North America">
    <li data-species="California condor">Critically Endangered</li>
    <li data-species="American bison">Near Threatened</li>
  </ul>
  <ul data-continent="Europe">
    <li data-species="Cave bear">Extinct</li>
  </ul>
</div>`;

console.log(endangeredSpecies('North America', 'American bison')); // should print 'Near Threatened'
```

# Recursive function

```JS

```

parseInt()
Parses its argument and returns an integer

.split turns string("55555") into array with text("[0]", "[1]", "[2]")
.map(function(poep){return parseInt(poep); - this combi turns it into an array with only numbers 
[0][1][2][3]

optelSom += huidigGetal betekent optelSom = optelsom + huidigGetal

let optelSom = 0; 
	for (let i=0;i < membershipId.length; i++) {
    let huidigGetal = parseInt(membershipId[i]);
            optelSom += huidigGetal;
            }
            return checkdigit(optelSom+"");  optelSom is een getal door parseInt
            +"" verandert het terug naar een string. 
		}	
	}
	            
#complete function 

```JS
function checkdigit(membershipId) {
    if (membershipId.length === 1) {
        return membershipId;
    } else {
        let optelSom = 0;
        for (let i = 0; i < membershipId.length; i++) {
            let huidigGetal = parseInt(membershipId[i]);
            optelSom += huidigGetal;
        }

        return checkdigit(optelSom + "");
    }
}

console.log(checkdigit("55555"))
```

# Removing parent

You create btn and target it by it's classname - which is remove:
```JS
<div class="image">
  <img src="https://bit.ly/3flyaMj" alt="Second">
  <button class="remove">X</button>
</div>`;
```


```JS
function setup() {
  let btn =document.getElementsByClassName("remove")
  for (let i= 0; i < btn.length;i++){
    btn[i].addEventListener('click', function(clickX){
      clickX.currentTarget.parentNode.remove();
    }, false);
  }
}
```

# Splits & dates

```JS
function formatDate(userDate) { 
  let day = userDate.split("/")[1];
  let month = userDate.split("/")[0];
  let year = userDate.split("/")[2];
  
  if (month.length <2 )
    month= '0' +month;
  if (day.length <2)
    day='0' +day;
  
  return `${year}${month}${day}`;
}

console.log(formatDate("01/31/2014"));
``` 

formatDate Month always gets +1 because with 0 - this doesn't apply for days and years.

```JS
function (formatDate(date) {
  let day = (date.getDay());
  let month = (date.getMonth() +1);
  let year = (date.getYear());
  
  if (month.length <2)
    month='0'+ month;
  if (day.length <2)
    day = '0' + day;
  
  return `${year}${month}${day}`;
  }

# Removing a property

```JS
function removeProperty(obj, prop) {

  if (obj.hasOwnProperty(prop)) { 
    delete obj[prop];
    return true;
  }

  return false;
}
```

# Syntax and Operators

# JavaScript Syntax and Operators



# Using Math and Comparison operators



# All About the Switch Statement

### Switch statement
---
**Switch** - use instead of multiple `if ... else`statements

**case** statements compare to expression in switch(ex)

**break** statements exit out of each case

**default** statement is for no matches

```
 function simpleSwitch() {
        let productId = 2;
        switch (productId) {
          case 1:
            console.log("product 1");
            break;
          case 2:
            console.log("product 2");
            break;
          case 3:
            console.log("product 3");
            break;
          default:
            console.log("unknown");
            break;
        }
      }
    </script>
    
    // product 2
```

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button onClick="multipleCase();">Multiple Case Statements</button>
    <button onClick="forgetABreak();">Forget a break</button>
    <script>
      function multipleCase() {
        let color = "Red";
        switch (color) {
          case "Red":
          case "Pink":
            console.log("The color is red");
            break;
          case "blue":
          case "Light Blue":
          case "Dark Blue":
            console.log("The color is blue");
        }
      }
    </script>
  </body>
</html>
```

### Block-level scope
- a switch statement is a block
- Each case statement is not a block
- If you want wrap it inside {} you can create a block

 
 *By wrapping a block of code in braces, any variable declared within that block is only visible within the block, and is released once the block ends.*

# Difference Between for/in and for/of

### For/in Statement
- Iterates over elements ob object (properties and methods)
- Returns key ( property / method) name
- object [key] returns value


### For/of Statement
- Iteratues over values in array, string etc.
- Returns object for each iteration. 

### Break and Continue
- Break: Leave a loop early
- Continue: Next iteration of a loop

### Labeled Statement
- define a location to "goto"
- not recommended for use

just don't do it

# JavaScript Variables and Types



# Using Variables and Types

### Using Template Literals
---

### Create a tagged Template Literal
---

### Using Template Literals

