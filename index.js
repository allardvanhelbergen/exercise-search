'use strict';

var tree = require('./tree');


var depthFirstSearch = function(node, target) {
  if (node.name === target) {
    return node;
  }

  for (var i = 0, child, found; child = node.children[i]; i++) {
    found = depthFirstSearch(child, target);
    if (found) {
      return found;
    }
  }
};


var breadthFirstSearch = function(node, target) {
  var q = [node];

  while (q.length) {
    node = q.shift();

    if (node.name === target) {
      return node;
    }

    for (var i = 0, child; child = node.children[i]; i++) {
      q.push(child);
    }
  }
};


var processArgs = function() {
  if (process.argv[2]) {
    return process.argv[2];
  } else {
    console.log('No target node provided. Searching for \'g\'');
    return 'g';
  }
};


var main = function() {
  var target = processArgs();
  console.log('DFS: ', depthFirstSearch(tree, target));
  console.log('BFS: ', breadthFirstSearch(tree, target));
};


main();
