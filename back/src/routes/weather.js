const express = require('express');
const rotuer = express.Router();
const request = require('request')

rotuer.get("/temp", (req, res)=>{
    console.log(req.query.long, req.query.lat)
    //
    if (!req.query.lon || !req.query.lat)
        return res.status(401).send("bad request, must get let and lon")
    const { lat, lon } = req.query;
    request.get(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`, (error, response, body)=>{
        if (error)
            return res.status(500).json(error)
        console.log(body)
        res.json(JSON.parse(body))
    })
    
})

module.exports = rotuer