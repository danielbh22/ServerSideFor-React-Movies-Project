const express = require('express');
const moviesBL = require('../models/moviesBL');

const router = express.Router();

const { protect } = require("../middleware/auth");
router.route('/')
    .get(protect,async function(req,resp)
    {
        let movies = await moviesBL.getAllMovies();
        return resp.json(movies)
    })

router.route('/:id')
    .get(protect,async function(req,resp)
    {
        let movieid = req.params.id;

        let movie = await moviesBL.getMovie(movieid);
        return resp.json(movie)
    })

router.route('/')
    .post(protect,async function(req,resp)
    {
        let obj = req.body
        let status = await moviesBL.addMovie(obj);
        return resp.json(status)
    })

router.route('/:id')
    .put(protect,async function(req,resp)
    {
        let movieid = req.params.id;
        let obj = req.body;
        let status = await moviesBL.updateMovie(movieid,obj);
        return resp.json(status)
    })

router.route('/:id')
    .delete(protect,async function(req,resp)
    {
        let movieid = req.params.id;

        let status = await moviesBL.deleteMovie(movieid);
        return resp.json(status)
    })



module.exports = router;