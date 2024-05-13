#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2];
const contentToWrite = process.argv[3];

fs.writeFile(filePath, contentToWrite, { encoding: 'utf-8' }, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log(`Content written to ${filePath}`);
  }
});
