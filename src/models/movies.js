const mongoose = require ('mongoose');
const schema = new mongoose.Schema({nombre:String,duracion:String})
const Movies = mongoose.model('cinema-db', schema);


const getMovies = async () =>{
    return await Movies.find()
};


const updateMovies = async (id, dataUpdate)=>{
    return await Movies.updateOne(id, dataUpdate)
    // updateMovies = await movies.findById
}

const deleteMovies = async (id, deletedate)=>{
    return  Movies.deleteOne(id, deletedate)
    
}

const postMovie = async (dataSave)=>{
    return await Movies.create(dataSave) 
};



 

module.exports = {
    getMovies,
    postMovie,
    updateMovies,
    deleteMovies
    
};
