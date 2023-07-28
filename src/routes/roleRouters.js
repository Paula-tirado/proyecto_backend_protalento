const express = require('express')
const router = express.Router()
const { getRole } = require('../models/role')

router.get('/role/all', async (req, res) => {
    console.log('paseeeeeeeee');

    try {
        const allRole = await getRole();
        return res.json(allRole);

    } catch (error) {
        console.log(error)
    } 


});

module.exports = router