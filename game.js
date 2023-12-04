var timer =60;
var score = 0;
var rnhit=0;


function incscore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function hit(){
    rnhit = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent=rnhit;
}

function makeBubble(){
    var  clutter = "";
    
    for(var i = 1 ;i <= 300 ; i++){
        var randomnum = Math.floor(Math.random()*10);
        clutter +=  `<div class="bubble">${randomnum}</div>`;
       
    }
    document.querySelector("#panel-bottom").innerHTML =  clutter;
}

function runtimer(){
    var timerint = setInterval(function (){
        if(timer>0){

            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#panel-bottom").innerHTML = `<h1>GAME OVER</h1>`;
        }
    },1000)
}

document.querySelector("#panel-bottom").addEventListener("click",
function (details){
    var clickednum = (Number(details.target.textContent));
    if(clickednum === rnhit){
        incscore();
        makeBubble();
        hit();
    }
})

document.querySelector("button").addEventListener("click",()=>{
    location.reload()
})
runtimer();
makeBubble()
hit();