import {parentPort, workerData} from 'node:worker_threads';

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    const result = nthFibonacci(workerData);
    
    // error test 
    //if(workerData === 11)throw new Error('error!');
    
    parentPort.postMessage(result);
};

sendResult();