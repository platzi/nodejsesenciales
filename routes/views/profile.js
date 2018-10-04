module.exports = function (app) {
    app.get("/profile/:user", (req, res)=>{
        res.send(`Hola, estoy en el perfil de ${req.params.user}!`);
    });
}