const request = require('request');
const fs = require('fs');
const readline = require("readline");

const args = process.argv.slice(2);

const url = args[0];
const fileLocation = args[1];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(fileLocation, body, err => {
    if (err) {
      console.error(err);
    }
    // file written successfully
    console.log(`Downloaded and saved ${body.length} bytes to ${fileLocation}`);
    rl.close();
  });

});