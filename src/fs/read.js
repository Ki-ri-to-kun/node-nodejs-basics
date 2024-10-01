import fs from 'fs';

const read = async () => {
    const conditionFail = !fs.existsSync('files/fileToRead.txt');
    
    if(conditionFail){
       throw new Error('FS operation failed');
    } else {
      const readStream = fs.createReadStream('files/fileToRead.txt');
      readStream.on('data', (data) => console.log(data.toString()));
    }
};

await read();