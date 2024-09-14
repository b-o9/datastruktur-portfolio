import SinglyLinkedList from './singlylinkedlist.js';

const list = new SinglyLinkedList();

// Test adding nodes
list.add('Node 1');
list.add('Node 2');
list.add('Node 3');
list.dumpList();

// Test size
console.log("Size:", list.size());

// Test getFirst and getLast
console.log("First:", list.getFirst());
console.log("Last:", list.getLast());

// Test remove node
list.remove('Node 2');
list.dumpList();

// Test iterator
for (const data of list) {
  console.log("Iterating data:", data);
}

// Test clearing the list
list.clear();
console.log("List after clearing:");
list.dumpList();
