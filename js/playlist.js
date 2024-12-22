const playlists = {
    1: {
        name: "Today's Top Hits",
        description: "lovely song for you",
        image: "/asset/display/loving1.webp",
        tracks: [
            {
                name: "Yung Kai - Blue",
                artists: [{ name: "Yung Kai" }],
                album: { images: [{ url: "/asset/display/image (47).webp" }] },
                duration_ms: 214000,
                preview_url: "/asset/audio/Yung Kai - Blue.mp3",
            },
            {
                name: " 8 Letters",
                artists: [{ name: "Why Don't We" }],
                album: { images: [{ url: "/asset/display/image (48).webp" }] },
                duration_ms: 192000,
                preview_url: "/asset/audio/Vietsub  8 Letters - Why Don't We  Nhạc Hot TikTok  Lyrics Video.mp3",
            },
            {
                name: "A Thousand Years",
                artists: [{ name: "Christina Perri" }],
                album: { images: [{ url: "/asset/display/image (49).webp" }] },
                duration_ms: 287000,
                preview_url: "/asset/audio/Christina Perri - A Thousand Years [Official Music Video].mp3",
            },
        ],
    },
    2: {
        name: "Today's Top Hits",
        description: "The sadness of today's top hits",
        image: "/asset/display/image (50).webp",
        tracks: [
            {
                name: "Pastlives",
                artists: [{ name: "sapientdream " }],
                album: { images: [{ url: "/asset/display/image (50).webp" }] },
                duration_ms: 153000,
                preview_url: "/asset/audio/sapientdream - Pastlives (lyrics).mp3",
            },
            {
                name: "Someone You Loved",
                artists: [{ name: "Lewis Capaldi" }],
                album: { images: [{ url: "/asset/display/image (51).webp" }] },
                duration_ms: 186000,
                preview_url: "/asset/audio/Lewis Capaldi - Someone You Loved.mp3",
            },
            {
                name: "Another Love",
                artists: [{ name: "Tom Odell" }],
                album: { images: [{ url: "/asset/display/image (52).webp" }] },
                duration_ms: 247000,
                preview_url: "/asset/audio/Tom Odell - Another Love (Official Video).mp3",
            },
        ],
    },
    3: {
        name: "Today's Top Hits",
        description: "The biggest hits right now.",
        image: "/asset/display/image (50).webp",
        tracks: [
            {
                name: "Cruel Summer",
                artists: [{ name: "Taylor Swift" }],
                album: { images: [{ url: "/asset/display/image (50).webp" }] },
                duration_ms: 279000,
                preview_url: "/asset/audio/Taylor Swift - Cruel Summer (Official Audio).mp3",
            },
            {
                name: "the weeknd, g-eazy & halsey - starboy x him & i",
                artists: [{ name: "unknow" }],
                album: { images: [{ url: "/asset/display/image (51).webp" }] },
                duration_ms: 189000,
                preview_url: "/asset/audio/the weeknd, g-eazy & halsey - starboy x him & i (sped up  reverb).mp3",
            },
            {
                name: "Good For You x One Of The Girls ",
                artists: [{ name: "unknow" }],
                album: { images: [{ url: "/asset/display/image (52).webp" }] },
                duration_ms: 128000,
                preview_url: "/asset/audio/Good For You x One Of The Girls (Sped Up).mp3",
            },
        ],
    },
};

function getPlaylistId() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("id");
}

function renderPlaylist(playlistId) {
    const playlist = playlists[playlistId];
    if (!playlist) {
        console.error("Playlist not found");
        return;
    }

    document.getElementById("playlist-name").textContent = playlist.name;
    document.getElementById("playlist-description").textContent = playlist.description;
    document.getElementById("playlist-cover").src = playlist.image;
    document.getElementById("track-count").textContent = `${playlist.tracks.length} tracks`;

    const trackList = document.getElementById("track-list");
    trackList.innerHTML = "";

    playlist.tracks.forEach((track, index) => {
        const trackElement = document.createElement("li");
        trackElement.classList.add("track-item");
        trackElement.innerHTML = `
            <span class="track-number">${index + 1}</span>
            <span class="track-title">${track.name} - ${track.artists[0].name}</span>
            <span class="track-duration">${formatDuration(track.duration_ms)}</span>
        `;
        trackElement.addEventListener("click", () => {
            player.loadPlaylist(playlist.tracks);
            player.playTrack(index);
        });
        trackList.appendChild(trackElement);
    });
}

function formatDuration(ms) {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, "0")}`;
}

const playlistId = getPlaylistId();
if (playlistId) {
    renderPlaylist(playlistId);
}
