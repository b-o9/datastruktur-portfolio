// Node class for a Doubly Linked List
class Node {
    constructor(data) {
      this.data = data;
      this.next = null; 
      this.prev = null; 
    }
  }
  
  export default class DoublyLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addFirst(data) {
      const newNode = new Node(data);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode; 
      } else {
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
      }
    }
  
    addLast(data) {
      const newNode = new Node(data);
      if (this.tail === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
      }
    }
  
    remove(data) {
      if (!this.head) return null;
  
      if (this.head.data === data) {
        this.removeFirst();
        return;
      }
  
      if (this.tail.data === data) {
        this.removeLast();
        return;
      }
  
      let currentNode = this.head;
  
      while (currentNode !== null && currentNode.data !== data) {
        currentNode = currentNode.next;
      }
  
      if (currentNode === null) return null;
  
      currentNode.prev.next = currentNode.next;
      if (currentNode.next) {
        currentNode.next.prev = currentNode.prev;
      }
    }
  
    removeFirst() {
      if (!this.head) return null;
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null; 
        return;
      }
  
      this.head = this.head.next;
      this.head.prev = null;
    }
  
    removeLast() {
      if (!this.tail) return null;
  
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null; 
        return;
      }
  
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  
    getFirst() {
      return this.head ? this.head.data : null;
    }
  
    getLast() {
      return this.tail ? this.tail.data : null;
    }
  
    nodeAt(index) {
      let currentNode = this.head;
      let currentIndex = 0;
  
      while (currentNode !== null && currentIndex < index) {
        currentNode = currentNode.next;
        currentIndex++;
      }
  
      return currentNode || null;
    }
  
    get(index) {
      const node = this.nodeAt(index);
      return node ? node.data : null;
    }
  
    indexOf(data) {
      let currentNode = this.head;
      let currentIndex = 0;
  
      while (currentNode !== null) {
        if (currentNode.data === data) {
          return currentIndex;
        }
        currentNode = currentNode.next;
        currentIndex++;
      }
  
      return -1;
    }
  
    insertAfter(index, data) {
      const currentNode = this.nodeAt(index);
      if (!currentNode) return null;
  
      const newNode = new Node(data);
      newNode.prev = currentNode;
      newNode.next = currentNode.next;
  
      if (currentNode.next) {
        currentNode.next.prev = newNode;
      }
  
      currentNode.next = newNode;
  
      if (currentNode === this.tail) {
        this.tail = newNode;
      }
    }
  
    insertBefore(index, data) {
      const currentNode = this.nodeAt(index);
      if (!currentNode) return null;
  
      const newNode = new Node(data);
      newNode.next = currentNode;
      newNode.prev = currentNode.prev;
  
      if (currentNode.prev) {
        currentNode.prev.next = newNode;
      } else {
        this.head = newNode;
      }
  
      currentNode.prev = newNode;
    }
  
    removeIndex(index) {
      const currentNode = this.nodeAt(index);
      if (!currentNode) return null;
  
      if (currentNode === this.head) {
        this.removeFirst();
      } else if (currentNode === this.tail) {
        this.removeLast();
      } else {
        currentNode.prev.next = currentNode.next;
        if (currentNode.next) {
          currentNode.next.prev = currentNode.prev;
        }
      }
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
  
    clear() {
      this.head = null;
      this.tail = null;
    }
  
    dumpList() {
      let currentNode = this.head;
      while (currentNode !== null) {
        console.log(
          `Node: ${currentNode.data}, Prev: ${currentNode.prev?.data || null}, Next: ${currentNode.next?.data || null}`
        );
        currentNode = currentNode.next;
      }
    }
  
    //også ai
    [Symbol.iterator]() {
      let currentNode = this.head;
      return {
        next() {
          if (currentNode) {
            const value = currentNode.data;
            currentNode = currentNode.next;
            return { value, done: false };
          } else {
            return { done: true };
          }
        },
      };
    }
  }
  