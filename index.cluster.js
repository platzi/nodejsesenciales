var cluster = require('cluster');
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    const express = require("express");
    const app = express();

    require("./route")(app);

    app.listen(3000, ()=>{
        console.log(`Express con id ${cluster.worker.id} ha iniciado correctamente!`);
    });
}