const express = require('express');
const { db } = require('./firebase.js')  
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const hubChallenge = req.query['hub.challenge'];
    
    res.send(hubChallenge);
});
app.post('/', async (req, res) => {
    console.log("triggered", req.body);
    const ref = db.collection('subscriptionData').doc('lDAJsezo5PQduLEW1yS1');
    const time = (Date.now());
    const result = await ref.set({
        [time] : req.body
    },{ merge: true }); 
    res.status(200).send("EVENT_RECEIVED");
});

const port = process.env.PORT || 8000;
app.listen(port);