let container = document.getElementById("container");
let phase=0;
let width=container.offsetWidth;
let chara = document.getElementById("chara");
let charaName = document.getElementById("name");
let notif = document.getElementById("notif");
let declineButton=document.getElementById("declineButton");
let acceptButton=document.getElementById("acceptButton");
let rewardTxt = document.getElementById("rewardTxt");
let rewardImg = document.getElementById("rewardImg");
let interact = true;

container.onclick= function(){
    phase++;
    dialog(phase,width);
}

declineButton.onclick = function()
{
    interact=true;
}

acceptButton.onclick=function(){
    interact=true;
}
function dialog(phase,width){
    if(interact==true){
        if (width<=600){
        switch(phase){
        case 1:
            
            break;
        case 2:
            notif.style.bottom="290px"
            chara.style.bottom="128px";
            charaName.style.bottom="88px";
             break;
        case 3:
            notif.style.bottom="328px"
            chara.style.bottom="165px";
            charaName.style.bottom="125px";
            break;
        case 4:
            break;
        case 5:
            notif.style.bottom="374px"
            chara.style.bottom="201px";
            charaName.style.bottom="161px";
           break;
        case 6:
            notif.style.bottom="386px"
            chara.style.bottom="210px";
            charaName.style.bottom="176px";
           break;    
        } 
        }
        switch(phase){
            case 1:
                document.getElementById("dialogTxt").innerText="We welcome you to this tavern in celebration of your 20th year of remarkable adventures, Commissioner. In recognition of your achievements, the innkeeper wishes to honor your name and present you with a special reward.";
            
                break;
            case 2:
                document.getElementById("dialogTxt").innerText="The innkeeper has brought forth three treasures — the Wisdom of Scroll, the Troubadour Chant Record, and the Ancient Cube of Prism.";
                break;
            case 3:
                document.getElementById("dialogTxt").innerText="Let us begin with the first reward — the Wisdom of Scroll. It is bestowed only once a year to those deemed truly worthy. Within it lies insight and words of gratitude for one’s noble journey.";
                interact=false;
                break;
            case 5:
                document.getElementById("dialogTxt").innerText="Next, the Troubadour Chant Record. This sacred melody, once sung by a great Elven Cleric, carries a gentle healing power. May its tune bring you comfort and strength throughout your path.";
                interact=false;
                break;
            case 7:
                document.getElementById("dialogTxt").innerText="Lastly, the Ancient Cube of Prism. Within it rests an artifact imbued with the strength and wisdom of Aries. When attuned, it connects your soul to that of the Sixteenth Warrior Commander of Malacio — Aries, renowned for his unmatched valor and strategic brilliance in every battle.";
                break;
            case 8:
                document.getElementById("dialogTxt").innerText="But heed my warning, Commissioner. Once you bond with the artifact, your soul becomes intertwined with Aries. With each passing year, the connection deepens — and your strength grows through understanding and harmony between your souls. Nurture this bond well, for true power arises not from might alone, but from the unity of hearts bound by destiny.";
                interact=false;
                break;    
            }  
 
        }else{
            if(width<=600){
                switch(phase){
                case 4:
                    rewardImg.innerText="Img1"
                    rewardTxt.innerText="Wisdom of Scroll";
                    notif.style.width="75%";
                    notif.style.height="auto";
                    notif.style.minHeight="150px";
                    notif.style.backgroundColor;
                    break;
                case 6:
                    rewardImg.innerText="Img2"
                    rewardTxt.innerText="Troubadour Chant Record";
                    notif.style.width="75%";
                    notif.style.height="auto";
                    notif.style.minHeight="150px";
                    notif.style.backgroundColor;
                    break;
                case 9:
                    rewardImg.innerText="Img3"
                    rewardTxt.innerText="Ancient Cube of Prism";
                    notif.style.width="75%";
                    notif.style.height="auto";
                    notif.style.minHeight="150px";
                    notif.style.backgroundColor;
                    break;
                }
            }
            switch(phase){
                case 4:
                    rewardImg.innerText="Img1"
                    rewardTxt.innerText="Wisdom of Scroll";
                    notif.style.width="600px";
                    notif.style.height="300px";
                    notif.style.backgroundColor;
                    break;
                case 6:
                    rewardImg.innerText="Img2"
                    rewardTxt.innerText="Troubadour Chant Record";
                    notif.style.width="600px";
                    notif.style.height="300px";
                    notif.style.backgroundColor;
                    break;
                case 9:
                    rewardImg.innerText="Img3"
                    rewardTxt.innerText="Ancient Cube of Prism";
                    notif.style.width="600px";
                    notif.style.height="300px";
                    notif.style.backgroundColor;
                    break;
            }
        }
       
}