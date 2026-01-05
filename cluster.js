import cluster from 'cluster';
import os from 'os'
import http from 'http'

if (cluster.isPrimary){
    const num_cpus = os.cpus().length

    for (let i= 0; i< num_cpus; i++){
        cluster.fork()
        console.log("Processes created with pid: " + process.pid)
    }

    cluster.on("exit", (worker) => {
        console.log(`This worker is exiting ${worker.process.pid}. it died now`)
        console.log("creating new child")
        cluster.fork()
    })

} else {
    http.createServer((req,res) => {
        res.writeHead(200)
        res.end(`handled by ${process.pid}`);
    }).listen(3000)

}
