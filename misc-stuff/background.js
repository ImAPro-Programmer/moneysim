let playlist = [
    './misc-stuff/chill_lobby.mp3',
    './misc-stuff/nostalgia_lobby.mp3',
    './misc-stuff/sherbet_lobby.mp3',
    './misc-stuff/shop.mp3',
    './misc-stuff/video_game_lobby.mp3',
];

console.log("Background music script loaded successfully!");
let current = 0;
let audio = new Audio();


audio.onended = () => {
    current++;
    if (current < playlist.length) {
        audio.src = playlist[current];
        audio.play();
    } else {
        current = 0;
        audio.src = playlist[current];
        audio.play();
    }
};

function startMusic() {
    current = Math.floor(Math.random() * playlist.length); // update current!
    audio.volume = 0.35;
    audio.src = playlist[current];
    audio.autoplay = true;
    audio.play().catch(err => {
        console.warn("Playback prevented:", err);
    });
}


document.getElementById("loginButton").addEventListener("click", startMusic);
document.getElementById("signUpButton").addEventListener("click", startMusic);
