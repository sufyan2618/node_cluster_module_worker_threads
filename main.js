import { Worker, workerData } from "worker_threads";
import os from 'os';

num_of_cpus = os.cpus().length;

for(let i=0; i<num_of_cpus; i++){
    const worker = new Worker('./worker.js', {workerData: i});
    worker.on("message", msg => {
        console.log("message of worker")
    })
    worker.on("exit", () => {
        console.log(`worker exited ${i}`)
    })
}