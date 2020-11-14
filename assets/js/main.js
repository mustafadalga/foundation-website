/*Features*/
var features=document.querySelectorAll('.feature-item');

function resetActiveClass(){
    features.forEach(item=>{
        item.classList.remove("active");
    });
}

features.forEach(feature=>{
    feature.addEventListener('click',(event)=>{

        if (!event.currentTarget.classList.contains('active')) {
            resetActiveClass();
        }
        event.currentTarget.classList.toggle('active')
    })
})



/* Testimonials */

var testimonials=document.querySelectorAll('.testimonial');
var testimonials_dot=document.querySelectorAll('.testimonial-dot');
var testimonial_is_selected=false;
var index=0;

testimonials_dot.forEach((testimonial,index)=>{
    testimonial.addEventListener('click',(event)=>{
        testimonial_is_selected=true
        resetTestimonialActive()
        changeSlide(index)
        event.currentTarget.classList.add('active');
    });
})

function resetTestimonialActive(){
    testimonials_dot.forEach(item=>{
        item.classList.remove("active");
    })
}
function changeTestimonial(){
    resetTestimonialActive();
    changeSlide()
    testimonials_dot[index].classList.add('active');
}
function changeSlide(indexNo=null){
    testimonials[0].style.marginLeft=`-${indexNo!==null ? indexNo : index}00%`;
}
function durationSlider(){
    setInterval(()=>{
        if (!testimonial_is_selected){
            changeTestimonial()
            index<testimonials.length-1 ? index++ : index=0;
        }
    },3000);
}

durationSlider();



/*Tab Menu*/
var tabMenu=document.querySelectorAll('.tabs-item');
var tabsPane=document.querySelectorAll('.tab-pane');

function resetTabMenu(){
    tabMenu.forEach(tabItem=>{
        tabItem.classList.remove("active");
    });
    tabsPane.forEach(tabPane=>{
        tabPane.classList.remove("active");
    });
}

tabMenu.forEach(tabItem=>{
   tabItem.addEventListener('click',(event)=>{
       resetTabMenu();
       let tabName=event.currentTarget.getAttribute('data-toggle');
       event.currentTarget.classList.add('active');
       document.getElementById(tabName).classList.add('active');
   });
});


/* Responsive Natigation Menu */

var header = document.querySelector('header');
var navMenu = header.querySelector('.nav-header-menu');
var hamburberMenu = header.querySelector('.hamburger-icon')
var menuLibraryItem=navMenu.querySelector('.nav-library-item');


hamburberMenu.addEventListener('click', (event) => {
    header.classList.toggle('open');
});

menuLibraryItem.addEventListener('click',(event)=>{
    event.currentTarget.classList.toggle('active');
})


