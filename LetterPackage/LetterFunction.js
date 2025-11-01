let scroll = document.getElementById("letter");
let container = document.getElementById("container");
let headTxt = document.getElementById("headerTxt");
let bodyTxt = document.getElementById("bodyTxt");
let phase = 0;

container.onclick = function(){
    if(phase==0){
        scroll.src="Birthday20SourceImg/Icons/WisdomScrollAnimation.gif"; 
    }else{
        headTxt.innerText="";
        bodyTxt.innerText=""
        scroll.src="Birthday20SourceImg/Icons/WisdomScrollReverse.gif";
    }
    setTimeout(scrollInteract,1000);
};

function scrollInteract(){
    if(phase==0){
        scroll.src="Birthday20SourceImg/Icons/WisdomOfScrollOpen.png";
        setTimeout(()=>{
            headTxt.innerText="To the honorable Natiodies,";
            bodyTxt.innerText="This scroll is scribed and bestowed once a year to those who are deemed" +
                        "worthy and receive the title \"Natiodies.\""+ "The kingdom praised thy existence. You should "+
                        "be blessed with prosperity and love. The presence of thy name calms the villagers since" +
                        "they are safe. Thou art loved by us, and we carried thee like our child. We always ask" +
                        "the Lord for your safe journey. Always be reminded wherever you go. The stars are always" +
                        "with thee. Te amo, Natiodies, Commissioner. Embrace your journey, and cherish it.";
        },500);
        phase++;
    }else{

        scroll.src="Birthday20SourceImg/Icons/WisdomOfScroll.png";
        phase--;
    }
}
