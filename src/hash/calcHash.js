 import {createHash} from 'node:crypto';
 import fs from 'fs';

 const calculateHash = async () => {
     const hash = createHash('sha256');

     hash.on('readable', () => {
         const data = hash.read();
         if(data) {
             console.log(data.toString('hex'));
         }
     });

     const readStream = fs.createReadStream('files/fileToCalculateHashFor.txt');
     
     readStream.on('data', (data) => {
         hash.write(data);
         hash.end();
     });
 };

 await calculateHash();