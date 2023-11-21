console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Apna-Bana-Le", filePath: "songs/1.mp3", coverPath: "songs/1.jpg"},
    {songName: "Baarish Ban Jaana - Payal Dev", filePath: "songs/2.mp3", coverPath: "songs/2.jpg"},
    {songName: "Barsaat Ho Jaaye", filePath: "songs/3.mp3", coverPath: "songs/3.jpg"},
    {songName: "Barsat Ki Dhun", filePath: "songs/4.mp3", coverPath: "songs/4.jpg"},
    {songName: "Bedardi Se Pyaar Ka - Jubin Nautiyal", filePath: "songs/5.mp3", coverPath: "songs/5.jpg"},
    {songName: "Bewafa Tera Masoom Chehra", filePath: "songs/6.mp3", coverPath: "songs/6.jpg"},
    {songName: "Dil Galti Kar Baitha Hai", filePath: "songs/7.mp3", coverPath: "songs/7.jpg"},
    {songName: "Dil Meri Na Sune", filePath: "songs/8.mp3", coverPath: "songs/8.jpg"},
    {songName: "Filhaal 2 - Mohabbat", filePath: "songs/9.mp3", coverPath: "songs/9.jpg"},
    {songName: "Hue Bechain", filePath: "songs/10.mp3", coverPath: "songs/10.jpg"},
    {songName: "Kesariya Brahmastra", filePath: "songs/11.mp3", coverPath: "songs/11.jpg"},
    {songName: "Lut Gaye Jubin Nautiyal", filePath: "songs/12.mp3", coverPath: "songs/12.jpg"},
    {songName: "Main Jis Din Bhulaa Du - Jubin Nautiyal", filePath: "songs/13.mp3", coverPath: "songs/13.jpg"},
    {songName: "Meethi Meethi - Jubin Nautiyal", filePath: "songs/14.mp3", coverPath: "songs/14.jpg"},
    {songName: "Meri Aashiqui - Jubin Nautiyal", filePath: "songs/15.mp3", coverPath: "songs/15.jpg"},
    {songName: "Raatan Lambiyan", filePath: "songs/16.mp3", coverPath: "songs/16.jpeg"},
    {songName: "Teri Galliyon Se - Jubin Nautiyal", filePath: "songs/17.mp3", coverPath: "songs/17.jpg"},
    {songName: "Thodi Jagah Marjaavaan", filePath: "songs/18.mp3", coverPath: "songs/18.jpg"},
]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=17){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})