require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000; // Use the port from env or default to 3000

// Database connection using environment variables
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to DB: ', err);
        return;
    }
    console.log('Connected to DB');
});

// Middleware to parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route for Paintball registration
app.post('/add_paintball_registration', (req, res) => {
    const { teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, players, gameMode, gameDuration } = req.body;

    const query = 'INSERT INTO paintball_registration (teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, players, gameMode, gameDuration) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, JSON.stringify(players), gameMode, gameDuration], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Paintball registration successful' });
    });
});

// Route for Stall registration
app.post('/add_stall_registration', (req, res) => {
    const { stallName, stallDescription, contactName, contactEmail, contactNumber, bidAmount } = req.body;

    const query = 'INSERT INTO stall_registration (stallName, stallDescription, contactName, contactEmail, contactNumber, bidAmount) VALUES (?, ?, ?, ?, ?, ?)';
    
    db.query(query, [stallName, stallDescription, contactName, contactEmail, contactNumber, bidAmount], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Stall registration successful' });
    });
});

// Route for Terminator registration
app.post('/add_terminator_registration', (req, res) => {
    const { teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, players, gameMode, gameDuration } = req.body;

    const query = 'INSERT INTO terminator_registration (teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, players, gameMode, gameDuration) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, JSON.stringify(players), gameMode, gameDuration], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Terminator registration successful' });
    });
});

// Route for Music registration
app.post('/add_music_talent_hunt_registration', (req, res) => {
    const { artistName, musicGenre, songTitle, musicalInstrument, requirements, contactEmail, contactNumber, submissionDate } = req.body;

    const query = 'INSERT INTO music_talent_hunt_registration (artistName, musicGenre, songTitle, musicalInstrument, requirements, contactEmail, contactNumber, submissionDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [artistName, musicGenre, songTitle, musicalInstrument, requirements, contactEmail, contactNumber, submissionDate], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Music registration successful' });
    });
});

// Route for Dance registration
app.post('/add_dance_talent_hunt_registration', (req, res) => {
    const { dancerName, danceStyle, songTitle, dancePartner, requirements, contactEmail, contactNumber, submissionDate } = req.body;

    const query = 'INSERT INTO dance_talent_hunt_registration (dancerName, danceStyle, songTitle, dancePartner, requirements, contactEmail, contactNumber, submissionDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [dancerName, danceStyle, songTitle, dancePartner, requirements, contactEmail, contactNumber, submissionDate], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Dance registration successful' });
    });
});

// Route for Indigenous registration
app.post('/add_indigenous_talent_hunt_registration', (req, res) => {
    const { artistName, indigenousGroup, traditionalSkill, requirements, contactEmail, contactNumber, submissionDate } = req.body;

    const query = 'INSERT INTO indigenous_talent_hunt_registration (artistName, indigenousGroup, traditionalSkill, requirements, contactEmail, contactNumber, submissionDate) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [artistName, indigenousGroup, traditionalSkill, requirements, contactEmail, contactNumber, submissionDate], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Indigenous registration successful' });
    });
});

// Route for Football registration
app.post('/add_football_registration', (req, res) => {
    const { teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, players } = req.body;

    const query = 'INSERT INTO football_registration (teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, players) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    db.query(query, [teamName, teamDescription, contactName, contactEmail, contactNumber, playerCount, JSON.stringify(players)], (error, results) => {
        if (error) {
            console.error('Error inserting data: ', error);
            return res.status(500).json({ message: 'Internal server error' });
        }
        res.status(200).json({ message: 'Football registration successful' });
    });
});

const url = `https://noted-8mnl.onrender.com`;
const interval = 30000;

function reloadWebsite() {
  axios
    .get(url)
    .then((response) => {
      console.log(
        `Reloaded at ${new Date().toISOString()}: Status Code ${
          response.status
        }`
      );
    })
    .catch((error) => {
      console.error(
        `Error reloading at ${new Date().toISOString()}:`,
        error.message
      );
    });
}

setInterval(reloadWebsite, interval);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
