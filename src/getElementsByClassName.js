// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {   
  // your code here   
  var arr = [];   
  var helperFunc = function(node) {       
    // check if node has a classlist and if it contains classname.       
    // push onto arr if condition is met       
    if (node.classList && node.classList.contains(className)) { 
      arr.push(node);
    }       
    // run through child nodes and recursively call helper function for each child       
    var lilNodes = node.childNodes;       
    for (var i = 0; i < lilNodes.length; i++) {           
      helperFunc(lilNodes[i]);       
    }   
  }   
  helperFunc(document.body);   
return arr; 
};
