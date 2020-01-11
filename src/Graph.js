class Graph {
  constructor() {
    /**
     * There are many representations of Graph.
     * We can store Graph in many ways.
     * One way is by using Adjacency List.
     */
    this.nodes = {}; // Adjacency List
  }

  addNode(num) {
    if (!this.nodes.hasOwnProperty(num)) {
      this.nodes[num] = [];
    }
  }

  removeNode(num) {
    if (this.nodes.hasOwnProperty(num)) {
      for (const node in this.nodes) {
        this.nodes[node] = this.nodes[node].filter(
          (connection) => num !== connection
        );
      }
      return delete this.nodes[num];
    }
  }

  contains(num) {
    return this.nodes.hasOwnProperty(num);
  }

  addEdge(node1, node2) {
    if (this.nodes.hasOwnProperty(node1) && this.nodes.hasOwnProperty(node2)) {
      //check for connection
      if (!this.nodes[node1].includes(node2)) {
        this.nodes[node1].push(node2);
      }
      if (!this.nodes[node2].includes(node1)) {
        this.nodes[node2].push(node1);
      }
    }
    return "Invalid node value";
  }

  removeEdge(node1, node2) {
    if (this.nodes.hasOwnProperty(node1) && this.nodes.hasOwnProperty(node2)) {
      this.nodes[node1] = this.nodes[node1].filter((edge) => edge !== node2);
      this.nodes[node2] = this.nodes[node2].filter((edge) => edge !== node1);
    }
  }

  hasEdge(node1, node2) {
    if (this.nodes.hasOwnProperty(node1) && this.nodes.hasOwnProperty(node2)) {
      return this.nodes[node1].includes(node2);
    }
    return false;
  }
}

module.exports = Graph;

/*
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
|X                               X
|X   What is the time complexity X
|X   of the above functions?     X
|X                               X
|XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
*/
