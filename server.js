const express =  require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors =require('cors');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5501;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGO_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlPaser: true,
    useUnfiedTopologyL: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Mongodb Connection success!');
})


app.listen(process.env.PORT || 5501, () => {
    console.log(`Server is up and running on port number: ${process.env.PORT || 5501}`);
});


