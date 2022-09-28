const fetcher = (inputURL, filePath) => {
  const request = require('request');
  request(inputURL, (error, response, body) => {
    writeFile(filePath,body);
});
};

const writeFile = (filePath, content) => {
  const fs = require('fs');
  fs.writeFileSync(filePath, content, err => {
    if (err) {
      console.error(err);
    }
  })
  console.log (`Downloaded and saved ${content.length} bytes to ${filePath}`);
};

fetcher(process.argv[2],process.argv[3]);
