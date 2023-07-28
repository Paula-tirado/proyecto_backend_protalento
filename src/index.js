const express = require('express');
const app = express();
const morgan = require ('morgan');
const mongoose = require ('mongoose');
// const moviesRouters = require ('./routes/moviesRoutes')
// const usersRouters = require ('./routes/usersRouters')
// const roleRouters = require('./routes/roleRouters')

app.use (express.json())

mongoose.connect('mongodb+srv://paula97tirado:TLR3uoHOO7ugezt9@cinemasdb.zuddxbh.mongodb.net/?retryWrites=true&w=majority');

app.use(roleRouters)
// app.use (moviesRouters)
// app.use (usersRouters)

//seting
 app.set('port', 3000);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended:false }));

// app.use(express.json());

app.listen(3000,
()=>{
    console.log(`server on port ${app.get('port')}`);
});