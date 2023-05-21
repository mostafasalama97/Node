const fs = require('fs');
const zlib = require('zlib');

function compressFile(inputFile) {
  if (!fs.existsSync(inputFile)) {
    console.log('Input file does not exist.');
    return;
  }

  const readStream = fs.createReadStream(inputFile);

  const writeStream = fs.createWriteStream(`${inputFile}.gz`);
  readStream.pipe(zlib.createGzip()).pipe(writeStream);

  writeStream.on('finish', () => {
    console.log(`File compressed successfully to ${inputFile}.gz`);
  });

  writeStream.on('error', (error) => {
    console.log('Error occurred while compressing the file:', error);
  });
}
const args = process.argv.slice(2);
const option = args[0];
const inputFile = args[1];

if (option === '-i' && inputFile) {
  compressFile(inputFile);
} else {
  console.log('Invalid argument');
}
