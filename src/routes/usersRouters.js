 const express = require ('express');
 const {  getUsers, updateUsers,deleteUsers, postUsers} = require('../models/users')
 const router = express.Router();


router.get('/users/all', async (req, res) => {
    const allusers = await getUsers()
    console.log('allusers', allusers);
    res.json (allusers)
})

router.put('/users/update/:_id', async (request, response) => {
  const id = request.params
  const userUpdate = request.body
  console.log(id);
  console.log(userUpdate);
  const updateData = await  updateUsers(id, userUpdate)
  response.json(updateData)
});

router.delete('/users/delete/:_id', async (request, response) => {
  const id = request.params
  const userDelete = request.body
  console.log(id);
  console.log(userDelete);
  const usersDelete = await deleteUsers(id,  userDelete)
  response.json(usersDelete)
});

router.post('/user/create', async (req, res) => {
  console.log (req.body);
  const usersall  = await postUsers(req.body)
  console.log(usersall)
  res.json (usersall)
})


  module.exports = router