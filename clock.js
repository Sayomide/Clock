// declaring the variables
tet hh = document.querySelector('.hour');
let mh = document.querySelector('.minutes');
let sh = document.querySelector('.seconds');

// function to start the clock
setInterval(() => {
  let currentDate = new Date();
  let cs = currentDate.getSeconds() * 6;
  let cm = currentDate.getMinutes() * 6;
  let ch = currentDate.getHours() * 30;
// rotations of the hands  
hh.style.transform = `rotateZ(${ch + (cm/12)}deg)`;
mh.style.transform = `rotateZ(${cm}deg)`;
sh.style.transform = `rotateZ(${cs}deg)`;
});
