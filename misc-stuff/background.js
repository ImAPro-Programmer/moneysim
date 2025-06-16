let playlist = [
    "chill_lobby.mp3",
    "nostalgia_lobby.mp3",
    "sherbet_lobby.mp3",
    "shop.mp3",
    "video_game_lobby.mp3",
];

console.log("Background music script loaded successfully!");
let current = 0;
let audio = new Audio();
audio.src = playlist[current];
audio.autoplay = true;
audio.onended = () => {
    current ++;
    if (current < playlist.length){
        audio.src = playlist[current];
        audio.play();
    } else {
        current = 0;
        audio.src = playlist[current];
        audio.play();
    }
};