const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());

require("./routes")(app);

app.get("*", (req, res)=>{
    res.send("Hola, soy Express!");
});

app.listen(3000, ()=>{
    console.log("Express ha iniciado correctamente!");
});