#!/usr/bin/node
const fs = require('fs');
const filePath = process.argv[2]; // The first argument is the file path

fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

