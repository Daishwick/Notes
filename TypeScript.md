# TypeScript

## What is TypeScript

TypeScript is a Static type system that describe the shapes and behaviors of what our valuel will be when we run our program.
A type-checker like TypeScript uses that information and tells us when things might be going off the rails.

_e.g._

```
const message = "hello!";
message();

    This expression is not callable.
    Type 'String' has no call signatures.
```

## Non-exception Failures

runtime errors come up because <a href="https://tc39.es/ecma262/"> the ECMAScript
specification </a> has explicit instructions on how the language should behave when it runs into something unexpected.

## tsc, the TypeScript compiler

```
npm install -g typescript
```

_This installs the TypeScript Compiler tsc globally. You can use npx or similar tools if you'd prefer to
run tsc from a local node_modules package instead._

### Emitting with errors

```
tsc --noEmitOnError hello.ts
```

This stops the `hello.js` from being updated

### Explicit types

Quick fix:
Date() is in JS a string --> new Date() will fix the problem

```
function greet(person: string , date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet ("Brendan", Date());

//This will return
// Argument of type 'string is not assignable to parameter of type 'Date'.
// Because calling Data in JS returns a string.
// Constructing Date with new Data() will fix the error



function greet(person: string , date: Date){
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Brendan", new Date());
```

### Erased types

```

let persoon = {
    name: "Thomas",
    age: 26
}

class Person {
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    private name: string;
    private age: number;
}

let thomas = new Person("Thomas", 26);
let jitske = new Person("Jitske", 21);
let persons = [thomas, jitske]

for (let i = 0; i < persons.length; i++) {
    console.log((persons[i]))
}
```
