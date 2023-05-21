const fs = require('fs');

function translateFile(inputFile, encoding) {
  if (!fs.existsSync(inputFile)) {
    console.log('Input file does not exist.');
    return;
  }

  const fileContent = fs.readFileSync(inputFile);

  let decodedContent;
  if (encoding === 'utf-8') {
    decodedContent = fileContent.toString('utf-8');
  } else if (encoding === 'base64') {
    decodedContent = fileContent.toString('base64');
  } else {
    console.log('not supported encoding.');
    return;
  }

  console.log(decodedContent);
}
const args = process.argv.slice(2);
const option = args[0];
const inputFile = args[1];
const encoding = args[2];

if (option === '-i' && inputFile && encoding) {
  translateFile(inputFile, encoding);
} else {
  console.log('Invalid arguments.');
}
