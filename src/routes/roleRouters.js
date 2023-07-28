// const express = require('express')
// // const { getRole } = require('../models/role')
// const router = express.Router()

// router.get("/hola", async (req, res) => {
//     console.log("hola")
//     return res.status(200).json("ok")
// })

// // router.get('/loquesea', async (req, res) => {
// //     console.log(req)
// //     console.log ("hola")
// //     /* 
// //     try {
// //         const allRole = await getRole()
// //         res.json( allRole )
        

// //     } catch (error) {
// //         console.log (error)
        
// //     } */

// //     return res.json("ok")

// //   })

// module.exports = router
const express = require('express')
const router = express.Router()

// MILDDLEWARES
router.use(express.urlencoded({ extended: true }));
router.use(express.json({ extended: true }));

router.get('/hola', (req, res) => {
    console.log("Hola")
    res.json('ok')
})

module.exports = router