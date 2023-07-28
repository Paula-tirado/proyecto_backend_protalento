const mongoose = require ('mongoose');
const Schema = new mongoose.Schema(    

    {   role:String,
        email:String,
        password:String
    }   
)
const Role = mongoose.model('roll', Schema);


const getRole = async () =>{
    console.log('paseeeee modeloooooo');
    return await Role.find();
};

module.exports = {
    getRole 
};