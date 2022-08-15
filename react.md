# React

# React Basics

# React

Every component starts with

```Javascript
import React from "react";

```

It is better if your component has its own CSS

```Javascript
import "./weather.css";

```# Closures & functions within functions

Components in JS have uppercase

Functions within said component are lowercase Functions in functions are written like this:

```Javascript
export default Weather function Weather(props) {
  function fahrenheitTemperature() {
    let temperature = props.temperature * 1.8 + 32;
    return Math.round(temperature);
  }
  return (
    <div>
      The temperature in {props.city} is {props.temperature}°C and{" "}
      {fahrenheitTemperature()}°F
    </div>
  );
}

```

adding {" "} adds a space

Check [this website](https://codesandbox.io/s/js-closures-forked-i9wor?file=/src/index.js) for a preview# React events

Sample Sandbox [link](https://codesandbox.io/s/react-events-forked-g7lwk?file=/src/index.js)

How to create a link

```JS
<a href="/"> onClick={showFahrenheit}>

```

add the function - onClick event

```JS
function showFahrenheit(event){
    event.preventDefault();
}


```

Complete it with eventlistener, which should alert the temperature in fahrenheit

```Js
return default function Weather(props) {
    function showFahrenheit(event) {
        event.preventDefault();
        let temperature = (props.temperature) * 1.8 + 32;
        alert (`The temperature in fahrenheit is ${temperature}`)
    }
    return (
        <p>The weather in {props.city} is {props.temperature}°C | <a href="/" onClick={showFahrenheit}> °F </p>
    )
}


```

<div id="bkmrk-adding-an-event-list"># Adding an event listener

```
<span class="hljs-tag"><<span class="hljs-name">button</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{sayHi}</span>></span>
  Say Hi
<span class="hljs-tag"></<span class="hljs-name">button</span>></span>
```

## Event listener function

```
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-keyword">function</span> <span class="hljs-title function_">Hello</span>(<span class="hljs-params"></span>) {
  <span class="hljs-keyword">function</span> <span class="hljs-title function_">handleClick</span>(<span class="hljs-params">event</span>) {
    event.<span class="hljs-title function_">preventDefault</span>();
    <span class="hljs-title function_">alert</span>(<span class="hljs-string">"Hello World"</span>);
  }

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag"><<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"/"</span> <span class="hljs-attr">onClick</span>=<span class="hljs-string">{handleClick}</span>></span>
      Say Hi
    <span class="hljs-tag"></<span class="hljs-name">a</span>></span></span>
  );
}
```

# Other events

**Clipboard Events**

```
onCopy onCut onPaste
```

- - - - - -

**Composition Events**

```
onCompositionEnd onCompositionStart onCompositionUpdate
```

- - - - - -

**Keyboard Events**

```
onKeyDown onKeyPress onKeyUp
```

- - - - - -

**Focus Events**

```
onFocus onBlur
```

- - - - - -

**Form Events**

```
onChange onInput onInvalid onSubmit
```

- - - - - -

**Mouse Events**

```
onClick onContextMenu onDoubleClick onDrag onDragEnd onDragEnter onDragExit
onDragLeave onDragOver onDragStart onDrop onMouseDown onMouseEnter onMouseLeave
onMouseMove onMouseOut onMouseOver onMouseUp
```

- - - - - -

**Pointer Events**

```
onPointerDown onPointerMove onPointerUp onPointerCancel onGotPointerCapture
onLostPointerCapture onPointerEnter onPointerLeave onPointerOver onPointerOut
```

- - - - - -

**Selection Events**

```
onSelect
```

- - - - - -

**Touch Events**

```
onTouchCancel onTouchEnd onTouchMove onTouchStart
```

- - - - - -

**UI Events**

```
onScroll
```

- - - - - -

**Wheel Events**

```
onWheel
```

- - - - - -

**Media Events**

```
onAbort onCanPlay onCanPlayThrough onDurationChange onEmptied onEncrypted
onEnded onError onLoadedData onLoadedMetadata onLoadStart onPause onPlay
onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend
onTimeUpdate onVolumeChange onWaiting
```

- - - - - -

**Image Events**

```
onLoad onError
```

- - - - - -

**Animation Events**

```
onAnimationStart onAnimationEnd onAnimationIteration
```

- - - - - -

**Transition Events**

```
onTransitionEnd
```

- - - - - -

**Other Events**Event names:

```
onToggle
```

</div># States

### Import useState

When using useState, always put this on top.

```JavaScript
import React, { useState } from "react";

```

### Create a state

Always use the name of the variable with set+Nameofthevariable \[apple, setApple\]

- useState() always accepts 1 argument.
- argument always refers to the value; e.g.` [name, setName] = useState("Jitske");`

```JS
- useState(null) if argument is unknown
- useState({}) an empty object
- useState([]) an empty array
- useState("Jitske") a string
- useState(props.temperature) is an integer  

```

```JS
export default function Hello(props) {
  let [name, setName] = useState("Matt");
  
  return (
    <h1>
    {name}
    </h1>
    );
}

```

### Updating a state

**Always** update it inside a callback function (event listener, AJAX, callback etc.) **Never** update the state when the component loads

```js
export default function Hello(props){
 let [name , setName] = useState("Jitske");
 function updateName() {
   let newName = prompt ("What is your name?");
   setName(newName);
 }
 
 return (
       <h1> 
   		{name}
       </h1>
       <button onClick={updateName}>
           Update name
     </button>
	);
}

```# React Loops

# React Loops

##### The following loops through an array of strings

```JS
export default function Cities() {
  let cities = ["Paris", "Tokyo", "New York", "Lisbon"];

  return (
  <div className="Cities">
      <ul>
          {cities.map(function (city){
              return <li>{city}</li>; 
             
          } )}
      </ul> 
  </div>
  );
}

```

{cities.map} basically means cities.loopthrough

React will complain about a key missing in the Li. simply add:

```JS

 <ul>
          {cities.map(function (city, index){
              return <li key={index}>{city}</li>; 
             
          } )}

```

##### Double arrow function

it's the same thing, just written differently

```JS
let cities = ["Paris", "Tokyo", "New York", "Lisbon"];

return (
  <ul>
    {cities.map((city, index) => {
      return <li key={index}>{city}</li>
    })}
  </ul>
);

```

[homework lesson 6; react loops](https://codesandbox.io/s/react-loops-challenge-forked-06m8g1?file=/src/Countries.js)

```JS
import './App.css';
import Cities from "./Cities";

function App() {
    let europeanCities=[
        {
            name: "Paris",
            temp: 12,
        },
        {
            name: "Lisbon",
            temp: 30,
        }]

    let americanCities=[
        {
            name: "New York",
            temp: 12,
        },
        {
            name: "Chicago",
            temp: 5,
        }]
  return (
    <div className="App">
      <h1>React Loops</h1>
        <Cities cities={europeanCities}/>
        <Cities cities={americanCities}/>
    </div>
  );
}

export default App;

```

```JS
import React from "react";

export default function Cities(props){
    return <div className="Cities">
        <div>
        {props.cities.map(function (city, index){
              return  <li key={index}>
                  It is {city.temp} in {city.name}.</li>
    })}
        </div>
    </div>;
     }
//map function always uses a variable; cities -> city; students ->student. React also always wants a number; use index.
// //{cities.map((city, index) =>
// return <li key={index}>{city}</li>
// the => replaces the word function


```# React AJAX

### Add axios to your project

add dependency

### import axios

```js
import React, { useState } from "react";
import axios from "axios";

```

add useState, show temperature

```js
export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${
    props.city
  }&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
  axios.get(url).then(showTemperature);

  if (temperature) {
    return (
      <p>
        The temperature in {props.city} is currently {Math.round(temperature)}°C
      </p>
    );
  } else {
    return <p>Loading temperature for {props.city}..</p>;
  }
}

```

https://codesandbox.io/s/react-ajax-lesson-tvpsk?file=/src/Weather.js:69-652

https://codesandbox.io/s/react-ajax-forked-izir5d?file=/src/Weather.js# React Search

```JS
import React, { useState } from "react";

export default function SearchEngine(){
  let [city, setCity] = useState ("")
  function handleSubmit(event){
    event.preventDefault();
    alert(`Searching for ${city}`)
  }

  function updateCity(event){
    setCity(event.target.value);
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="search" onChange={updateCity}/>
      <input type="submit" value="search" />
  </form>
  );
}

```# React: Getting Started



# Why React

## Pros and cons 

React is a JavaScript library for building uses interfaces; NOT a framework. 

| Pros | Cons |
| --- | ----------- |
| The "Virtual"browser(vs. DOM API) | Title |
| "Just JavaScript" | Text |
| React Native | Text |
| Battle-tested  | Text |
| Declarative language (model UI and state)| Text |

Frameworks:
- Do things a certain way
- Hard to deviate


## Basic concepts
1) Components
	- like functions <3
    - Input: props, state | Output: UI
    - Reusable and composable
    - `<Component />` 
    - Can manage a private state
2) Reactive updates
	- React will react
    - Take updates to the browser
3) Virtual views in memory
	- Generate HTML using JavaScript
    - No HTML template language
    - Tree reconciliation
    
