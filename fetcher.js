const request = require('request');
const fs = require('fs');
const myArgs = process.argv.slice(2);
const url = myArgs[0];
const filePath = myArgs[1];

request(url, (error, response, body) => {
  
  fs.writeFile(filePath, body, error => {
    if (response.statusCode !== 200) {
      console.log('error: ', error);
      console.log('statusCode: ', response && response.statusCode);
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${filePath}`);
  });
});

