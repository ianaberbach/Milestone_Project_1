  var phil = document.getElementById("phil");
  var obstacle = document.getElementById("obstacle");
  let score = parseInt(document.querySelector(".score h2").innerHTML);
  var vid = document.getElementById("my_video");
  var startBtn = document.getElementById("stBtn");
  var audio = document.getElementById("audio");
  var explosion = document.getElementById("audio2");
  var splode = document.getElementById("explosion");

  //Adds animate class to Phil for 500ms before removing it
  //Adds 1 to the score for every jump
  function jump(){
    if (phil.classList.contains("animate")){return}
     phil.classList.add("animate");
     setTimeout(() => {
      phil.classList.remove("animate")
     }, 500);
 }

 function start(){
    if (obstacle.classList.contains("animate2")){return}
    obstacle.classList.add("animate2");
    function scoreCount(){
        score += 1     
        document.querySelector(".score h2").innerHTML = score;
        console.log(score);
    }
    stop1 = setInterval(scoreCount, 1000);
    startBtn.style.display = "none";
    audio.play();
    audio.loop = true;
 }

//  checks to see if Phil and the obstacle are touching
 var hitScan = setInterval(function(){
     var philTop = parseInt(window.getComputedStyle(phil).getPropertyValue("top"));
     var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
     if(obstacleLeft<90 && obstacleLeft>0 && philTop>= 420){
         obstacle.style.animation = "none";
         obstacle.style.display = "none";
         alert("Phil was too bad for his own bones.");
         clearInterval(stop1);
         audio.pause();
         audio.loop = false;
         audio2.play();
     }
 }, 10);


//  calls the jump function on mouseclick
  document.addEventListener("click", jump);

  startBtn.addEventListener("click", start)