document.addEventListener("DOMContentLoaded", function () {
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playlistContainer = document.getElementById("playlistContainer");

    playPauseBtn.addEventListener("click", function () {
        playPauseBtn.classList.toggle("playing");
        playPauseBtn.textContent = playPauseBtn.classList.contains("playing") ? "Pause" : "Play";
        
        fetch('http://localhost:3001/api/playlist')
            .then(response => response.json())
            .then(data => displayPlaylist(data))
            .catch(error => console.error('Error fetching playlist:', error));
    });

    function displayPlaylist(playlist) {
        playlistContainer.innerHTML = '';
        playlist.forEach(song => {
            const songItem = document.createElement('div');
            songItem.classList.add('song-item');
            songItem.innerHTML = `<strong>${song.title}</strong> - ${song.artist}`;
            playlistContainer.appendChild(songItem);
        });
    }
});
