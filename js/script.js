const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
//End locomotive
function circleMoveOnMouse(x, y) {
    window.addEventListener('mousemove', function (posi) {
        const circle = this.document.getElementById('mouseCircle');
        circle.style.transform = `translate(${posi.clientX}px, ${posi.clientY}px) scale(${x},${y})`
        if (posi.clientX < 0 && posi.clientY < 0) {
            circle.style.opacity = '0'
        } else {

            circle.style.opacity = '1'
        }
    })

}
/// animation on loading
function firstPageAnimation() {
    let gTl = gsap.timeline()
    gTl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 2,
        ease: Expo.easeInOut,

    })
    gTl.to(".lfi", {
        y: '0',
        opacity: 1,
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger: .2,
        delay: -1,
    })
    gTl.from('.about-img', {
        opacity: '0',
        x: 300,
        duration: 2,
        ease: Expo.easeInOut,
    })
    gTl.from('.about-text', {
        opacity: '0',
        x: -300,
        duration: 2,
        stagger: -1,
        ease: Expo.easeInOut,
    })

}
/// on moving mouse skew the mouse Circle
let scalX = 1;
let scalY = 1;
let preveusx = 0;
let preveusy = 0;

let cursorTimeout;
window.addEventListener('mousemove', function (data) {
    scalX = gsap.utils.clamp(.8, 1.2, data.clientX - preveusx)
    scalY = gsap.utils.clamp(.8, 1.2, data.clientY - preveusy)
    circleMoveOnMouse(scalX, scalY)
    preveusx = data.clientX;
    preveusy = data.clientY;

    cursorTimeout = this.setTimeout(function () {
        const circle = this.document.getElementById('mouseCircle');
        circle.style.transform = `translate(${data.clientX}px, ${data.clientY}px) scale(1,1)`
    }, 100)
})
/// mouse magic on second section
document.querySelectorAll('.table').forEach(table => {
    table.addEventListener('mousemove', function (posi) {
        let dff = posi.clientY - table.getBoundingClientRect().top;
        console.log(dff)
        let cx = posi.clientX;

        gsap.timeline()
            .to(table.querySelector('img'), {
                display: 'block',
                ease: Power1,
                y: gsap.utils.clamp(0, 150, dff),
                x: cx
            })
            .to(table.querySelector('.tableItem'), {
                X: 30,
                opacity: 0.5,
            })
    })
    // if you move out of the element Image will be display none
    table.addEventListener('mouseleave', function () {
        gsap.timeline()
            .to(table.querySelector('img'), {
                display: 'none',




            })
    })
})
firstPageAnimation()
circleMoveOnMouse()

/// modal section start
document.getElementById('SubscribeBtn').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'flex';
    document.querySelector('.modal-bg-all').style.background = 'rgba(0,0,0,0.6)';

})
//close
document.getElementById('close').addEventListener('click', function () {
    document.querySelector('.bg-modal').style.display = 'none'

})