## React Components

- Always Upper Case 

```
function Button() {
	return <button>TEST</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
```

## useState

useState() results:
- state object (getter)
- updater function (setter)

const [currentStateValue, functionToSetNewStateValue] = useState(initialStateValue);

onClick={functionRef}

```
function logRandom(){
  console.log(Math.random());
}

function Button() {
  const [counter, setCounter] = useState(0);
	return <button onClick={}>{counter}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
```

Inline Arrow function definition
```
function logRandom(){
  console.log(Math.random());
}

function Button() {
  const [counter, setCounter] = useState(0);
	return <button onClick={() => console.log(Math.random())}>{counter}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
```

# JavaScript Crash Course for React

{{{}}} - nested block scopes

a block scope is created by a pair of curly braces

``` 
{
  // Block Scope
}

if (true) {
  // Block Scope
}

for (let i = 1; i <= 10; i++) {
  // Block Scope
}

function sum(a, b) {
  // Function Scope
  var result = a + b;
}

sum(4 + 3);
```

```
// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};
```


```
const answer1 = 42;

/*
	A big program here...
*/

answer1; // is still 42;



// vs



let answer2 = 42;

/*
	A big program here...
*/

answer2; // might have changed;

```


```
const X = function() {
  // "this" here is the caller of X
};

const Y = () => {
  // "this" here is NOT the caller of Y
  // It's the same "this" found in Y's scope
};

/*
  
  Regular functions give access to their "calling" environment while arrow functions give access to their "defining" environment 
  
  
  The value of the "this" keyword inside a regular function depends on HOW the function was CALLED (the OBJECT that made the call).
  
  The value of the "this" keyword inside an arrow function depends on WHERE the function was DEFINED (the SCOPE that defined the function).
  
  */

// console.log(this);

const testerObj = {
  func1: function() {
    console.log('In func1', this);
  },

  func2: () => {
    console.log('In func2', this);
  }
};

testerObj.func1();
testerObj.func2();

// const square1 = (a) => {
// 	return a * a;
// };
// const square2 = (a) => a * a;
// const square3 = a => a * a;

display.log([1, 2, 3, 4].map(a => a * a));
```
### Object Literals
```
/*
      const obj = {
        key: value
      };
*/

const mystery = 'answer';
const InverseOfPI = 1 / Math.PI;

const obj = {
	p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [mystery]: 42,
  InverseOfPI,
};

console.log(obj);
```

