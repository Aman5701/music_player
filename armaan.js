console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('armaan/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Bol Do Na Zara Azhar", filePath: "armaan/1.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Hua Hain Aaj Pehli Baar", filePath: "armaan/2.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Chale Aana - De De Pyaar De", filePath: "armaan/3.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Dil Mein Chhupa Loonga", filePath: "armaan/4.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Dil Mein Ho Tum", filePath: "armaan/5.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Ghar-Se-Nikalte-Hi-Armaan-Malik", filePath: "armaan/6.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Humein Tumse Pyaar - Armaan Malik", filePath: "armaan/7.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Itni Si Baat Hain Azhar", filePath: "armaan/8.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Jab Tak (M.S. Dhoni) Armaan Malik", filePath: "armaan/9.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Jeetne Ke Liye Azhar", filePath: "armaan/10.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Kaun-Tujhe--Armaan-Malik", filePath: "armaan/11.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Kuch-To-Hai-Armaan-Malik", filePath: "armaan/12.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Main-Rahoon-Ya-Na-Rahoon-Armaan-Malik", filePath: "armaan/13.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Oye Oye Azhar", filePath: "armaan/14.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Pyaar-Manga-Hai", filePath: "armaan/15.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Sab Tera - Baaghi", filePath: "armaan/16.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Tu Hi Na Jaane Azhar", filePath: "armaan/17.mp3", coverPath: "armaan/1.jpg"},
    {songName: "Wajah Tum Ho - Hate Story 3", filePath: "armaan/18.mp3", coverPath: "armaan/1.jpg"},
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
        audioElement.src = `armaan/${songIndex+1}.mp3`;
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
    audioElement.src = `armaan/${songIndex+1}.mp3`;
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
    audioElement.src = `armaan/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})