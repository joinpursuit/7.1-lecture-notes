class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let node1 = new Node("Sarah");
let node2 = new Node("Angelina");
let node3 = new Node("Yesenia");
let node4 = new Node("Hafiz");
let node5 = new Node("Alvi");

// create the links between nodes:
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node3;

console.log(node1);
