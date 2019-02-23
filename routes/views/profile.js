module.exports = function (app) {
    app.get("/profile/:user", (req, res)=>{
        res.send(`Hi, this is ${req.params.user}'s profile!`);
    });
    app.get("/friends/:user", (req, res)=>{
        res.send(`Hi, these are ${req.params.user}'s friends!`);
    });
}