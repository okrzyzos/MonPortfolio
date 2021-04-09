


const btnMenu = document.querySelector('.btn-rond-menu')
const nav = document.querySelector('.nav-gauche');
const allItemNav = document.querySelectorAll('.nav-menu-item');
const ligne = document.querySelector('.cont-ligne');

btnMenu.addEventListener('click', () => {

    ligne.classList.toggle('active')
    nav.classList.toggle('menu-visible')

})

if(window.matchMedia('(max-width: 1300px)')) {
 
    allItemNav.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.toggle('menu-visible')
            ligne.classList.toggle('active');
        })
    })

}


const txtAnim = document.querySelector('.txt-animation')


let typewriter = new Typewriter(txtAnim,{
    loop:false,
    deleteSpeed:20
})

typewriter
.pauseFor(1800)
.changeDelay(20)
.typeString('Moi c\'est Olivier krzyzostoniak')
.pauseFor(300)
.typeString('<strong>,Développeur Full-stack</strong> !')
.pauseFor(1000)
.deleteChars(13)
.typeString('<span style="color: #27ae60;"> React </span>!')
.pauseFor(2000)
.deleteChars(7)
.typeString('<span style="color: #EA39ff;"> Node js</span>!')
.pauseFor(2000)
.deleteChars(8)
.typeString('<span style="color: #ff6910;"> JavaScript</span>!')
.pauseFor(2000)
.deleteChars(11)
.typeString('<span style="color: #d63031;"> Java</span>!')
.start()

