
/*=========MOSTRAR O MENU MOBILE =========*/
const showMenu=(toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')
/*====== REMOVER MENU MOBILE =========*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',linkAction))


/*============ DESTACAR SESSAO DO SITE==========*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

/*========= MUDAR BACKGROUND NAV BAR=========*/
function scrollHeader(){
    const header=document.getElementById('header')
    if(this.scrollY>=200) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll',scrollHeader)
/*========= MOSTRAR SCROLL PRO INICIO=========*/
function scrollTop(){
    const scrollTop=document.getElementById('scroll-top')
    if(this.scrollY>=560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollTop)



/*==================== TRABALHO SLIIDER ====================*/
const myslide = document.querySelectorAll('.myslide'),
	  dot = document.querySelectorAll('.dot');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function plusSlides(n) {
	counter += n;
	slidefun(counter);
	resetTimer();
}
function currentSlide(n) {
	counter = n;
	slidefun(counter);
	resetTimer();
}
function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 8000);
}

function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	
}

/*==================== SERVIÇOS ====================*/
const modalViews=document.querySelectorAll('.servicos__modal'),
modalBtns=document.querySelectorAll('.servicos__button'),
modalCloses=document.querySelectorAll('.servicos__modal-close')
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*=========== ANIMAÇOES============*/
const sr = ScrollReveal({
    origin:'top',
    distance:'30px',
    duration:2000,
    reset:true

})

sr.reveal('.text__box',{})
sr.reveal('.inicio__socials',{delay:200})

sr.reveal('.h-title',{})
sr.reveal('.h-sub',{delay:200})
sr.reveal('.historia__img',{delay:200})
sr.reveal('.historia__data',{delay:200})
sr.reveal('.historia__img2',{delay:400})
sr.reveal('.historia__data2',{delay:400})



sr.reveal('.servicos',{delay:300})


sr.reveal('.t-title',{})
sr.reveal('.t-sub',{delay:200})
sr.reveal('.trabalhos__content',{delay:400})


sr.reveal('.m-title',{})
sr.reveal('.m-sub',{delay:200})
sr.reveal('.marcas__img',{delay:400})

sr.reveal('.c-title',{})
sr.reveal('.c-sub',{delay:200})


sr.reveal('.footer__title',{delay:200})
sr.reveal('.footer__tel',{delay:400})
sr.reveal('.footer__social',{delay:400})
sr.reveal('.footer__adress',{delay:400})
