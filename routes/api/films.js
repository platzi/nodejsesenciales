const API_PATH = '/api';
const films = require("../../resources/films.json");

module.exports = (app) => {
    app.get(`${API_PATH}/films`, (req, res)=>{
        res.json(films);
    });

    app.get(`${API_PATH}/films/:id`, (req, res)=>{
        const id = req.params.id;
        const film = films.filter(film=>film.id === id);
        res.json(film);    
    });
}