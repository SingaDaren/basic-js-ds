const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

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
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (!node) return new Node(data);
    if (data === node.data) return node;
    if (data < node.data) {
      node.left = this.addNode(node.left, data);
    } else node.right = this.addNode(node.right, data);
    return node;
  }

  has(data) {
    return this.hasNode(this.rootNode, data) !== null;
  }

  hasNode(node, data) {
    if (!node) return null;
    if (node.data === data) return node;
    if (data < node.data) {
      return this.hasNode(node.left, data);
    }
    return this.hasNode(node.right, data);
  }

  find(data) {
    return this.hasNode(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
    if (!node.left && !node.right) return null;
    if (!node.left) {
      node = node.right;
      return node;
    }
    if (!node.right) {
      node = node.left;
      return node;
    }
    let minLeft = node.right;
    while (minLeft.left) minLeft = minLeft.left;
    node.data = minLeft.data;
    node.right = this.removeNode(node.right, minLeft.data);
    return node;
  }

  min() {
    if (!this.rootNode) return null;
    let node = this.rootNode;
    while (node.left) node = node.left;
    return node.data;
  }

  max() {
    if (!this.rootNode) return null;
    let node = this.rootNode;
    while (node.right) node = node.right;
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
