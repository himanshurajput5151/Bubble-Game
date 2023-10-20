var timer = 60 ;
var score = 0 ; 
var randon = 0 ;

function increaseScore() {
    score += 10 ;
    document.querySelector("#scoreVal").textContent = score ;
}

function makeBubble () {
    var ran  = "" ;
    for(var i = 1 ; i <=160 ; i++) {
        var element = Math.floor(Math.random()*10) ;
        ran += `<div class="bubble">${element}</div>` ;
    }
    
    document.querySelector("#pbtm").innerHTML = ran ;
}

function runtimer() {
        var timerint = setInterval(function() {
            if(timer>0) {
                timer-- ;
                document.querySelector("#timerval").textContent = timer ;
            }
            else{
                document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>` ;
                clearInterval(timerint) ;
            }
        } , 1000) ;
    
}

function hitTarget () {
    random = Math.floor(Math.random()*10) ;
    document.querySelector("#hitval").textContent = random ;
    
}

document.querySelector("#pbtm").addEventListener("click" , function(dets) {
    var clickedNum = Number(dets.target.textContent) ;
    if(clickedNum === random) {
        increaseScore() ;
        makeBubble() ;
        hitTarget() ;
    }
})
runtimer() ;
makeBubble() ;
hitTarget() ;