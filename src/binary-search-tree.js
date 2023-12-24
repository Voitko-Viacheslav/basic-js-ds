const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  // Create a three
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    // add data for search this.root element
    // this.root - элемент на котором мы ищем!
    this.rootNode = addNextNode(this.rootNode, data);

    function addNextNode(node, data) {
      // когда с лева или с права свободное место, у меня 5 например
      //       7
      //    /     \
      //  empty     10
      if (!node) {
        // add new node -> empty
        return new Node(data);
      }

      // if node === искомому значению
      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        // левому потомку добавим
        node.left = addNextNode(node.left, data);
      } else {
        node.right = addNextNode(node.right, data);
      }

      // текущий узел
      return node;
    }
  }

  has(data) {
    return hasNode(this.rootNode, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return hasNode(node.left, data);
      } else {
        return hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      } else if (data < node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // если нету потомков (это лист)
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let minNodeRight = node.right;
        while (minNodeRight.left) {
          minNodeRight = minNodeRight.left;
        }
        node.data = minNodeRight.data;
        node.right = removeNode(node.right, minNodeRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
