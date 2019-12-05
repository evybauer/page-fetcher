const args = process.argv.slice(2);

const fs = require('fs');
process.stdin.setEncoding('utf8');

const request = require('request');
request('URL', (body) => {

  fs.writeFile('index.html', body, function(err) {
    if (!err) {
      console.log("Downloaded and saved 3261 bytes to ./index.html");
    } else {
      console.log('something went wrong!');
    }
  });
});




