const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {

    return this.rootNode;
  }

  add(data) {
    let tNode = new Node(data)
    if (this.rootNode === null)
      this.rootNode = tNode;
    else
      this.findAdd(this.rootNode, tNode)
  }

  findAdd(testNode, newNode) {
    if (newNode.data < testNode.data) {
      if (testNode.left === null) {
          testNode.left = newNode;
      } else {
          this.findAdd(testNode.left, newNode);
      }
    } else {
      if (testNode.right === null) {
          testNode.right = newNode;
      } else {
          this.findAdd(testNode.right, newNode);
      }
    }
  }

  has(data) {
    if(this.find(data)!==null) 
      return true;
    return false;
  }

  find(data, node = this.rootNode) {
    if(node === null)
     return null;
    if(node.data === data)
      return node;
    if(node.data < data) 
      return this.find(data, node.right)
    else
      return this.find(data, node.left)
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
        return null;
    } else if (node.data > data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else if (node.data < data) {
        node.right = this.removeNode(node.right, data);
        return node;
    } else {
        if (node.left === null && node.right === null) {
          node = null;
          return node;
        }
        if (node.left === null) {
            node = node.right;
            return node;
        } else if(node.right === null) {
            node = node.left;
            return node;
        }
        let newNode = this.minNode(node.right);
        node.data = newNode.data;
        node.right = this.removeNode(node.right, newNode.data);
        return node;
    }
  }
  minNode(node) {
    if (node.left === null)
        return node;
    else
        return this.minNode(node.left);
  }
  maxNode(node) {
    if (node.right === null)
        return node;
    else
        return this.maxNode(node.right);
  }
  min() {
    return this.minNode(this.rootNode).data;
  }

  max() {
    return this.maxNode(this.rootNode).data;
  }
}

module.exports = {
  BinarySearchTree
};