let item = document.getElementById("item");
let song = document.getElementById("song");
let phase =0;
item.onclick = ()=>{
    if(phase==0){
        item.src="Birthday20SourceImg/Icons/OcarinaAnimation.gif";
        song.play()
        phase++;
    }else{
        item.src="Birthday20SourceImg/Icons/Ocarina.png";
        song.pause();
        phase--;
    }

    song.addEventListener('ended',()=>{
        item.src="Birthday20SourceImg/Icons/Ocarina.png";
    });
};