const path = require('path');
const {readdir, mkdir, copyFile, rm} = require('fs/promises');

const mainPath = path.join(__dirname, 'files');
const copyPath = path.join(__dirname, 'files-copy');

async function copy(mainPath, copyPath) {
  try {
    await rm(copyPath, {force: true, recursive: true});
    await mkdir(copyPath, {recursive: true});
    const files = await readdir(mainPath, {withFileTypes: true});
    for (const file of files) {
      const pathOFMain = path.join(mainPath, file.name);
      const pathOfCopy = path.join(copyPath, file.name);
      if (file.isDirectory()) {
        await copy(pathOFMain, pathOfCopy);
      } else {
        await copyFile(pathOFMain, pathOfCopy);
      }
    }
  } catch (error) {
    console.error(error);
  }
}

copy(mainPath, copyPath);
