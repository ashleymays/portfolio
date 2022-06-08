// when the user is scrolling, add a small bottom border to the header
// if window.scrollTop is not 0, then add a small bottom border of color #6C7A89 to the header element

// document.addEventListener("scroll", function() {
//     let header = document.querySelector("header");   
//     if (window.scrollTop != 0) {
//         header.style.borderBottomColor = "#6C7A89";
//     }
//     else {
//         header.style.borderBottomColor = "transparent";
//     }
// });


// let lastScrollTop, currentScrollTop = 0;

// $(document).ready(function() {
//     $(window).scroll(function() {
//         lastScrollTop = currentScrollTop;
//         currentScrollTop = window.scrollY;
        
//         // user has scrolled up -> show header;
//         if (currentScrollTop <= lastScrollTop) {
//             $("header").slideDown();
//         }

//         // user has scrolled down -> hide header
//         else {
//             $("header").slideUp();
//         }
//     })
// })