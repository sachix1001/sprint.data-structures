function Node(value) {
  this.next = null;
  this.value = value;
}

class LinkedList {
  constructor(headValue) {
    if (headValue !== undefined) {
      this.head = new Node(headValue);
      this.tail = this.head;
    }
  }

  appendToTail(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    return newNode;
  }

  removeHead() {
    const removeHead = this.head;
    this.head = this.head.next;
    return removeHead;
  }

  findNode(value) {
    function recurse(node) {
      if (node.value === value) {
        return node;
      }
      if (node.next) {
        return recurse(node.next);
      }
      return null;
    }
    return recurse(this.head);
  }

  /*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.
*/

  // forEach(callback) {}

  // print() {}

  // insertHead(value) {}

  // insertAfter(refNode, value) {}

  // removeAfter(refNode) {}
}

module.exports = LinkedList;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
