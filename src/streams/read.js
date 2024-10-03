import fs from 'fs';

const read = async () => {
    const readStream = fs.createReadStream('files/fileToRead.txt');
    readStream.on('data', (data) => process.stdout.write(data.toString()));
};

await read();