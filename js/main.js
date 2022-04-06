const scrollTopBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener('scroll', function(){
    scrollTopBtn.classList.toggle('active', window.scrollY > 500)
})

scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add('active');
        }else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove('active');
        }
    })
})

const menuBtn = document.querySelector('.nav-menu-btn');
const closeBtn = document.querySelector('.nav-close-btn');
const navigation = document.querySelector('.navigation');
const navItem = document.querySelectorAll('.nav-items a');

menuBtn.addEventListener('click', () => {
    navigation.style.display = 'flex';
    navigation.classList.add('active');
    closeBtn.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    navigation.classList.remove('active');
    closeBtn.style.display = 'none';
})

navItem.forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        closeBtn.style.display = 'none';
    })
})

ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
 });
 

ScrollReveal().reveal('.skills h3, .home-container .home-img, .about h3, .about h4', { delay: 100, origin: 'top'}); 
// ScrollReveal().reveal('.home-container .home-img, .about h3, .about h4', { delay: 100, origin: 'right'}); 
ScrollReveal().reveal('.home-info .home-btns, .skills .languages, .home .home-info h2,  .home-info p, .about .video, .projects .projects-container .project-card, .footer-container .info-follow h4', { delay: 100, origin: 'bottom'}); 
// ScrollReveal().reveal('.home .home-info h2,  .home-info p, .about .video, .projects .projects-container .project-card, .footer-container .info-follow h4', { delay: 100, origin: 'left'}); 
