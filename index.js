const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const mongo = require("./db/connect");

app.use( logger("dev") );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );

require("./routes/views")(app);
require("./routes/api")(app);
require("./routes/special")(app);

async function initMongo(){
    const db = await mongo.connect();
    if(db) { initExpress(); }
}

function initExpress() {
    console.log('Iniciando Express');
    app.listen(3000, ()=>{
        console.log("Express ha iniciado correctamente!");
        process.on("SIGINT", closeApp);
        process.on("SIGTERM", closeApp);
    });
}

function closeApp(){
    mongo.disconnect()
        .then(()=>process.exit(0));
}

initMongo();