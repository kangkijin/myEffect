//GSAP
gsap.registerPlugin(ScrollTrigger);
history.scrollRestoration = "manual";

$(function(){

    // gsap 예시
    // gsap.to('.contArea li:nth-child(1)', {
    //     scrollTrigger: {
    //         trigger: '.contArea li:nth-child(1)',
    //         start:"top 1200",
    //         end: "bottom 500",
    //         makers: true,
    //         scrub: true,
    //     },
    //     scale: 1,
    //     duration: 1
    // });
    // gsap.to('.contArea li:nth-child(1)', {
    //     scrollTrigger: {
    //         trigger: '.contArea li:nth-child(1)',
    //         start:"top 800",
    //         end: "bottom 200",
    //         onEnter: () => {
    //             document.querySelector('.contArea li:nth-child(1)').classList.add('active');
    //         },
    //         onLeaveBack: () => {
    //             document.querySelector('.contArea li:nth-child(1)').classList.remove('active');
    //         },
    //     }
    // });
    
    // ScrollTrigger.create({
    //     trigger: '.campaign',
    //     onEnter: () => {
    //         document.querySelector('.campaign').classList.add('active');
    //     },
    //     onLeaveBack: () => {
    //         document.querySelector('.campaign').classList.remove('active');
    //     },
    //     // scrub: 1
    // });
})
