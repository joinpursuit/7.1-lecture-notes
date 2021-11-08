class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /**
   * adds a new node to the head of the list
   *
   * @param {*} data - data to add to head of linked list
   */
  insert(data) {
    // create a new node to hold our data
    const newNode = new Node(data);
    // new node should point to current head of list
    newNode.next = this.head;
    // update the head of our list
    this.head = newNode;
  }

  printItems() {}
}

let node = new Node("Yesi");
let list = new LinkedList(node);
list.insert("Angelina");

list.printItems();
/*
=> Angelina
=> Yesi
*/
