// index.js
require('dotenv').config(); // <-- Add this to load your .env file
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios'); // <-- Add axios for making API requests

const app = express();
const PORT = process.env.PORT || 3000;

const MONDAY_API_URL = "https://api.monday.com/v2";
const MONDAY_API_KEY = process.env.MONDAY_API_KEY;

// Helper function to update the Name column
async function updateNameColumn(boardId, itemId, newName) {
    const query = `
        mutation {
            change_simple_column_value(
                board_id: ${boardId},
                item_id: ${itemId},
                column_id: "name",
                value: "${newName}"
            ) {
                id
            }
        }
    `;

    try {
        const response = await axios.post(MONDAY_API_URL, { query }, {
            headers: {
                Authorization: MONDAY_API_KEY,
                'Content-Type': 'application/json'
            }
        });

        console.log("✅ Successfully updated Name:", response.data);
    } catch (error) {
        console.error("❌ Error updating Name column:", error.response?.data || error.message);
    }
}

// Parse JSON bodies
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    console.log('Received Webhook:', JSON.stringify(req.body, null, 2));

    // Monday.com webhook verification (respond with challenge)
    if (req.body.challenge) {
        return res.status(200).json({ challenge: req.body.challenge });
    }

    // Normal webhook event
    const event = req.body.event;
    if (event) {
        console.log('Event received from Monday.com:', event);

        // Handle 'create_pulse' events
        if (event.type === 'create_pulse') {
            const originalName = event.pulseName || '';
            const cleanedName = originalName.replace(/\s*\(copy\)/i, '').trim();
            const itemId = event.pulseId;
            const boardId = event.boardId;
        
            if (originalName !== cleanedName) {
                console.log(`🔧 Cleaning name from "${originalName}" to "${cleanedName}"`);
                await updateNameColumn(boardId, itemId, cleanedName);
            }
        }
        
    }

    res.status(200).send('OK');
});

app.get('/', (req, res) => {
    res.send('Webhook server is up and running!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server is listening on port ${PORT}`);
});
