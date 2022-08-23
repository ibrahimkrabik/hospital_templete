const navItems = document.querySelector('#nav-items');
const openNavBtn = document.querySelector('#open-nav-btn');
const closeNavBtn = document.querySelector('#close-nav-btn');

openNavBtn.addEventListener('click', () =>{
    navItems.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closeNavBtn.style.display= 'inline-block';
})

const closeNav = () =>{
    navItems.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closeNavBtn.style.display= 'none';

}

closeNavBtn.addEventListener('click', closeNav);

// close nAV menu when menu a menu items is clicked
if (window.innerWidth < 1024) {
    document.querySelectorAll('#nav-items li a').forEach(navitem =>{
        navitem.addEventListener('click', () =>{
            closeNav();
        })
    })
    
}

// change navbar styles on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

/*---swiper---*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween:30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // responsive breakpoints

    breakpoints: {
        // width 600px
        600:{
            slidesPerView:2
        },
        //  width 1024px
        1024:{
            slidesPerView:3
        }

    }
   
  });
