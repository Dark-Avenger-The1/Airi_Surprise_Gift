let container = document.getElementById("container");
let phase=0;
let width=container.offsetWidth;
let chara = document.getElementById("chara");
let charaName = document.getElementById("name");
let notif = document.getElementById("notif");
let declineButton=document.getElementById("declineButton");
let acceptButton=document.getElementById("acceptButton");
let acceptTxt = document.getElementById("acceptButtonTxt");
let rewardTxt = document.getElementById("rewardTxt");
let rewardImg = document.getElementById("rewardImg");
let interact = true;
let clickable = true;
let reward = document.getElementById("reward");
let reject = document.getElementById("reject");
let declined =0;

container.onclick= function(){
   if(clickable==true){
    phase++;
   }
    dialog(phase,width);
}

declineButton.onclick = function()
{
    interact=true;
    clickable=true;
    if(declined>1) reject.href="https://campuchiavd.github.io/vdff.mp4";
    else declined++;
}

acceptButton.onclick=function(){
    clickable=true;
    interact=true;
}
function dialog(phase,width){
    if(interact==true){
        if (width<=600){
        switch(phase){
        case 1: 
            notif.style.bottom="290px";
            chara.style.bottom="219px";
            break;
        case 2:
            notif.style.bottom="290px";
            chara.style.bottom="161px";
             break;
        case 3:
            notif.style.bottom="342px";
            chara.style.bottom="180px";
            break;
        case 4:
            break;
        case 5:
            notif.style.bottom="342px";
            chara.style.bottom="180px";
           break;
        case 7:
            notif.style.bottom="386px";
            chara.style.bottom="237px";
           break;    
        case 8:
            notif.style.bottom="455px";
            chara.style.bottom="295px";
           break; 
        case 10:
            chara.style.bottom="160px";    
        } 
        }
        switch(phase){
            case 1:
                document.getElementById("dialogTxt").innerText="We welcome you to this tavern in celebration of your 20th year of remarkable adventures, Commissioner. In recognition of your achievements, the innkeeper wishes to honor your name and present you with a special reward. (Click to continue)...";
            
                break;
            case 2:
                document.getElementById("dialogTxt").innerText="The innkeeper has brought forth three treasures — the Wisdom of Scroll, the Elven Ocarina Record, and the Ancient Cube of Prism. (Click to continue)...";
                break;
            case 3:
                document.getElementById("dialogTxt").innerText="Let us begin with the first reward — the Wisdom of Scroll. It is bestowed only once a year to those deemed truly worthy. Within it lies insight and words of gratitude for one’s noble journey. (Click to continue)...";
                interact=false;
                break;
            case 5:
                document.getElementById("dialogTxt").innerText="Next, the Elven Ocarina Record. This sacred melody, once sung by a great Elven Cleric, carries a gentle healing power. May its tune bring you comfort and strength throughout your path. (Click to continue)...";
                interact=false;
                notif.style.visibility="hidden";
                break;
            case 7:
                document.getElementById("dialogTxt").innerText="Lastly, the Ancient Cube of Prism. Within it rests an artifact imbued with the strength and wisdom of Aries. When attuned, it connects your soul to that of the Sixteenth Warrior Commander of Malacio — Aries, renowned for his unmatched valor and strategic brilliance in every battle. (Click to continue)...";
                notif.style.visibility="hidden";
                break;
            case 8:
                document.getElementById("dialogTxt").innerText="But heed my warning, Commissioner. Once you bond with the artifact, your soul becomes intertwined with Aries. With each passing year, the connection deepens — and your strength grows through understanding and harmony between your souls. Nurture this bond well, for true power arises not from might alone, but from the unity of hearts bound by destiny. (Click to continue)...";
                interact=false;
                break;  
            case 10:
                notif.style.visibility="hidden";
                document.getElementById("dialogTxt").innerText="You had claimed all the three treasures, Commisioner. I hope you loved the gift gave by the innkeeper. Have a nice a trip in your journey and happy birthday, Airi.";  
            }  
 
        }else{
            if(width<=600){
                switch(phase){
                case 4:
                    notif.style.visibility="visible";
                    reward.src="Birthday20SourceImg/Icons/WisdomOfScroll.png";
                    rewardTxt.innerText="Wisdom of Scroll";
                    notif.style.backgroundColor;
                    clickable=false;
                    break;
                case 6:
                    notif.style.visibility="visible";
                    reward.src="Birthday20SourceImg/Icons/Ocarina.png";
                    rewardTxt.innerText="Elvin Ocarina Record";
                    notif.style.backgroundColor;
                    clickable=false;
                    break;
                case 9:
                    notif.style.visibility="visible";
                    reward.src="Birthday20SourceImg/Icons/Cube.png"
                    rewardTxt.innerText="Ancient Cube of Prism";
                    notif.style.backgroundColor;
                    clickable=false;
                    break;
                }
            }
            switch(phase){
                case 4:
                    notif.style.visibility="visible";
                    reward.src="Birthday20SourceImg/Icons/WisdomOfScroll.png";
                    acceptTxt.href="BirthdayLetter.html";
                    rewardTxt.innerText="Wisdom of Scroll";
                    notif.style.backgroundColor;
                    clickable=false;
                    break;
                case 6:
                    notif.style.visibility="visible";
                    reward.src="Birthday20SourceImg/Icons/Ocarina.png";
                    acceptTxt.href="birthdaySong.html";
                    rewardTxt.innerText="Elven Ocarina Record";
                    notif.style.backgroundColor;
                    clickable=false;
                    break;
                case 9:
                    notif.style.visibility="visible";
                    reward.src="Birthday20SourceImg/Icons/Cube.png"
                    acceptTxt.href="BirthdayGift.html";
                    rewardTxt.innerText="Ancient Cube of Prism";
                    notif.style.backgroundColor;
                    clickable=false;
                    break;
            }
        }
       
}