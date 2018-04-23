// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, arrayOfClasses) {
  node = node || document.body;
  arrayOfClasses = arrayOfClasses || [];
  
  _.contains(node, className, function() {
    arrayOfClasses.concat(node.classList);
  });
  if (node.childNodes) {
  getElementsByClassName(className, node.childNodes, arrayOfClasses);
  } else {
  return arrayOfClasses;
  // your code here
  }
};
