gsap.registerPlugin(ScrollTrigger)

gsap.from(".hero h1",{
opacity:0,
y:80,
duration:1
})

gsap.from(".hero p",{
opacity:0,
y:40,
delay:.3,
duration:1
})

gsap.from(".service-card",{
scrollTrigger:{
trigger:".services",
start:"top 80%"
},
opacity:0,
y:50,
stagger:.2,
duration:1
})

gsap.from(".portfolio-item",{
scrollTrigger:{
trigger:".portfolio",
start:"top 80%"
},
opacity:0,
scale:.8,
stagger:.2,
duration:1
})

gsap.from(".skill",{
scrollTrigger:{
trigger:".skills",
start:"top 80%"
},
opacity:0,
x:-50,
stagger:.2
})

gsap.from(".testimonial",{
scrollTrigger:{
trigger:".testimonials",
start:"top 80%"
},
opacity:0,
y:40,
stagger:.2
})
