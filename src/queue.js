// const { NotImplementedError, ListNode } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.last = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newListNode = new ListNode(value);
    !this.head ? this.head = newListNode : this.last.next = newListNode;
    this.last = newListNode;
  }

  dequeue() {
    if (!this.head) return null;
    let removed = this.head.value;
    this.head = this.head.next;
    return removed;
  }
}

module.exports = {
  Queue
};
