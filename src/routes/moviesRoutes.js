
const express = require('express')
const {  getMovies, postMovie, updateMovies, deleteMovies } = require('../models/movies')
const router = express.Router();

router.get('/movies/all', async (req, res) => {
  const allMovies  = await getMovies()
  res.json ( allMovies)
})

router.put('/movies/update/:_id', async (request, response) => {
    const id = request.params
    const dataUpdate = request.body
    console.log(id);
    console.log(dataUpdate);
    const updateData = await  updateMovies(id, dataUpdate)
    response.json(updateData)
})

router.delete('/movies/delete/:_id', async (request, response) => {
    const id = request.params
    const dataDelete = request.body
    console.log(id);
    console.log(dataDelete);
    const deleteData = await deleteMovies(id,  dataDelete)
    response.json(deleteData)
})


 

router.post('/movie/create', async (req, res) => {
    console.log (req.body);
    const allMovies  = await postMovie(req.body)
    console.log(allMovies)
    res.json ( allMovies)
  })


module.exports = router
  