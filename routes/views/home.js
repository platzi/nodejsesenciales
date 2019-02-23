module.exports = function (app) {
    app.get("/", (req, res)=>{
        res.send("Hi, this is the route '/'!");
    });
}