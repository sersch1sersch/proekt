document.body.addEventListener("keydown", (a) => {//управление главной машинкой
    if (a.key === 'ArrowDown')
    speedY=5
      if (a.key === 'ArrowUp')
      speedY=-5
      if (a.key === 'ArrowLeft'){
      speedX=-5
      car.style.transform="rotate("+ -10 + "deg)";
      }
        if (a.key === 'ArrowRight'){
        speedX=5
        car.style.transform="rotate("+ 10 + "deg)";
        }
})
document.body.addEventListener("keyup", (a) => {//управление главной машинкой
    if (a.key === 'ArrowDown')
    speedY=0
    
     if (a.key === 'ArrowUp')
     speedY=0
     if (a.key === 'ArrowLeft'){
     speedX=0
     car.style.transform="rotate("+ 0 + "deg)";
     }
       if (a.key === 'ArrowRight'){
       car.style.transform="rotate("+ 0 + "deg)";
       }
       speedX=0
  })


  

let left= document.querySelector(".left")
let right= document.querySelector(".right")
left.addEventListener('touchstart', leftt )
left.addEventListener('touchend', stop);
right.addEventListener('touchstart',rightt)
right.addEventListener('touchend', stop);
function leftt(EO) {
  speedX=-5
  car.style.transform="rotate("+ -10 + "deg)";
  EO.preventDefault();
}
function rightt(EO) {
  speedX=5
  car.style.transform="rotate("+ 10 + "deg)";
  EO.preventDefault();
}
function stop() {
  speedX=0;
  car.style.transform="rotate("+ 0 + "deg)";
}


let recor=document.getElementById("recordsId")
let ttt=false
let treck=document.querySelector(".treck")
treck.addEventListener("touchmove",jh)
function jh(){
  if(ttt===false){
ttt=true
  }
  else{
ttt=false
  }
}
if(ttt=true){
 recor.style.display="block"
 isPaused=true
}
if(ttt=false){
  names.style.display="none"
  isPaused=false
 }
