var fs = require('fs');
fs.readFile('12sample.txt', 'utf8', function(err, data){
  console.log(data);
});