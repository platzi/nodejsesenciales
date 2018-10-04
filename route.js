const hash = require("./hash");

module.exports = (app) => {
    app.get("/hash", (req, res)=>{
        const pass = hash.pass("This is a test!");
        res.send(pass.toString());
    });

    app.get("/", (req, res)=>{
        res.send("Hola");
    });
}