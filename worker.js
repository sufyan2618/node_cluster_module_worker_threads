import { workerData, parentPort } from "worker_threads";


let result = 0;
for (let i = 0; i < 1e8; i++) result += i;

parentPort.postMessage(`Worker ${workerData} finished with result ${result}`);