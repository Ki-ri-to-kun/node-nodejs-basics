import fs from 'fs';

const rename = async () => {
    const conditionFail = !fs.existsSync('files/wrongFilename.txt') || fs.existsSync('files/properFilename.md');
    
    if(conditionFail){
      throw new Error('FS operation failed');
    } else {
      fs.rename('files/wrongFilename.txt', 'files/properFilename.md', (err) => err && console.log(err));
    }
    
};

await rename();