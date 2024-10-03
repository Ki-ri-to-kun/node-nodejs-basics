import fs from 'fs';

const write = async () => {
    const output = fs.createWriteStream('files/fileToWrite.txt');
    process.stdin.on('data', (data) => {
        output.write(data);
        output.end();
        process.exit();
    });
};

await write();