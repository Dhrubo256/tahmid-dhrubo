// scrollbar dinamic
window.addEventListener('scroll', () => {
    const scrollUp = document.querySelector('.scroll-up')
    if (this.scrollY >= 1100) {
        scrollUp.style.display = 'grid'
        scrollUp.style.opacity = 1
    } else {
        scrollUp.style.display = 'none'
        scrollUp.style.opacity = 0
    }
})
const nav = document.getElementById('nav')

window.addEventListener('scroll', function () {
    if (this.scrollY > 100) {
        nav.classList.add('navbar-background')
    } else {
        nav.classList.remove('navbar-background')
    }
})

// text animation

const text = [` web developer${breakTime()}`, ` web desginer${breakTime()}`, ` programmer${breakTime()}`, ` student${breakTime()}`];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function breakTime() {
    return "                           "
}

(function type() {
    if (count === text.length) {
        count = 0
    }
    currentText = text[count]
    letter = currentText.slice(0, ++index)

    document.querySelectorAll('.typing')[0].textContent = letter
    document.querySelectorAll('.typing')[1].textContent = letter
    if (letter.length === currentText.length) {
        count++
        index = 0
    }
    setTimeout(type, 100)
}());

// about section read more button dinamic
const readMore = document.querySelector('.readBtn')
const p = document.querySelector('.expanded-text')
readMore.addEventListener('click', () => {
    readMore.style.display = 'none'
    p.textContent = "Hello Everybody! My name is Toqi Tahmid Dhrubo. I'm a web developer.I'm studying on class 10. My age is 17. I'm expert in HTML, CSS, Bootstrap, Javascript, and React JS. I'm a front-end developer. I'm also a programmer. Now I'm learning PHP, Python and Java programming."
})
// skill section read more button dinamic
const readMore2 = document.querySelector('.readBtn2')
const p2 = document.querySelector('.expanded-text2')
readMore2.addEventListener('click', () => {
    readMore2.style.display = 'none'
    p2.textContent = "I have skills in HTML5, CSS3, Javascript, Bootstrap and React.JS. I'v also skill on many programming language like PHP, Python, Java etc. Mainly I'm a front-end developer. Now I'm learning back-end also. I'm learning many back-end library like Django, Node. JS, Flask etc."
})


// skill section text animation

const text2 = [` HTML${breakTime()}`, ` CSS${breakTime()}`, ` Bootstrap${breakTime()}`, ` Javascript${breakTime()}`, ` React JS${breakTime()}`];
let count2 = 0;
let index2 = 0;
let currentText2 = '';
let letter2 = '';

function breakTime() {
    return "                           "
}

(function type2() {
    if (count2 === text2.length) {
        count2 = 0
    }
    currentText2 = text2[count2]
    letter2 = currentText2.slice(0, ++index2)

    document.querySelectorAll('.typing2')[0].textContent = letter2
    if (letter2.length === currentText2.length) {
        count2++
        index2 = 0
    }
    setTimeout(type2, 100)
}());

// team reviwes
const reviews = [
    {
        id: 0,
        names: "Salman Khan",
        img: "images/pic2.jpg",
        job: "Graphics Desginer",
        description: "He is a best graphics desginer and logo maker and also make the banners and posters."
    },
    {
        id: 1,
        names: "Hrithik Roshan",
        img: "images/pic.png",
        job: "Web Desginer",
        description: "He is a best web desginer and logo maker and also make the Web application with database."
    },
    {
        id: 2,
        names: "Amir Khan",
        img: "images/amir.jpg",
        job: "App Desginer",
        description: "He is a best App Desginer and graphics desginer and also a web developer."
    }
]

const infoname = document.getElementById('info-name')
const img = document.getElementById('img')
const job = document.getElementById('job')
const desc = document.getElementById('description')

// button selector
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')

let index3 = 0;
window.addEventListener('DOMContentLoaded', function () {
    itemchange(index3)
})

function itemchange(Ind) {
    let item = reviews[Ind]
    infoname.textContent = item.names
    img.src = item.img
    job.textContent = item.job
    desc.textContent = item.description
}

