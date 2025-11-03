let cube = document.getElementById("cube");
let phase = 0;

cube.onclick = () =>{
    if(phase==0){
        cube.src="Birthday20SourceImg/Icons/CubeAnimation.gif"
        setTimeout(()=>
        cube.src="Birthday20SourceImg/Icons/Cake.png"
        ,1000);
        phase++;
    }
};

