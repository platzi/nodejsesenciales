module.exports = function (app) {
    app.get("/", (req, res)=>{
        res.send("Hola, estoy en la ruta '/'!");
    });
}