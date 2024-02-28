const express = require('express');

const app = express();

app.get('/',(req, res) => {
    res.send('Welcome Node JS ي');
})
app.listen(8000, () => {
    console.log('App Running...');
})