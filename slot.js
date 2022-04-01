let images = ["slot-bar.png",
"slot-bell.png",
"slot-cherry.png",
"slot-coin.png",
"slot-diamond.png",
"slot-melon.png",
"slot-orange.png"];
let slot = document.querySelectorAll("img");

function slotSpin() {
  slot.forEach(function(icon){
    icon.classList.add("shake");
  });

  setTimeout(function() {
    slot.forEach(function(icon){
      icon.classList.remove("shake");
    });
    let slotOneValue   = Math.floor(Math.random()*7);
    let slotTwoValue   = Math.floor(Math.random()*7);
    let slotThreeValue =  Math.floor(Math.random()*7);
  
    console.log(slotOneValue, slotTwoValue, slotThreeValue);
    document.querySelector("#slot-1").setAttribute("src", images[slotOneValue]);
    document.querySelector("#slot-2").setAttribute("src", images[slotTwoValue]);
    document.querySelector("#slot-3").setAttribute("src", images[slotThreeValue]);
    
    if(slotOneValue === slotTwoValue && slotOneValue === slotThreeValue) {
      document.querySelector("#result").innerHTML = "Congratulations!";
    } else {
      document.querySelector("#result").innerHTML = "Try again!";
    }
  },
  1000
  );
}