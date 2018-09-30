const API_PATH = '/api';
const films = require("../resources/films.json");
const mongo = require("../db/connect");
const { postFilm, getFilms, getFilmByID } = require("../db");

module.exports = (app) => {
    app.get(`${API_PATH}/films`, async (req, res)=>{
        const resp = await getFilms();
        return res.json(resp);
    });

    app.get(`${API_PATH}/films/:id`, async (req, res)=>{
        const id = req.params.id;
        const resp = await getFilmByID(id);
        return res.json(resp);
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