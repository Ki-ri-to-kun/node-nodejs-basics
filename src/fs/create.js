import fs from 'fs';

const create = async () => {
    if(fs.existsSync('files/fresh.txt')){
      throw new Error('FS operation failed');
    } else {
      const output = fs.createWriteStream('files/fresh.txt');
      output.write('I am fresh and young');
      output.end();
    }
};

await create();