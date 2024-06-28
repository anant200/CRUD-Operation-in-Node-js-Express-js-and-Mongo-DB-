//server.js
const express = require('express');
const connectDB = require('./database/db');
const userRoutes = require('./routes/userRoutes');
const cors = require("cors")
const Anantdata = require("./model/model")
const app = express();
const port = 8000;

app.use(cors());

// Connect to the database
connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', './views');

//get data from backend
app.get('/myuser', function (req, res) {  
    // res.sendFile();  
    Anantdata.find()
    .then( anants => res.json(anants))
    .catch(err => res.json(err))
  
 }) ; 

// Routes
app.use('/', userRoutes);

// Start the server
app.listen(port, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Server is started at port ${port}`);
    }
});