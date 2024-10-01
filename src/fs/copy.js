import fs from 'fs';

const copy = async () => {
    const conditionFail = !fs.existsSync('files') || fs.existsSync('files_copy');
    
    if(conditionFail){
      throw new Error('FS operation failed');
    } else {
      fs.cp('files', 'files_copy', {recursive: true}, (err) => err && console.log(err));
    }
};

await copy();
