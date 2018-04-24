// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function (className) {
  // create an array to return
  var arrayOfClasses = [];

  // create search function with 1 arg: node
  var bodySearch = function (node) {
    // split multiple classes by space and use
    // indexOf to search within splits for match
    var classSplit = node.className.split(' ');
    if (classSplit.indexOf(className) >= 0) {
      // push matches to array
      arrayOfClasses.push(node);
    }

    // iterate through children and call search function
    for (var i = 0; i < node.children.length; i++) {
      bodySearch(node.children[i]);
    }
  };

  bodySearch(document.body);

  return arrayOfClasses;
};
