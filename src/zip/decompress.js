import zlib from 'zlib';
import fs from 'fs';

const decompress = async () => {
   const input = fs.createReadStream('files/archive.gz');
   const output = fs.createWriteStream('files/fileToCompress.txt');
   
   const decompress = zlib.createUnzip();
   
   input.pipe(decompress).pipe(output);
};

await decompress();