 window.onload = function () {
     document.getElementById('banner').setAttribute("style", "height:70vh");
     setTimeout(function () {
         $(".image img").css({
             opacity: 0,
             display: 'inherit'
         }).animate({
             opacity: 1
         }, 2000);
         AOS.init();
     }, 1500);

     setTimeout(function () {
         $(".quote h1").css({
             opacity: 0,
         }).animate({
             opacity: 1
         }, 2000);
         AOS.init();
     }, 2500);
     setTimeout(function () {
         $(".title").css({
             opacity: 0,
         }).animate({
             opacity: 1
         }, 2000);
         $(".imagegrid").css({
             opacity: 0,
             display: 'inherit'
         }).animate({
             opacity: 1
         }, 2000);
         $(function () {
             AOS.init();
         });
     }, 3000);
 }
 $(function () {
     $('.icon-scroll').click(function () {

         $('html, body').animate({
             scrollTop: $('section.grid').offset().top
         }, 'slow');
         return false;
     });
 });
