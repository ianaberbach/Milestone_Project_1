  var phil = document.getElementById("phil");
  var obstacle = document.getElementById("obstacle");
//   let score = parseInt(document.querySelector(".score h2").innerHTML);
  var vid = document.getElementById("my_video");
  var mutebtn = document.getElementById("mutebtn");
  let counter = 0;

  //Adds animate class to Phil for 500ms before removing it
  //Adds 1 to the score for every jump
  function jump(){
   if (phil.classList.contains("animate")){return}
    phil.classList.add("animate");
    setTimeout(() => {
     phil.classList.remove("animate")
    }, 500);
//      setTimeout(function(){
//     score+=1;
//     document.querySelector(".score h2").innerHTML = score;
//  }, 500);
}


function timer(score){
    score++
    console.log(score);
    return score;
 }
// document.querySelector(".score h2").innerHTML = counter;
setInterval (timer(counter), 500);

//  checks to see if Phil and the obstacle are touching
 var hitScan = setInterval(function(){
     var philTop = parseInt(window.getComputedStyle(phil).getPropertyValue("top"));
     var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
     if(obstacleLeft<90 && obstacleLeft>0 && philTop>= 420){
         obstacle.style.animation = "none";
         obstacle.style.display = "none";
         alert("Phil was too bad for his own bones.");
     }
 }, 10);

//  calls the jump function on mouseclick
  document.addEventListener("click", jump);

//   mutebtn.addEventListener("canplay", vidmute);

//   function vidmute(){
//     if(vid.muted){
//         vid.muted = false;
//         mutebtn.innerHTML = "Muted";
//     } else {
//         vid.muted = true;
//         mutebtn.innerHTML = "Unmuted";
//     }
//   }