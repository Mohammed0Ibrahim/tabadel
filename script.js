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
window.onscroll = () => {
    document.querySelectorAll('body > *').forEach((ele) => {
        if(ele.children[0] !== undefined) {
            if(window.scrollY >= ele.offsetTop - 450 )
            ele.children[0].classList.add('active-header');
            else ele.children[0].classList.remove('active-header')
        }
    });
    document.querySelectorAll('.subscribers .container .box').forEach((ele) => {
        if(document.body.clientWidth <= 1200)
            if(window.scrollY >= ele.parentElement.parentElement.offsetTop + ele.offsetTop - 100 )
            ele.classList.add('show-info');
            else ele.classList.remove('show-info')
       else ele.classList.remove('show-info')
        })
        document.querySelectorAll('.stats .container .stat').forEach((ele) => {
            if(window.scrollY >= ele.parentElement.parentElement.offsetTop + ele.offsetTop - 300 )
            ele.classList.add('active-stat');
            else ele.classList.remove('active-stat')
        })
}