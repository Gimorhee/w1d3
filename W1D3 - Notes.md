# W1D3 : Objects in

Topics:
- Objects
- Primitive Data Types
- How data is passed to functions
- Using `this` inside object function

## Review of Primitives
- String : "Hello World"
- Number : 12, 1.5
- Boolean : true,false

Falsy Values:           Truthy Values:
- false                 - Literally anything else
- 0
- null
- undefined
- NaN
- ""

## Objects
Common terms:
Hash, Map, Key-value pair, Object, dictionary, lookup table, key-value pair set

```
var someObject = {}

var friends = {
  tyson: 'Sushi',
  hussain: 'Potato Salad',
  jason: 'Ramen'
}
```

Key: always "String"
Value: Anything
        - Number
        - String
        - Boolean
        - Array
        - Object
        - Function


Ways to interact with objects:

```
var name = 'danny'
friends[name] // "Sushi"
friends.name  // Undefined

Node:
var name = process.argv[2]
console.log("food for that person is: ", friends[name]);

```

* Javascript objects, {keys: values}, themselves are not iterable in the way that arrays are. Instead, need to use for... in statement.

