import zlib from 'zlib';
import fs from 'fs';
  
const compress = async () => {
   const input = fs.createReadStream('files/fileToCompress.txt');
   const output = fs.createWriteStream('files/archive.gz');
   
   const compress = zlib.createGzip();
   
   input.pipe(compress).pipe(output);
};

await compress();