const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

let playlist = [
    { id: 1, title: 'Song 1', artist: 'Artist 1' },
    { id: 2, title: 'Song 2', artist: 'Artist 2' },
];

app.get('/api/playlist', (req, res) => {
    res.json(playlist);
});

app.post('/api/playlist', (req, res) => {
    const { title, artist } = req.body;
    const newSong = { id: playlist.length + 1, title, artist };
    playlist.push(newSong);
    res.json(newSong);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
