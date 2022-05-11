// String (textos)
// Number (numero)
// Boolean (true | false)

window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    showNavOnScroll()
    showBackToTopButtonOnScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(cardapio)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    // linha alto
    const targetLine = scrollY + innerHeight / 2

    // verificar se a secao passou da linha
    // quais dados vou precisar?

    // o topo da secao
    const sectionTop = section.offsetTop
    // a altura da secao
    const sectionHeight = section.offsetHeight
    // o topo da secao chegou ou ultrapassou a linha alto
    const sectionTopReachOrPassedTargetline = targetLine >= sectionTop

    // info dos dados e da logica
    console.log('O topo da secao chegou ou passou da linha?', sectionTopReachOrPassedTargetline)

    // verificar se a base esta abaixo da linha alvo
    // quais dados vou precisar
    // a secao termina onde?
    const sectionEndsAt = sectionTop + sectionHeight

    // o final da secao passou da linha alvo
    const sectionEndPassedTargetline = sectionEndsAt <= targetLine

    console.log('o fundo passou da linha', sectionEndPassedTargetline)

    // limites da secao
    const sectionBoundaries = sectionTopReachOrPassedTargetline && !sectionEndPassedTargetline 

    const sectionId = section.getAttribute('id')
    const menuElement = document
    .querySelector(`.menu a[href*=${sectionId}]`)


    menuElement.classList.remove('active')
    
    if (sectionBoundaries) {
        menuElement.classList.add('active')
    }
}

function showNavOnScroll() {
    if(scrollY > 0) {
        navigation.classList.add('scroll')
    } else {
        navigation.classList.remove('scroll')
    }
}

function showBackToTopButtonOnScroll() {
    if(scrollY > 400) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}



function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}




ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)


// swiper

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    mousewhell: true,
    keyboard: true,
    breakpoints: {
        767: {
            slidesPerView: 3,
            setWrapperSize: true
        }
    }

  });