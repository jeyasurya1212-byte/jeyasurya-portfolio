gsap.registerPlugin(ScrollTrigger)

gsap.from(".hero h1",{

y:100,
opacity:0,
duration:1

})

gsap.from(".hero h3",{

y:50,
opacity:0,
delay:0.3

})

gsap.from(".btn",{

scale:0,
delay:0.6

})

gsap.from(".card",{

scrollTrigger:".services",
y:80,
opacity:0,
stagger:0.2

})

gsap.from(".work",{

scrollTrigger:".portfolio",
scale:0.5,
opacity:0,
stagger:0.2

})

gsap.from(".testimonial",{

scrollTrigger:".testimonials",
y:40,
opacity:0,
stagger:0.3

})

gsap.to(".ps",{

scrollTrigger:".skills",
width:"95%",
duration:2

})

gsap.to(".ai",{

scrollTrigger:".skills",
width:"90%",
duration:2

})

gsap.to(".pr",{

scrollTrigger:".skills",
width:"92%",
duration:2

})

gsap.to(".ae",{

scrollTrigger:".skills",
width:"85%",
duration:2

})
