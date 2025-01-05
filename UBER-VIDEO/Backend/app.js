const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors')
const app = express();
const cokkieParser = require('cookie-parser');
const connectToDb = require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')

connectToDb();

 app.use(cors());
 app.use(express.json());
 app.use(express.urlencoded({extended:true}))
 app.use(cokkieParser());


app.get('/',(req,res)=>{
    res.send("hello world")
})

app.use('/users',userRoutes);
app.use('/captains',captainRoutes);

module.exports = app;