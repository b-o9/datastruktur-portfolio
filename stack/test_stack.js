// test_stack.js

import { Stack } from './stack.js'; // Import the Stack class

// Create a new stack
const stack = new Stack();

// Push some items onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Output the results in the browser
const output = document.getElementById('output');

output.innerHTML += `<p>Stack size: ${stack.size()}</p>`;
output.innerHTML += `<p>Top of stack: ${stack.peek()}</p>`;
output.innerHTML += `<p>Popped item: ${stack.pop()}</p>`;
output.innerHTML += `<p>New top of stack: ${stack.peek()}</p>`;
output.innerHTML += `<p>Item at index 1: ${stack.get(1)}</p>`;
output.innerHTML += `<p>Stack size after pop: ${stack.size()}</p>`;
