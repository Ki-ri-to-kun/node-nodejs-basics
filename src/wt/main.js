import os from 'os';
import {Worker, workerData} from 'node:worker_threads';

const performCalculations = async () => {
    const coresNumber = os.cpus();
    const actualCoresNumber = Object.entries(coresNumber).length;
    
    const promiseArray = [];
    const resultArray = [];
    
    for(let i = 10; i < actualCoresNumber + 10; i++){ 
      const resultPromise = new Promise((resolve, reject) => {
        const worker = new Worker('./worker.js', {workerData: i});
        worker.on('message', data => resolve(resultArray.push({id: worker.threadId, status: 'resolved', data})));
        worker.on('error', error => reject(resultArray.push({id: worker.threadId, status: 'error', data: null})));
    });
      promiseArray.push(resultPromise);
    }
   
   Promise.allSettled(promiseArray).then(data => {
     resultArray.sort((a, b) => {
       if(a.id < b.id) return -1;
       if(a.id > b.id) return 1;
     });
     
       for(let item of resultArray){
          delete item.id;
          console.log(item);
       }
   }); 
};

await performCalculations();