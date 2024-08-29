const fs = require('fs');
const path = require('path');

const filesToCheck = [
  'client/src/components/EventCard.js',
  'client/src/components/Footer.js',
  'client/src/components/RSVPForm.js',
  'client/src/components/Navigation.js',
  'client/src/contexts/AuthContext.js',
  'client/src/__tests__/LoginPage.test.js'
];

filesToCheck.forEach((file) => {
  const filePath = path.join(__dirname, file);
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${file}:`, err);
    } else {
      console.log(`Contents of ${file}:\n`);
      console.log(data);
      console.log('\n----------------------------------------\n');
    }
  });
});