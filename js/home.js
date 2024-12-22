const featuredPlaylists = [
    {
        id: "1",
        name: "Today's Top Hits",
        description: "The biggest hits right now.",
        image: "/asset/display/loving1.webp",
    },
    {
        id: "2",
        name: "RapCaviar",
        description: "New music from the biggest names in hip-hop.",
        image: "/asset/display/image (47).webp",
    },
    {
        id: "3",
        name: "Rock Classics",
        description: "Rock legends & epic songs that continue to inspire generations.",
        image: "/asset/display/image (48).webp",
    },
];

function renderFeaturedPlaylists() {
    const playlistGrid = document.querySelector(".playlist-grid");
    featuredPlaylists.forEach((playlist) => {
        const playlistElement = document.createElement("div");
        playlistElement.classList.add("playlist-item");
        playlistElement.innerHTML = `
            <img src="${playlist.image}" alt="${playlist.name}">
            <h3>${playlist.name}</h3>
            <p>${playlist.description}</p>
        `;
        playlistElement.addEventListener("click", () => {
            window.location.href = `playlist.html?id=${playlist.id}`;
        });
        playlistGrid.appendChild(playlistElement);
    });
}

renderFeaturedPlaylists();
