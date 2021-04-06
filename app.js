const secondHand = document.querySelector('.second-hand');
const mintHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90 ;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mint = now.getMinutes();
  const mintDegrees = ((mint / 60) * 360) + ((seconds/60)*6) + 90;
  mintHand.style.transform = `rotate(${mintDegrees}deg)`;

  const hours = now.getHours();
  const hourDegrees = ((hours / 12) * 360) + ((mint/60)*30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; //it's `` not ''

}

setInterval(setDate, 1000);

//Call the functions
setDate();
