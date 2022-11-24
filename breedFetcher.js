const catBreed = process.argv.slice(2);
const request = require('request');

// console.log(catBreed);

const apiEndpoint = `https://api.thecatapi.co/v1/breeds/search?q=${catBreed}`;

request(apiEndpoint, (error, response, body) => {
  const data = JSON.parse(body);
  // console.log('error:', error); // Print the error if one occurred
  // console.log('body:', body); // Print the HTML for the API endpoint.
  // console.log(typeof data);
  // console.log(data[0]);

  // if (error) {
  //   console.error(error);
  // }

  if (!error && data[0]) {
    console.log(data[0].description);
  } else {
    console.error(`oh no cat not found :( (query returned as ${error})`);
  }
});