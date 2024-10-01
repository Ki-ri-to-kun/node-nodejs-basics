import fs from 'fs';

const list = async () => {
    const conditionFail = !fs.existsSync('files');
    
    if(conditionFail){
       throw new Error('FS operation failed');
    } else {
       fs.readdir('files', (err, fileName) => console.log(fileName));
    }
   
};

await list();