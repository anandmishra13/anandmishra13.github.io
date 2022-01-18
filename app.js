const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const profileConatiner = document.querySelector(".card-container");
const text = document.querySelector(".fade-link");

const section = document.querySelector("section");
const end = section.querySelector("h1");

//scroll magic

const controller = new ScrollMagic.Controller();
//Scenes
let scene = new ScrollMagic.Scene({
  duration: 17000,
  triggerElement: intro,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

//text animation

const profileAnimation = TweenMax.fromTo(
  profileConatiner,
  3,
  { opacity: 1 },
  { opacity: 0 }
);
let scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(profileAnimation)
  .addTo(controller);

//video animation

let accelamount = 0.5;
let scrollPostion = 0;
let delay = -2;

scene.on("update", (event) => {
  //console log event to see other option
  scrollPostion = event.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollPostion - delay) * accelamount;
  video.currentTime = delay;
}, 170);
