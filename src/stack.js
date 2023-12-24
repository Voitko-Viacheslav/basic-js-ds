const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.newItems = [];
  }

  push(element) {
    this.newItems.push(element);
  }

  pop() {
    return this.newItems.length === 0 ? undefined : this.newItems.pop();
  }

  peek() {
    return this.newItems.length === 0
      ? undefined
      : this.newItems[this.newItems.length - 1];
  }
}

module.exports = {
  Stack,
};
