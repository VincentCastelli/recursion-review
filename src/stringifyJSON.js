// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'number') {
    return obj.toString();
  }

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'boolean') {
    if (obj === true) {
      return 'true';
    } else {
      return 'false';
    }
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var results = [];
      _.each(obj, function(el) {
        results.push(stringifyJSON(el));
      });
      return '[' + results.join(',') + ']'; 
    } 
  } else {
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else {
      var results = [];
      for (var key in obj) {
        var item = '';
        var prop = obj[key];
        if (typeof prop !== 'string' && typeof prop !== 'number') {
        }
        item += '"' + key + '"' + ':' + '"' + prop + '"';
        results.push(item); 
      }
      return '{' + results.join(',') + '}';
    }
  }
};
