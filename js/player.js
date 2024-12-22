class Player {
    constructor() {
        this.audioElement = new Audio();
        this.isPlaying = false;
        this.currentTrack = null;
        this.playlist = [];

        this.prevButton = document.getElementById("prev-button");
        this.playPauseButton = document.getElementById("play-pause-button");
        this.nextButton = document.getElementById("next-button");
        this.progressBar = document.getElementById("progress");

        this.setupEventListeners();
    }

    setupEventListeners() {
        this.prevButton.addEventListener("click", () => this.playPrevious());
        this.playPauseButton.addEventListener("click", () => this.togglePlayPause());
        this.nextButton.addEventListener("click", () => this.playNext());
        this.audioElement.addEventListener("timeupdate", () => this.updateProgress());
    }

    loadPlaylist(playlist) {
        this.playlist = playlist;
        this.currentTrack = 0;
    }

    playTrack(index) {
        if (index >= 0 && index < this.playlist.length) {
            this.currentTrack = index;
            const track = this.playlist[this.currentTrack];
            this.audioElement.src = track.preview_url;
            this.audioElement.play();
            this.isPlaying = true;
            this.updatePlayerInfo();
            this.updatePlayPauseButton();
        }
    }

    togglePlayPause() {
        if (this.isPlaying) {
            this.audioElement.pause();
            this.isPlaying = false;
        } else {
            this.audioElement.play();
            this.isPlaying = true;
        }
        this.updatePlayPauseButton();
    }

    playPrevious() {
        this.playTrack(this.currentTrack - 1);
    }

    playNext() {
        this.playTrack(this.currentTrack + 1);
    }

    updateProgress() {
        const progress = (this.audioElement.currentTime / this.audioElement.duration) * 100;
        this.progressBar.style.width = `${progress}%`;
    }

    updatePlayerInfo() {
        const track = this.playlist[this.currentTrack];
        document.getElementById("track-name").textContent = track.name;
        document.getElementById("artist-name").textContent = track.artists[0].name;
        document.getElementById("album-cover").src = track.album.images[0].url;
    }

    updatePlayPauseButton() {
        this.playPauseButton.innerHTML = this.isPlaying
            ? `<img width="30" src="/asset/player_icons/pause.png" alt="" />`
            : ` <img width="30" src="/asset/player_icons/play-button-arrowhead.png" alt="" />`;
    }
}

const player = new Player();
