const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
//import ROUTES
const ticketRoutes = require('./controller/ticketRoutes')

//get mongodb url
const mongodb = process.env.DB_CONNECTION;
//connect mongodb
mongoose.connect(mongodb,
    {useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(
    ()=> console.log('connected to mongo DB!')
    ).catch(err => console.log('DB Connection Error: ${err.message}'));

app.use('/tickets', ticketRoutes);

app.listen(3000,function(){
    console.log('Server is running on...');
});