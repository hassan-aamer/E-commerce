const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: 'config.env'});

const app = express();

app.get('/',(req, res) => {
    res.send('Welcome Node JS Api');
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log('App Running on Port 9000');
})