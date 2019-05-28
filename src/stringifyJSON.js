// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === undefined) {
    return undefined;
  } else if (typeof obj === 'number' || typeof obj === 'boolean') {
    return obj.toString();
  } else if (obj === null) {
    return "null";
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (Array.isArray(obj)) {
    return '[' + obj.map(stringifyJSON)+ ']';
  } else if (obj.constructor === Object) {
    var keys = Object.keys(obj)
    .reduce((array, key) => {
      if (key === 'functions' || key === 'undefined') {
        return [];
      }
      var stringified = `"${key}":${stringifyJSON(obj[key])}`;
      array.push(stringified);
      return array;
    }, []);
  return '{' + keys.join(',') + '}';
  } 
};