import fs from 'fs';

const remove = async () => {
    const conditionFail = !fs.existsSync('files/fileToRemove.txt');
  
    if(conditionFail){
      throw new Error('FS operation failed');
    } else {
       fs.unlink('files/fileToRemove.txt', (err) => err && console.log(err));
    }
 
};

await remove();