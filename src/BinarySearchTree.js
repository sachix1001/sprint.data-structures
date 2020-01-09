class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }

  insert(val) {
    //if it is less than BinarySearchTree(value) then:
    let inserted = new BinarySearchTree(val);
    if (val === this.value) {
      return this;
    }
    if (val < this.value) {
      if (!this.left) {
        this.left = inserted;
        return this;
      }
      this.left.insert(val);
    }
    if (!this.right) {
      this.right = inserted;
      return this;
    } else {
      this.right.insert(val);
    }
    return this;
  }

  contains(value) {
    if (value === this.value) {
      return true;
    }
    if (value < this.value && this.left) {
      return this.left.contains(value);
    }
    if (value > this.value && this.right) {
      return this.right.contains(value);
    }
    return false;
  }

  // traverseDepthFirstInOrder(callback) {
  //   function recurse(node) {
  //     if (node.left) {
  //       recurse(node.left);
  //     }
  //     callback(node);
  //     if (node.right) {
  //       recurse(node.right);
  //     }
  //   }
  //   recurse(this);
  // }

  traverseDepthFirstInOrder(callback) {
    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      callback(node);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this);
  }
}
module.exports = { BinarySearchTree: BinarySearchTree };
/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   Basic Requirements:         X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
