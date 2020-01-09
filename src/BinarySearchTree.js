class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left;
    this.right;
  }

  insert(val) {
    //if it is less than BinarySearchTree(value) then:
    let inserted = new BinarySearchTree(val);
    if (val < this.value) {
      this.left = inserted;
      // console.log(inserted);
      return this;
    }
    //if it is more
    this.right = inserted;
    // console.log(inserted);
    return this;
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
