
//   const swiper = new Swiper('.swiper', {
//     // Optional parameters

//     // If we need pagination
//     pagination: {
//         el: '.swiper-pagination',
//     },

//     // Navigation arrows
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },

//     // And if we need scrollbar
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
//     autoplay: {
//     delay: 3000,
//     disableOnInteraction: true,
// },
//     });
let menuClick =false;
// for menu in header
// document.getElementById('ee').style.getPropertyValue('')
function showMenu () {
    menuClick=true;
    document.querySelector('header .container ul').classList.add("show-list");
    document.querySelector('header .menu').classList.add('full-width');
}
function hiddenMenu () {
    document.querySelector('header .container ul').removeAttribute('class');
    document.querySelector('header .menu').classList.remove('full-width');
    menuClick=false;
}
window.addEventListener('click',function(event) {
   document.querySelector('header .menu').childNodes.forEach(function (ele) {
        if (ele == event.target) {  showMenu(); return}
    }); 
    if(event.target == document.querySelector('header .menu') )
      showMenu();
   else   hiddenMenu();
    // for hide custome list >>
    // document.querySelectorAll('.bmi .container .calc .form  li').forEach((ele) => {
    //     if( ele === event.target)
    //     {
    //          hideCustomList(ele.parentElement);
    //     }
    // });
});