// TODO - Refine and complete this code, contains errors etc
// http://stackoverflow.com/questions/27812367/binary-search-tree-javascript-implementation-remove-function

var Node = function(value) {
  this.value = value;
  this.left = null;
  this.right = null;
  return this;
};
Node.prototype.insert = function(newNode) {
  if (newNode.value < this.value) {
    if (this.left === null) {
      this.left = newNode;
    } else {
      this.left.insert(newNode);
    }
  } else if (newNode.value > this.value) {
    if (this.right === null) {
      this.right = newNode;
    } else {
      this.right.insert(newNode);
    }
  } else {
    return true;
  }
};
Node.prototype.depthFirstSearch = function(searchValue) {
  console.log(searchValue + ": " + this.value);
  if (this.value === searchValue) {
    console.log("search item found");
    return true;
  } else if (searchValue < this.value && this.left !== null) {
    return this.left.depthFirstSearch(searchValue);
  } else if (searchValue > this.value && this.right !== null) {
    return this.right.depthFirstSearch(searchValue);
  } else {
    console.log("could not find " + searchValue);
    return false;
  }
};
Node.prototype.inorderTraversal = function() {
  if (this.left !== null) {
    this.left.inorderTraversal();
  }
  console.log(this.value);
  if (this.right !== null) {
    this.right.inorderTraversal();
  }
};
Node.prototype.preOrderTraversal = function() {
  console.log(this.value);
  if (this.left !== null) {
    this.left.preOrderTraversal();
  }
  if (this.right !== null) {
    this.right.preOrderTraversal();
  }
};
Node.prototype.postOrderTraversal = function() {
  if (this.left !== null) {
    this.left.postOrderTraversal();
  }
  if (this.right !== null) {
    this.right.postOrderTraversal();
  }
  console.log(this.value);
};

var BinarySearchTree = function(insertNode) {
  if (insertNode instanceof Node) {
    this.root = insertNode;
  } else {
    this.root = new Node(insertNode);
  }
  return this;
};
BinarySearchTree.prototype.insert = function(insert) {
  if (insert instanceof Node) {
    this.root.insert(insert);
  } else {
    this.root.insert(new Node(insert));
  }
};
BinarySearchTree.prototype.depthFirstSearch = function(searchValue) {
  this.root.depthFirstSearch(searchValue);
};
BinarySearchTree.prototype.breadthFirstTraversal = function() {
  console.log("Breadth First Traversal");
  // our array is acting as a queue for us.
  var queue = [],
    current = this.root;

  if (current !== null) {
    queue.push(current);
  }

  // start off enqueing root
  while (queue.length > 0) {
    var tempNode = queue.shift();
    console.log(tempNode.value); // Visit current node
    if (tempNode.left !== null) {
      queue.push(tempNode.left);
    }
    if (tempNode.right !== null) {
      queue.push(tempNode.right);
    }
  }
};
BinarySearchTree.prototype.inOrderTraversal = function() {
  this.root.inorderTraversal();
};
BinarySearchTree.prototype.preOrderTraversal = function() {
  this.root.preOrderTraversal();
};
BinarySearchTree.prototype.postOrderTraversal = function() {
  this.root.postOrderTraversal();
};

(function() {
  // Example BinBinarySearchTree
  var bst = new BinarySearchTree(50);
  bst.insert(25);
  bst.insert(75);
  bst.insert(12);
  bst.insert(37);
  bst.insert(87);
  bst.insert(63);

  console.log("Inorder Traversal: LRootR");
  bst.inOrderTraversal();

  console.log("Preorder Traversal: RootLR");
  bst.preOrderTraversal();

  console.log("Postorder Traversal: LRRoot");
  bst.postOrderTraversal();

  console.log("Search for valid (63)");
  bst.depthFirstSearch(63);

  console.log("Search for invalid (19)");
  bst.depthFirstSearch(19);

  bst.breadthFirstTraversal();
})();
