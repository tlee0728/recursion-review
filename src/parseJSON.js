// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  json = json.trim();
  // check for strings, booleans, null, numbers
 
  //string
  if (json[0] === "'" || json[0] === '"') {
    return json.slice(1, json.length - 1);
  }
  // booleans
  else if (json === "true") {
    return true;
  }
  else if (json === "false") {
    return false;
  }
  // null
  else if (json === "null") {
    return null;
  }
 
 
  // arrays
  else if (json[0] === '[' && json[json.length - 1] === ']') {
    json = json.slice(1, json.length - 1).split(",");
    // iterate through each element after splitting.
    for (var i = 0; i < json.length; i++) {
      // recursively go through each element
      json[i] = parseJSON(json[i]);
    }
    return json;
  }
 
  // objects
  else if (json[0] === '{' && json[json.length - 1] === '}') {
    json = json.slice(1,json.length - 1).split(',');
    var arr = [];
 
    for (var k = 0; k < json.length; k++) {
      arr.push(json[k].split(':'));
    }
    var obj = {};
    for (var i = 0; i < arr.length; i++) {
      console.log('a', arr[i][0])
      console.log('b', arr[i][1])
      obj[arr[i][0]] = parseJSON(arr[i][1]);
    }
 
    return obj;
  }
 
  // numbers
  else if (typeof parseFloat(json) === 'number') {
    return parseFloat(json);
  }
 };
