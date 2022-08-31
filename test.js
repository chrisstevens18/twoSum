
function getProperty(obj, key) {
    if (obj[key] === undefined) {
      return undefined;
    }// your code here
    return obj[key];/* START SOLUTION */
    
    /* END SOLUTION */
  }
  var obj = {
    key: 'value'
  };
  
  var output = getProperty(obj, 'key');
  console.log(output);
  bkhjsbdfkjnk