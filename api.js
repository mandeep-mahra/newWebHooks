const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.json({
        'hello':'hi'
    });
});

const port = process.env.PORT || 8000;
app.listen(port);