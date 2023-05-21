const fs = require('fs');

function copyFile(inputFile, outputFile) {
  if (!fs.existsSync(inputFile)) {
    console.log('Input file does not exist.');
    return;
  }

  const readStream = fs.createReadStream(inputFile);
  const writeStream = fs.createWriteStream(outputFile);

  readStream.pipe(writeStream);

  writeStream.on('finish', () => {
    console.log(` copy successed to ${outputFile}`);
  });

  writeStream.on('error', (error) => {
    console.log('Error occurred when copying the file:', error);
  });
}
const args = process.argv.slice(2);
const option = args[0];
const inputFile = args[1];
const outputFile = args[2];

if (option === '-i' && inputFile && outputFile) {
  copyFile(inputFile, outputFile);
} else {
  console.log('Invalid arguments');
}
