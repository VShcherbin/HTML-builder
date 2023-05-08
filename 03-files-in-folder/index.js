const {readdir, stat} = require('fs/promises');
const path = require('path');

const pathOfSecretDir = path.join(__dirname, 'secret-folder');

async function secretFilesInfo(dirPath) {
  try {
    const secretFiles = await readdir(dirPath, {withFileTypes: true});

    for (const secretFile of secretFiles) {
      if (!secretFile.isDirectory()) {
        const pathOfFile = path.join(dirPath, secretFile.name);
        const name = path.parse(pathOfFile).name;
        const ext = path.parse(pathOfFile).ext.slice(1);
        const size = (await stat(pathOfFile)).size;
        const secretInfo = `${name} - ${ext} - ${size} b`;
        console.log(secretInfo);
      }
    }
  } catch (error) {
    console.log(error);
  }
}

secretFilesInfo(pathOfSecretDir);