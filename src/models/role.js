const mongoose = require ('mongoose');
const schema = new mongoose.Schema(    

    {   role:String,
        email:String,
        password:String
    }   
)
const Role = mongoose.model('roll', schema);


const getRole = async () =>{
    return await Role.find()
};

module.exports = {
    getRole 
};