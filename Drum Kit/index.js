for(var i = 0 ; i < document.querySelectorAll(".drum").length;i++){
   document.querySelectorAll("button")[i].addEventListener("click",function(){
   var click = this.innerHTML;
   makesound(click);
   makeanimation(click);
   });
}

document.addEventListener("keypress",function(){
  console.log(event.key);
  makesound(event.key);
});

function makesound(click){
    switch (click) {
        case "w":
            new Audio('./sounds/crash.mp3').play();
            break;
        case "a":
            new Audio('./sounds/kick-bass.mp3').play();
            break;
        case "s":
            new Audio('./sounds/snare.mp3').play();
            break;
        case "d":
            new Audio('./sounds/tom-1.mp3').play();
            break;
        case "j":
            new Audio('./sounds/tom-2.mp3').play();
            break;
        case "k":
            new Audio('./sounds/tom-3.mp3').play();
            break;
        case "l":
            new Audio('./sounds/tom-4.mp3').play();
        default:
            break;
    }
}

function makeanimation(currentKey) {
   var button =  document.querySelector("."+currentKey);
    button.classList.add("pressed");
   setTimeout(() => {
    button.classList.remove("pressed");
 console.log("Removed class after 150ms.");
}, 150);
}