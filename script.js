console.log("welcome to Spotify!!")
//initialization
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let songs=[
    {songName:"tere vaste-0",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"tere vaste-1",filepath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"tere vaste-2",filepath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"tere vaste-3",filepath:"songs/2.mp3",coverPath:"covers/4.jpg"},
    {songName:"tere vaste-4",filepath:"songs/3.mp3",coverPath:"covers/5.jpg"},
    {songName:"tere vaste-5",filepath:"songs/1.mp3",coverPath:"covers/6.jpg"},
    {songName:"tere vaste-6",filepath:"songs/2.mp3",coverPath:"covers/1.jpg"},
    {songName:"tere vaste-7",filepath:"songs/2.mp3",coverPath:"covers/4.jpg"},
    {songName:"tere vaste-8",filepath:"songs/3.mp3",coverPath:"covers/6.jpg"} 
];

// audioElement.play();
//handle play/pause
masterPlay.addEventListener('click',(element)=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause(); 
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

});
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
//update seekbar
 progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
//  console.log(progress);
 myProgressBar.value=progress;

});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
songItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    });
const makeAllplays=()=>{
    
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause-circle');
element.classList.add('fa-play-circle');
})
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e);
        makeAllplays();
        
        songindex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${songindex+1}.mp3`;
            masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
         gif.style.opacity=1;
       masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex=0;
    }
    else{
    songindex +=1
    }

    audioElement.src=`songs/${songindex+1}.mp3`;
     masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
         gif.style.opacity=1;
       masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex=0;
    }
    else{
    songindex -=1
    }
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songindex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
         gif.style.opacity=1;
       masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})