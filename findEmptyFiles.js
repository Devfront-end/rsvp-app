const fs = require('fs');
const path = require('path');

const directoryPath = __dirname; // Use the current directory

function findEmptyFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      return console.log('Unable to scan directory: ' + err);
    }

    files.forEach((file) => {
      const filePath = path.join(dir, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          return console.log('Unable to stat file: ' + err);
        }

        if (stats.isDirectory()) {
          findEmptyFiles(filePath); // Recursively check subdirectories
        } else if (stats.size === 0) {
          console.log(`Empty file: ${filePath}`);
        }
      });
    });
  });
}

findEmptyFiles(directoryPath);