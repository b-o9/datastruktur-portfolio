// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

export default class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  remove(data) {
    if (!this.head) return null;
    
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null && currentNode.data !== data) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) return null;
    previousNode.next = currentNode.next;
  }

  getFirst() {
    return this.head ? this.head.data : null;
  }

  getLast() {
    if (!this.head) return null;

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode.data;
  }

  getFirstNode() {
    return this.head;
  }

  getNextNode(node) {
    return node ? node.next : null;
  }

  getLastNode() {
    if (!this.head) return null;

    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  getNodeWith(data) {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  removeFirstNode() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  removeLastNode() {
    if (!this.head) return;

    if (this.head.next === null) {
      this.head = null;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode.next !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    previousNode.next = null;
  }

  removeNode(node) {
    if (!this.head || !node) return;

    if (this.head === node) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode !== null && currentNode !== node) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode === null) return;

    previousNode.next = currentNode.next;
  }

  clear() {
    this.head = null;
  }

  size() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode !== null) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  dumpList() {
    let currentNode = this.head;
    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

    //ai
  [Symbol.iterator]() {
    let currentNode = this.head;
    return {
      next() {
        if (currentNode) {
          let value = currentNode.data;
          currentNode = currentNode.next;
          return { value, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
}
