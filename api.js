const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(528374837);
});

const port = process.env.PORT || 8000;
app.listen(port);