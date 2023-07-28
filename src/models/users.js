const mongoose = require ('mongoose');
const schema = new mongoose.Schema(
    {
        name: String,
        last_nasme: String,
        date_birthday: String,
        rol:String,
        cellphone: String,
        email: String,
        password: String,
        user_name: String,
        // Clientes:String
    }
)
        
const Users = mongoose.model('user', schema);


const getUsers = async () =>{
    console.log('paseeeee');
    return await Users.find()
};

const updateUsers = async (id, userUpdate)=>{
    return await Users.updateOne(id, userUpdate)
}


const deleteUsers = async (id, deletedate)=>{
    return  Users.deleteOne(id, deletedate)
    
};
const postUsers = async (dataSave)=>{
    return await Users.create(dataSave) 
};

module.exports = {
    getUsers,
    updateUsers,
    deleteUsers,
    postUsers   
};