### Destructuring

```
// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const {PI, E, SQRT2}  = Math;

// Somewhere in a React App
// const {Component, Fragment, useState} = require('react');
// useState();

// const circle = {
//   label: 'circleX',
//   radius: 2,
// };

// const circleArea = ({radius}, {precision = 2} = {}) =>
//   (PI * radius * radius).toFixed(precision);

// console.log(
//   circleArea(circle, { precision: 5 })
// );

// const [first, second,, forth] = [10, 20, 30, 40];

// const [value, setValue] = useState(initialValue);
```

```
const [first, ...restOfItems] = [10, 20, 30, 40];

// console.log(first);
// console.log(restOfItems);

const data = {
	temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const {temp1, temp2, ...person} = data;

const newArray = [...restOfItems];

const newObject = {
  ...person
}
```

### Template strings

```
const greeting = "Hello World";

const answer = 'Forty Two';

//template string:

const html = `
  <div>
    ${Math.random()}
  </div>
`;

html
```

### Classes

```
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello ${this.name}!`);
  }
}

class Student extends Person {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
  greet() {
    console.log(`Hello ${this.name} from ${this.level}`);
  }
}

const o1 = new Person("Max");
const o2 = new Student("Tina", "1st Grade");
const o3 = new Student("Mary", "2nd Grade");
o3.greet = () => console.log('I am special!');

o1.greet();
o2.greet();
o3.greet();
```

# The GitHub Cards App

```
const testData = [
    {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
    {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
	</div>
);

class Card extends React.Component {
	render() {
  	const profile = this.props;
  	return (
    	<div className="github-profile">
    	  <img src={profile.avatar_url} />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
    	</div>
    );
  }
}

class Form extends React.Component{
  state= {userName: ''};
   handleSubmit = async(event) => {
   event.preventDefault();
   const resp = await  axios.get(`https://api.github.com/users/${this.state.userName}`);
   this.props.onSubmit(resp.data);
     this.setState({userName: ""})
 };
  render(){
    return (
    <form onSubmit={this.handleSubmit}>
        <input type="text" value= {this.state.userName} onChange= {event => this.setState({userName: event.target.value})}   placeholder="GitHub username"  required/>
        <button>Add Card </button>
        </form>
      );
  }
}

class App extends React.Component {
  state = {
    profiles: testData,
  };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles:[...prevState.profiles, profileData]
    }))
    console.log('App', profileData)
  };
  render() {
  	return (
    	<div>
    	  <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles}/>
    	</div>
    );
  }	
}

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
```

