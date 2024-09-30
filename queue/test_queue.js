import { Queue } from './queue.js';

window.onload = () => {
    const output = document.getElementById('output');

    const log = (message) => {
        const p = document.createElement('p');
        p.textContent = message;
        output.appendChild(p);
    };

    const displayQueue = (queue) => {
        let currentNode = queue.head;
        let elements = [];
        while (currentNode) {
            elements.push(currentNode.data);
            currentNode = currentNode.next;
        }
        log(`Current Queue: [${elements.join(', ')}]`);
    };

    // Create a new Queue instance
    const queue = new Queue();

    log("Testing Queue implementation...");

    // Test enqueue
    queue.enqueue('A');
    log("Enqueued: A");
    displayQueue(queue); // Show the queue state

    queue.enqueue('B');
    log("Enqueued: B");
    displayQueue(queue); // Show the queue state

    queue.enqueue('C');
    log("Enqueued: C");
    displayQueue(queue); // Show the queue state

    log(queue.size() === 3 ? "Pass: Enqueue works" : "Fail: Enqueue doesn't work");

    // Test dequeue
    log(`Dequeued: ${queue.dequeue()}`); // Show the value returned by dequeue
    displayQueue(queue); // Show the queue state after dequeue
    log(queue.size() === 2 ? "Pass: Size after dequeue is correct" : "Fail: Size after dequeue is incorrect");

    // Test peek
    const peekedValue = queue.peek();
    log(`Peeked: ${peekedValue}`); // Show the value returned by peek
    displayQueue(queue); // Show the queue state after peek

    // Test get method
    const getValue = queue.get(0);
    log(`Get index 0: ${getValue}`); // Show the value returned by get
    displayQueue(queue); // Show the queue state after get

    // Test iteration
    queue.enqueue('D');
    log("Enqueued: D");
    displayQueue(queue); // Show the queue state after enqueue

    log("Testing iteration...");
    for (let i = 0; i < queue.size(); i++) {
        log("Data from iteration: " + queue.get(i));
    }

    // Final queue state
    log("Final Queue State:");
    displayQueue(queue);
};
