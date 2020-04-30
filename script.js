window.addEventListener('load',()=> {
     const sound = document.querySelectorAll('.sound');
     const pads = document.querySelectorAll('.pads div');
     const visual = document.querySelector('.visual');
     const colors = [ "red","blue","chartreuse", "hotpink", "purple", "orange" ];
     
     
     // lets get going with the sound
     pads.forEach((pad , index) =>{
           pad.addEventListener('click', function(){
               sound[index].play();
               sound[index].currentTime = 0;
               createBubbles(index);
           }); 
     });
    //  create function that makes bubbles
         const createBubbles = (index)=>{
         const bubble = document.createElement('div');
            visual.appendChild(bubble);
            bubble.style.background = colors[index];
            bubble.style.animation = 'jump 1s ease' 
            bubble.addEventListener('animationend', ()=>{
                visual.removeChild(this)
            })
    }  
});

 