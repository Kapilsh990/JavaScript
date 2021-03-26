const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

//music
const songs =[
    {
        name:'black_family_official',
        displayName : 'Black Mafia Official',
        artist : 'Kapil',
        image : 'kapil-1'
    },
    {
        name:'nirvana',
        displayName : 'Nirvana',
        artist : 'Shay$hak',
        image: 'kapil-2'
    },
    {
        name:'REGARDS RED',
        displayName : 'REGARDS RED',
        artist : 'Kapil',
        image: 'kapil-3'
    },
    {
        name:'Welcome to The Barrio',
        displayName : 'Welcome to The Barrio',
        artist : 'Kapil',
        image: 'kapil-4'
    },
];

let isPlaying = false;

//Play
function playSong(){
    isPlaying = true;
    playBtn.classList.replace('fa-play-circle','fa-pause-circle');
    playBtn.setAttribute('title','pause');
    music.play();
}

//Pause
function pauseSong(){
    playBtn.classList.replace('fa-pause-circle','fa-play-circle');
    playBtn.setAttribute('title','play');
    isPlaying = false;
    music.pause();
}

playBtn.addEventListener('click' , ()=>(isPlaying ? pauseSong() : playSong())); 

function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.image}.jpg`;
}

let songIndex = 0;

function nextSong(){
    songIndex++;
    if(songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

loadSong(songs[songIndex]);

function updateProgressBar(e){
    if(isPlaying){
        const { duration , currentTime } = e.srcElement;

        const progressPercentage = (currentTime/duration) * 100;
        progress.style.width= `${progressPercentage}%`; 

        const durationMinutes = Math.floor(duration/60);
        let durationSeconds = Math.floor(duration%60);
        if(durationSeconds < 10){
            durationSeconds = `0${durationSeconds}`;
        }
        if(durationSeconds){
            durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        const currentMinutes = Math.floor(currentTime/60);
        let currentSeconds = Math.floor(currentTime%60);
        if(currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`;
        }
        currentTimeEl.textContent = `${currentMinutes}:${currentSeconds}`;
    }
}

function setProgressBar(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;

    const { duration } = music ;
    music.currentTime = (clickX/width * duration);
}


prevBtn.addEventListener('click',prevSong);
nextBtn.addEventListener('click',nextSong);
music.addEventListener('ended' , nextSong);
music.addEventListener('timeupdate', updateProgressBar );
progressContainer.addEventListener('click', setProgressBar);