nextBtn.addEventListener('click', function () {
    index3++;
    if (index3 > reviews.length - 1) {
        index3 = 0;
    }
    itemchange(index3)
})
prevBtn.addEventListener('click', function () {
    index3--;
    if (index3 < 0) {
        index3 = reviews.length - 1
    }
    itemchange(index3)
})
// about animation
const aboutposition = document.getElementById('about').getBoundingClientRect().top
window.addEventListener('scroll', () => {
    const aboutImage = document.getElementById('about-img');
    const rightArea = document.getElementById('right-area')
    if (aboutposition / 2.6 <= this.scrollY) {
        aboutImage.classList.add('slide-img');
        rightArea.classList.add('slide-about-right-area')
    } else {
        aboutImage.classList.remove('slide-img');
        rightArea.classList.remove('slide-about-right-area')
    }
})
// education animation
const eduposition = document.getElementById('education').getBoundingClientRect().top
window.addEventListener('scroll', () => {
    let edubox1 = document.querySelector('.edu-box-1')
    let edubox2 = document.querySelector('.edu-box-2')
    let edubox3 = document.querySelector('.edu-box-3')
    if (eduposition / 2 <= this.scrollY) {
        edubox1.classList.add('edu-side-box')
        edubox2.classList.add('edu-side-box')
        edubox3.classList.add('edu-side-box')
    } else {
        edubox1.classList.remove('edu-side-box')
        edubox2.classList.remove('edu-side-box')
        edubox3.classList.remove('edu-side-box')
    }
})
// service animation
const serposition = document.getElementById('service').getBoundingClientRect().top
window.addEventListener('scroll', () => {
    let service1 = document.querySelector('.service-box-1')
    let service2 = document.querySelector('.service-box-2')
    let service3 = document.querySelector('.service-box-3')
    if (serposition / 1.2 <= this.scrollY) {
        service1.classList.add('service-box-slide')
        service2.classList.add('service-box-slide')
        service3.classList.add('service-box-slide')
    } else {
        service1.classList.remove('service-box-slide')
        service2.classList.remove('service-box-slide')
        service3.classList.remove('service-box-slide')
    }
})
// skill section animation
const skillpos = document.getElementById('skill').getBoundingClientRect().top
window.addEventListener('scroll', () => {
    let skillLeft = document.querySelector('.leftArea')
    let skillRight = document.querySelector('.rightArea')
    // progresses
    let htmlBar = document.querySelector('.html-bar')
    let cssBar = document.querySelector('.css-bar')
    let bootsrtapBar = document.querySelector('.bootstrap-bar')
    let jsBar = document.querySelector('.js-bar')
    let reactBar = document.querySelector('.react-bar')
    if (skillpos / 1.2 <= this.scrollY) {
        skillLeft.classList.add('skillSlide')
        skillRight.classList.add('skillSlide')
        htmlBar.style.width = "90%"
        cssBar.style.width = "80%"
        bootsrtapBar.style.width = "75%"
        jsBar.style.width = "70%"
        reactBar.style.width = "50%"
    } else {
        skillLeft.classList.remove('skillSlide')
        skillRight.classList.remove('skillSlide')
        htmlBar.style.width = "0%"
        cssBar.style.width = "0%"
        bootsrtapBar.style.width = "0%"
        jsBar.style.width = "0%"
        reactBar.style.width = "0%"
    }
})
// projects animation
const projectposition = document.getElementById('projects').getBoundingClientRect().top
window.addEventListener('scroll', () => {
    const projectAnimate1 = document.querySelectorAll('.project-animate')[0]
    const projectAnimate2 = document.querySelectorAll('.project-animate')[1]
    const projectAnimate3 = document.querySelectorAll('.project-animate')[2]
    const projectAnimate4 = document.querySelectorAll('.project-animate')[3]
    if (projectposition / 1.1 <= this.scrollY) {
        projectAnimate1.classList.add('project-animate-slide')
        projectAnimate2.classList.add('project-animate-slide')
        projectAnimate3.classList.add('project-animate-slide')
        projectAnimate4.classList.add('project-animate-slide')
    } else {
        projectAnimate1.classList.remove('project-animate-slide')
        projectAnimate2.classList.remove('project-animate-slide')
        projectAnimate3.classList.remove('project-animate-slide')
        projectAnimate4.classList.remove('project-animate-slide')
    }
})
// team animation
const teamPosition = document.getElementById('team').getBoundingClientRect().top
window.addEventListener('scroll', () => {
    const teamBox = document.querySelector('.review-box')
    if (teamPosition / 1.2 <= this.scrollY) {
        teamBox.classList.add('team-slider')
    } else {
        teamBox.classList.remove('team-slider')
    }
})
// animated counter
const experPos = document.getElementById('work').getBoundingClientRect().top;
window.addEventListener('scroll', () => {
    const counters = document.querySelectorAll('.counter')
    const section = document.querySelector('.counterSection')
    const speed = 200;

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target')
            const count = +counter.innerText

            const inc = target / speed
            if (count < target) {
                counter.innerText = Math.ceil(count + inc)
                setTimeout(updateCount, 300);
            } else {
                count.innerText = target
            }
        }
        if (experPos / 1.2 <= this.scrollY) {
            updateCount()
        } else {
            counter.innerText = 0
        }
    })

})



