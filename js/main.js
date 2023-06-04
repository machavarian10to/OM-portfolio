const scrollTopBtn = document.querySelector('.scrollToTop-btn');
const showMoreBtn = document.getElementById('show-more-btn');
const hiddenProjects = document.querySelectorAll('.project-card.hidden');

window.addEventListener('scroll', function(){
    scrollTopBtn.classList.toggle('active', window.scrollY > 500)
})

scrollTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

// mark active sections in navbar
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

// burger menu
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


// Show/Hide more projects
let isExpanded = false;

showMoreBtn.addEventListener('click', () => {
  isExpanded = !isExpanded;
  hiddenProjects.forEach(project => {
    project.style.display = isExpanded ? 'block' : 'none';
  })
  showMoreBtn.textContent = isExpanded ? 'show less' : 'show more'
});


// scroll animation
ScrollReveal({ 
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
 });
 

ScrollReveal().reveal('.home-container .home-img, .about h3, .about h4, .projects .projects-container', { delay: 100, origin: 'top'}); 
ScrollReveal().reveal('.home-info .home-btns, .home .home-info h2,  .home-info p, .about .video,.footer-container .info-follow h4,.skills .languages, .skills .tools, .experience-container', { delay: 100, origin: 'left'}); 
