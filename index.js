var quotes = [
  "Wherever you are, be there totally",
  "You can't stop the waves, but you can learn to surf",
  "Be happy in the moment, that's enough. Each moment is all we need, not more",
  "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor",
  "The real question is not whether life exists after death. The real question is whether you are alive before death",
  "Look past your thoughts, so you may drink the pure nectar of This Moment.",
  "We have only now, only this single eternal moment opening and unfolding before us, day and night.",
  "The only way to live is by accepting each minute as an unrepeatable miracle",
];
var animation = [
  "backInDown",
  "backInLeft",
  "bounce",
  "flash",
  "pulse",
  "rubberBand",
  "shakeX",
  "shakeY",
  "headShake",
  "swing",
  "tada",
  "wobble",
  "jello",
  "heartBeat",
];


let colorScheme=[
  '#b1c5b0','#638c61','#9aaab9'
];

var num = 0;
let rAnimation;

function changeImage() {
  var container = document.getElementById("container");
  var len = quotes.length;
  let rNumber = Math.floor(Math.random() * Math.floor(animation.length));
  let rnumber2 =  Math.floor(Math.random() * Math.floor(colorScheme.length))
  let rColor = colorScheme[rnumber2]
  // console.log(rColor);

  rAnimation = animation[rNumber];
  // console.log(rAnimation);
  container.innerHTML = quotes[num++];
  animateCSS(container, rAnimation);
  container.style.backgroundColor = rColor;


  // container.classList.add('animate__animated', rAnimation);
  // requestAnimationFrame(() => {
  //   container.classList.remove(rAnimation);
  // });
  if (num == len) {
    num = 0;
  }
}

window.onload = function () {
  changeImage();
};

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = element;

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
  });

// function start() {
//     var rotator = document.getElementById("container");
//     var delayInSeconds = 1;

//     var images = [
//       "Wherever you are, be there totally",
//       "You can't stop the waves, but you can learn to surf",
//       "Be happy in the moment, that's enough. Each moment is all we need, not more",
//       "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor",
//       "The real question is not whether life exists after death. The real question is whether you are alive before death",
//       "Look past your thoughts, so you may drink the pure nectar of This Moment.",
//       "We have only now, only this single eternal moment opening and unfolding before us, day and night.",
//       "The only way to live is by accepting each minute as an unrepeatable miracle",
//     ];

//     var num = 0;
//     var changeImage = function () {
//       var len = images.length;
//       rotator.innerHTML = images[num++];
//       if (num == len) {
//         num = 0;
//       }
//     };
//     setInterval(changeImage, delayInSeconds * 3000);
//   }
//   window.onload = function () {
//     start();
//   };
