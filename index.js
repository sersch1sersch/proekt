let start= document.querySelector(".button")
let start1= document.querySelector(".button1")
//let start2= document.querySelector(".button2")
let treck= document.querySelector(".treck")
let polyline1= document.querySelector(".polyline1")
let polyline2= document.querySelector(".polyline2")
let line1= document.querySelector(".line1")
let point=document.querySelector(".point")
point.value=0;
let heart=document.querySelector(".heart-point")
heart.value=3
let car= document.querySelector(".car")// главная машинка
let audio=document.querySelector(".Audio")
let randomCar=[];
let car1=document.querySelector(".automotive")
let car2=document.querySelector(".convertible")
let car3=document.querySelector(".delahaye")
let car4=document.querySelector(".mini-cooper")
let car5=document.querySelector(".police")
let car6=document.querySelector(".sports")
let car7=document.querySelector(".bus")
let car8 =document.querySelector(".pngwing")
let cars=[car1,car2,car3,car4,car8,car5,car6,car7];

let automotive={
  width:50,
   height:100,
}
automotive=car1;
let convertible={
  width:55,
   height:100,
}
let delahaye={
  width:48,
   height:100,
}
let mini_cooper={
  width:52,
   height:106,
}
let police={
  width:52,
   height:100,
}
let sports={
  width:53,
   height:101,
}
let bus={
  width:53,
   height:101,
}
let pngwing={
  width:45,
     height:60
}

let randoms;
let igra=0;// игра не начата
randomCarY=0;
speedY=0;
yy=0;
y1=-1000000;
speedX=0;
top1=410;
left1=147;
speedPolosa=0;
let topPolosa1=-110
let topPolosa2=-260
let topPolosa3=-420
let topPolosa4=-580
polosa1={
  topPolosa:-110,
  leftPolosa:15,
  speedPolosa:0
}
polosa2={
  topPolosa:-110,
  leftPolosa:105,
  speedPolosa:4
}
polosa3={
  topPolosa:-110,
  leftPolosa:192,
  speedPolosa:4
}
polosa4={
  topPolosa:-110,
  leftPolosa:279,
  speedPolosa:4
}
let reboot=false;//нажата ли кнопка
let polosaN=[];
let polosa=[polosa1.leftPolosa,polosa2.leftPolosa,polosa3.leftPolosa,polosa4.leftPolosa,]
start.addEventListener("click",startgame);//старт игры
function startgame(){
  reboot=true
if(igra===0){
 audio.play()
igra=1;// игра началась
yy=7//скорость полос
speedPolosa=7
topPolosa1=-110
topPolosa2=-260
topPolosa3=-420
topPolosa4=-580
}
}
start1.addEventListener("click",rr)
   function rr(){
    audio.play()
     igra=1
     vsa.style.fill="url(#radial0)"//замена одной части цвета
 kapot.style.fill="rgb(96.862745%,80.784314%,0%)"//замена одной части цвета
 lobovoe.style.fill="url(#radial3)"//замена одной части цвета
   car.style.transform="rotate("+ 0+ "deg)";
     setTimeout(tick1,3000);
    function tick1(){
   
      topPolosa1=-110
  topPolosa2=-260
  topPolosa3=-420
  topPolosa4=-580
  randomCar.style.display="block";
        randomCar2.style.display="block";
        randomCar3.style.display="block";
        randomCar4.style.display="block";
      isPaused=false
    }
    
   }
 

polyline1.setAttribute("points",'87,'+y1+" "+'87,1500')
polyline2.setAttribute("points",'260,'+y1+" "+'260,1500')

let randomCar4=[]
let randomCar44=[car4,car8];
let randomPolosa4;
let polosaN4=[]
randomCarz=Math.floor(Math.random() * 2);
randomCar4=randomCar44[randomCarz]
randomPolosa4=Math.floor(Math.random() * 4);
polosaN4.push(polosa[randomPolosa4])

let randomCar2;
let randomPolosa2;
let polosaN2=[]
let randomCar3;
let randomPolosa3;
let polosaN3=[]
randomCar2=cars[1];
randomPolosa2=Math.floor(Math.random() * 4);
polosaN2.push(polosa[randomPolosa2])
randomCar3=cars[2];
randomPolosa3=Math.floor(Math.random() * 4);
polosaN3.push(polosa[randomPolosa3])
randomCar=cars[0];
randomPolosa=Math.floor(Math.random() * 4);
polosaN.push(polosa[randomPolosa])

let k=0//счетчик

window.onbeforeunload=unload;

function unload(EO) {
  EO=EO||window.event;
  if(reboot===true){
  EO.returnValue='После перезагрузка ваши данные не сохраняться ';}
};
let names=document.querySelector(".names")
function reloads(){
  names.style.display="none"
  igra=0;
  reboot=false;
  randomCarY=0;
  speedY=0;
  yy=0;
  y1=-1000000;
  speedX=0;
  top1=410;
  left1=147;
  
  speedPolosa=0;
  point.value=0;
  heart.value=3
  
   vsa.style.fill="url(#radial0)"//замена одной части цвета
   kapot.style.fill="rgb(96.862745%,80.784314%,0%)"//замена одной части цвета
   lobovoe.style.fill="url(#radial3)"//замена одной части цвета
     car.style.transform="rotate("+ 0+ "deg)";
     isPaused=false
     topPolosa1=-110
     topPolosa2=-260
     topPolosa3=-420
     topPolosa4=-580
     randomCar.style.display="block";
        randomCar2.style.display="block";
        randomCar3.style.display="block";
        randomCar4.style.display="block";
}

