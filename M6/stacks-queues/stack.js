class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

// building a linked list implementation of a Stack
class Stack {
  // constructor
  constructor(top = null) {
    // the Stack only needs to keep tabs on the top Node --
    // the top Node's pointer will lead to the next Node
    this.top = top;
  }

  // isEmpty() check if there are nodes in the stack
  isEmpty() {
    // returns a boolean value
    // of whether the top Node is null OR not null
    return this.top === null;
  }

  // push(data) to add node to the stack with new data
  push(data) {
    // define a new Node with some data
    const newItem = new Node(data);
    // add a value for next that points to the current top Node
    newItem.next = this.top;
    // set the top property to the new Node
    this.top = newItem;
  }
}

// Add Months to the Stack
const monthStack = new Stack();

// loop through the months array
for (let month of months) {
  // add a new item to the stack for each element
  monthStack.push(month);
}

// inspect will print any linked list to the desired depth and show all pointers
const { inspect } = require("util");
console.log(inspect(monthStack, { colors: true, depth: 12 }));
