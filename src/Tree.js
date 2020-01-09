class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(value) {
    let newTree = new Tree(value);
    this.children.push(newTree);
    return newTree;
  }

  contains(value) {
    let result = false;

    if (this.value === value) {
      result = true;
      return result;
    }

    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        result = true;
      }
    }
    return result;
  }
  remove(value) {
    if (this.value === value) {
      let result = this.value;
      this.value = null;
      return result;
    }
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contains(value)) {
        if (this.children[i].value === value) {
          let result = this.children[i].value;
          this.children[i].value = null;
          return result;
        }
      }
    }
  }
}

module.exports = { Tree: Tree };

/*
+-------------------------+
| Advanced Requirements!! |
+-------------------------+

The following are part of the advanced requirements.
Do not proceed until you are done with the basic
requirements for ALL data structures in this exercise.

*/
/*
  traverseDepthFirst(fn) {}

  traverseBreadthFirst(fn) {}
}

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
