
// index.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Parse JSON bodies
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('Received Webhook:', JSON.stringify(req.body, null, 2));

    // Monday.com webhook verification (respond with challenge)
    if (req.body.challenge) {
        return res.status(200).json({ challenge: req.body.challenge });
    }

    // Normal webhook event
    const event = req.body.event;
    if (event) {
        console.log('Event received from Monday.com:', event);
    }

    res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.send('Webhook server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
