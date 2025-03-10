let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('active');
}
 window.onscroll = () => {
    menu.classList.remove('fa-x');
    navbar.classList.remove('active');
 }

const typed = new Typed('.typewriter', {
    strings: ['XR Developer','Unreal Developer','AR/VR Developer', 'Frontend Developer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay:1200,
    loop: true,
  });

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const content = document.querySelectorAll(".projects-content")
var counter=0;
var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active")
  });
  slides.forEach((slide) => {
    slide.classList.remove("active")
  });
  content.forEach((content) => {
    content.classList.remove("active")
  });
  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  content[manual].classList.add("active");
}

btns.forEach((btn,i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
    counter=i;
  });
});

setInterval(() => {
  sliderNav(counter);
  counter++;
  if(counter>2){
    counter=0;
  }
}, 10000);

const timeline_wrapper = document.querySelector('.timeline-wrapper'),
      timelines = document.querySelectorAll('.timeline li .data');
for(const time of timelines){
  time.onclick = ()=> time.classList.toggle('show')
}

timeline_wrapper.addEventListener('mousemove',(event)=>{
  const timeline = document.querySelector('.timeline');
  let scroll_width=event.pageX / timeline_wrapper.clientWidth * 
  (timeline_wrapper.clientWidth - timeline.clientWidth);
  timeline.style.left = scroll_width.toFixed(1) + 'px';
})