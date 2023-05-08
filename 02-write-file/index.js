const fs = require('fs');
const readline = require('readline');
const path = require('path');

const textPath = path.join(__dirname, 'newtext.txt');

const readLine = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const writeStream = fs.createWriteStream(textPath, {encoding: 'utf-8', flags: 'a'});

readLine.setPrompt("Введите текст для сохранения");

const isExit = (date) => {
  if (date.toString() == "exit" || date.toString() == "EXIT") {
    return true;
  } else {
    return false;
  }
};

readLine.prompt();

readLine.on('line', (input) => {
  if (isExit(input)) {
    readLine.close();
  } else { 
    writeStream.write(`${input}\n`);
  }
});

readLine.on('close', () => {
  console.log("Ввод закончен");
  writeStream.end();
});
