

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click',function(){

   const visibility=primaryNav.getAttribute('data-visible');
   
   if (visibility === 'false'){
    primaryNav.setAttribute('data-visible', true) 
    navToggle.setAttribute('aria-expanded', true) 
   }else 
   {
    primaryNav.setAttribute('data-visible', false) 
    navToggle.setAttribute('aria-expanded', false) 
   }
})


//  -----slideshow----

const slideShow = [...document.querySelectorAll('.slide-show-imgs')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const prevBtn = [...document.querySelectorAll('.prev-btn')];
const prevBtnImg = document.querySelector('.prev-btn img');




slideShow.forEach((item,i)=>{

    let slideShowDimensions = item.getBoundingClientRect();
    let slideShowWidth = slideShowDimensions.width;


    nxtBtn[i].addEventListener('click',() => {
        item.scrollLeft += slideShowWidth;

     
        

    })

    prevBtn[i].addEventListener('click',()=>{
        item.scrollLeft -= slideShowWidth;

      
      
    })

  
})

// -----onscroll change color work-info-section-------- 

const workInfoSection = document.querySelector('.work-info-section');
const [red, green, blue] = [71, 62, 55]


window.addEventListener('scroll', (onScrollChangeColor) );


  
  function onScrollChangeColor() {
    let y = 1 + ((window.scrollY)-(window.innerHeight)) / 2000
 
    const [r, g, b] = [red/y, green/y, blue].map(Math.round)
    if(window.scrollY > window.innerHeight){
        workInfoSection.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    // workInfoSection.style.backgroundImage = `linear-gradient(rgb(86, 52, 22),rgb(${r}, ${g}, ${b}))`
    }

  }



