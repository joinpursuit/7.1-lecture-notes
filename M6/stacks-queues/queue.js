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

// define class Queue
class Queue {
  // write a constructor
  constructor() {
    // first -- the first Node in line, where we DEQueue
    this.first = null;
    // last -- the last Node in Line, where we ENQueue
    this.last = null;
    // size -- to keep track of number of Nodes in Queue
    this.size = 0;
  }

  // enqueue method adds an new Node to the queue
  // takes data as an argument
  enqueue(data) {
    // create a new Node with the data
    const newItem = new Node(data);

    // check if first item is null
    if (this.first === null) {
      // make the first item equal to new Node
      this.first = newItem;
      // and the last item equal to new Node
      this.last = newItem;
    } else {
      // the next property of the last item is equal to the new Node
      this.last.next = newItem;
      // the last property is equal to the new item
      this.last = newItem;
    }
    this.size++;
  }

  // isEmpty checks if the first item is null OR not null
  isEmpty() {
    return this.first === null;
  }
}

let monthsQueue = new Queue();

// loop through each month
for (let month of months) {
  // enqueue each month into te end of the Queue
  monthsQueue.enqueue(month);
}

const { inspect } = require("util");
console.log(inspect(monthsQueue, { depth: 12 }));
console.log(
  "first: ",
  monthsQueue.first,
  "last: ",
  monthsQueue.last,
  "size: ",
  monthsQueue.size,
  "is empty? ",
  monthsQueue.isEmpty()
);
