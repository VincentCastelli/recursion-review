// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
//var getElementsByClassName = function(className, node, arrayOfClasses) {

  // node = node || document.body;
  // if (arrayOfClasses === undefined) {
  //   arrayOfClasses === [];
  // }
  
  // _.each(node, function(element) {
  //   if (element.childNodes) {
  //     getElementsByClassName(element.childNodes);
  //   } else if ( element.className === className ) {
  //     arrayOfClasses.push(element);
  //   }
  // });

  // return arrayOfClasses; 

  var arrayOfClasses = [];
  var doc = document.body;

  var bodySearch = function(body) {
    if (doc.classList && ._contains(doc.classList, className) {
      arrayOfClasses.push(body);
    })
    if (doc.childNodes) {
      for (var i = 0; i < doc.childNodes.length; i++) {
        bodySearch(doc.childNodes[i]);
      }
    }
  } 

  return arrayOfClasses;
};

