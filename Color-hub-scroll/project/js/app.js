gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !==1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true 
    })

gsap.fromTo('.hero-section', { opacity: 1}, {
    opacity: 0,
    ScrollTrigger: {
        
    }
})

}