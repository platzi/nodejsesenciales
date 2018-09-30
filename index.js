const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

const mongo = require("./db/connect");

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes")(app);

app.get("*", (req, res)=>{
    res.send("Hola, soy Express!");
});

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