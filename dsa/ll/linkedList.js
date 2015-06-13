'use strict';

var Node = function(value) {
  this.value = value;
  this.next = null;
  return this;
};

var LinkedList = function(node) {
  this.head = node;
  return this;
};
LinkedList.prototype.insertEnd = function(newNode, currentNode) {
  var currentNode = currentNode || this.head;

  if (currentNode.next !== null) {
    return this.insertEnd(newNode, currentNode.next);
  } else {
    currentNode.next = newNode;
  }
};
LinkedList.prototype.insertBeginning = function(newNode) {
  newNode.next = this.head;
  this.head = newNode;
};
LinkedList.prototype.search = function(searchValue, currentNode) {
  var currentNode = currentNode || this.head;
  if (currentNode.value == searchValue) {
    console.log("true");
    return true;
  } else if (currentNode.next !== null) {
    return this.search(searchValue, currentNode.next);
  }
  console.log("not found");
  return false;
};
LinkedList.prototype.remove = function(deleteValue, currentNode, parentNode) {
  currentNode = currentNode || this.head;
  if (currentNode.value === deleteValue) {
    if (currentNode.next !== null) {
      parentNode.next = currentNode.next;
    } else {
      parentNode.next = null;
    }
  } else if (currentNode.next !== null) {
    return this.remove(deleteValue, currentNode.next, currentNode);
  }
};
LinkedList.prototype.size = function(currentNode, size) {
  var currentNode = currentNode || this.head;
  var size = size || 1;
  if (currentNode.next !== null) {
    return this.size(currentNode.next, size + 1);
  } else {
    console.log(size);
    return size;
  }
};

(function() {
  // LinkedList Example
  var linkedList = new LinkedList(new Node("oldHead"));
  linkedList.insertEnd(new Node(2));
  linkedList.insertEnd(new Node("cat"));
  linkedList.insertEnd(new Node("dog"));
  linkedList.insertEnd(new Node(100));

  linkedList.search("cat");
  linkedList.size();
  linkedList.remove("cat");
  linkedList.size();
  linkedList.search("cat");
  console.log("current head: " + linkedList.head.value);
  linkedList.insertBeginning(new Node("testBeginningInsert"));
  console.log("current head: " + linkedList.head.value);
  linkedList.size();
})();
