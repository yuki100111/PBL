'use strict';

window.onload = () => {
  const home_first_txt = document.getElementById('home_first_txt');

  setTimeout(() => {
    home_first_txt.classList.add('appear');
  }, 500);

  setTimeout(() => {
    document.querySelector('header').classList.add('appear');
    document.querySelector('header').classList.add('header_appear');
  }, 2500);

  $('.box').on('inview', function(){
    $(this).addClass('appear');
  });

  $('#home_concept_title').on('inview', function(){
    $(this).addClass('appear');
  });

  $('.home_concept_txt').on('inview', function(){
    $(this).addClass('appear');
  });

  $('#home_details').children('h1').on('inview', function(){
    $(this).addClass('appear');
  });


}
