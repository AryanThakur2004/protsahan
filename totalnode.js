const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql'); // or pg for PostgreSQL

const app = express();
const port = 3000;

// Database connection (update with your DB credentials)
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // your MySQL username
    password: '', // your MySQL password
    database: 'protsahan' // your database name
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

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:3000`);
});