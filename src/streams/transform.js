import {Transform} from 'stream';

const transform = async () => {
    const reverseTransformStream = new Transform({
        transform(data, encoding, callback) {
            const transformedData = data.toString().split('').reverse().join('');
            this.push(transformedData);
            callback();
        }
    });

    reverseTransformStream.on('data', (data) => {
        process.stdout.write(data.toString())
    });

    process.stdin.on('data', (data) => {
        reverseTransformStream.write(data);
        reverseTransformStream.end();
        process.exit();
    });
};

await transform();