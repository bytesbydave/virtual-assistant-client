# Typescript

The goal of Typescript is to be a static typechecker for JS programs. Javascript provides _dynamic typing_ whereas Typescript provides _static typing_
Typescript provides better errors and returns an error message before running the code

###

Commonly-used TypeScript syntax and patterns

```
const user = {
  name: 'Dave',
  id: 0
}
```

```
interface User {
  name: string;
  id: number;
}
```

```
const user: User = {
  name: 'Dave',
  id: 0
}
```

```
interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id
  }
}

const user: User = new UserAccount('Dave', 0)
```

```
function deleteUser(user: User) {}

function getAdminUser(): User {}
```

There are two syntaxes for building types: Interfaces and Types. You should prefer interface

###

Composing Types: Unions and Generics

####

With TypeScript, you can create complex types by combining simple ones. There are two popular ways to do so: with unions, and with generics.

**Unions**

- with a union, you can declare a type to be one of many types

```
type MyBool = true | false
type WindowStates = 'open' | 'closed' | 'minimized'
type LockStates = 'locked' | 'unlocked'
type PositiveNumbers = 1 | 2 | 3 | 4 | 5

function getLength(obj: string | string[]) {
  return obj.length
}
```

**Generics**

- provide variabls to types. An array without generics could contain anything. With generics can describe values within the array

```
type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{name: string}>

interface Backpack<Type> {
  add: (obj: Type) => void
  get: () => Type
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23);
```

#### Structural Typing System (Duck Typing)

```
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF" };
logPoint(color);
Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  Type '{ hex: string; }' is missing the following properties from type 'Point': x, y
```

###

Explain the effects of important compiler options

###

Correctly predict type system behavior in most cases

## The Basics

- Javascript provides _dynamic typing_ whereas Typescript provides _static typing_
- Typescript provides better errors and catches typos, uncalled functions, logic errors
- Type annotations aren’t part of JavaScript (or ECMAScript to be pedantic), so there really aren’t any browsers or other runtimes that can just run TypeScript unmodified. That’s why TypeScript needs a compiler in the first place - it needs some way to strip out or transform any TypeScript-specific code so that you can run it.
