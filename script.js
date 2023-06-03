letsongIndex=0;
let audioElement=new Audio('deva.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItem=Array.from(document.getElementsByClassName('songItem'));

let song=[
    {songName: "Deva- Arijit Singh",filepath:"songs/Deva.mp3",coverpath: "covers/Deva.jpg"},
    {songName: "Kesariya- Arijit Singh ",filepath:"songs/Kesariya.mp3",coverpath: "covers/Kesariya.jpg"},
    {songName: "Rasiyaa- Arijit Singh",filepath:"songs/Rasiya.mp3",coverpath: "covers/Rasiyaa.jpg"},
    {songName: "Shiva-Bhramstra",filepath:"songs/Shiva.mp3",coverpath: "covers/siva.jpg"},
    {songName: "Dance Ka Bhoot- Bhramstra",filepath:"songs/2.mp3",coverpath: "covers/Dance.jpg"}
]
songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=song[i].coverpath;
    element.getElementsByClassName("songName")[0].innerText=song[i].songName;
})
//audioElement.play
//Handle play pause event
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    gif.style.opacity=1;
    }
else{
        audioElement.pause();
    masterPlay.classList.remove('fa-circle-pause');
    masterPlay.classList.add('fa-circle-play');
    gif.style.opacity=0;

    }

})
//Listen to events
audioElement.addEventListener('timeupdate',()=>{
    console.log("TimeUpdate");
    Progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(Progress);
    myProgressBar.value=Progress;

});
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause')
        element.classList.add('fa-circle-play')
        
    })

}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index=parseInt(e.target.id)
        e.target.classList.remove('fa-circle-play')
        e.target.classList.add('fa-circle-pause')
        audioElement.src=`songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
         console.log(e.target);
        masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

    })
})