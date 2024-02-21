const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const hubChallenge = req.query['hub.challenge'];
    
    res.send(hubChallenge);
});

const port = process.env.PORT || 8000;
app.listen(port);