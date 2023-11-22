const express =  require('express');
const mongoose = require('mongoose');
require("dotenv").config();
const productRoutes = require("./routes/products.js")

const app = express();
const port = 9000;

//middleware
app.use(express.json());
app.use('/api', productRoutes);


// routes
app.get('/', (req, res) => {
    res.send('welcome to my API');
});

// mongodb connection
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Connected to mongoDB Atlas"))
    .catch((error) => console.error(error))

const server = app.listen(9000, ()=> console.log('server listening on port', port));

module.exports = {app, server};
