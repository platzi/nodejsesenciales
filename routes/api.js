const API_PATH = '/api';
const films = require("../resources/films.json");
const mongo = require("../db/connect");
const { postFilm } = require("../db");

module.exports = (app) => {
    app.get(`${API_PATH}/films`, (req, res)=>{
        res.json(films);
    });

    app.get(`${API_PATH}/films/:id`, (req, res)=>{
        const id = req.params.id;
        const film = films.filter(film=>film.id === id);
        res.json(film);    
    });

    app.post(`${API_PATH}/film`, async (req, res)=>{
        const film = JSON.parse(req.body.film);
        if (film) { 
            const resp = await postFilm(film);
            return res.json(resp);
        }
        res.status(400).send({ reason: "No film sent." });
    })
}