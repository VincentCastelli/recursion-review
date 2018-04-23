// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node, arrayOfClasses) {
  node = node || document.body;
  if (arrayOfClasses === undefined) {
    arrayOfClasses === [];
  };
  
  _.contains(node.childNodes, className, function() {
    if (node.childNodes.childNodes) {
      getElementsByClassName(className, node.childNodes, arrayOfClasses);
    }
    arrayOfClasses.push(node);
  });
  // your code here
  return arrayOfClasses;
};
