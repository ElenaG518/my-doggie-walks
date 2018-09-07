'use strict'

function showWalkRates() {
  $('.service').on('click', '.js-walking', function (event) {
    event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #hike, #run, #sitting, #contact').hide();
    $('.nav-walking').addClass('active');
    $('.nav-home, .nav-hiking, .nav-running, .nav-sitting, .nav-contact').removeClass('active');
    $('#walk').show(250, 'linear');
  })
}

function showWalkRatesNav() {
  $('.topnav').on('click', '.nav-walking', function (event) {
    event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #hike, #run, #sitting, #contact').hide();
    $('.nav-walking').addClass('active');
    $('.nav-home, .nav-hiking, .nav-running, .nav-sitting, .nav-contact').removeClass('active');
    $('#walk').show(250, 'linear');
  })
}

function showHikeRates() {
  $('.service').on('click', '.js-hiking', function (event) {
    event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #walk, #run, #sitting, #contact').hide();
    $('.nav-hiking').addClass('active');
    $('.nav-home, .nav-walking, .nav-running, .nav-sitting, .nav-contact').removeClass('active');
    $('#hike').show(250, 'linear');
  })
}

function showHikeRatesNav() {
  $('.topnav').on('click', '.nav-hiking', function (event) {
    event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #walk, #run, #sitting, #contact').hide();
    $('.nav-hiking').addClass('active');
    $('.nav-home, .nav-walking, .nav-running, .nav-sitting, .nav-contact').removeClass('active');
    $('#hike').show(250, 'linear');
  })
}

function showRunRates() {
  $('.service').on('click', '.js-running', function (event) {
    event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #hike, #walk, #sitting, #contact').hide();
    $('.nav-running').addClass('active');
    $('.nav-home, .nav-hiking, .nav-walking, .nav-sitting, .nav-contact').removeClass('active');
    $('#run').show(250, 'linear');
  })
}

function showRunRatesNav() {
  $('.topnav').on('click', '.nav-running', function (event) {
    event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #hike, #walk, #sitting, #contact').hide();
    $('.nav-running').addClass('active');
    $('.nav-home, .nav-hiking, .nav-walking, .nav-sitting, .nav-contact').removeClass('active');
    $('#run').show(250, 'linear');
  })
}

function showPetSitRates() {
  $('.service').on('click', '.js-pet-sitting', function (event) {
    event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #hike, #walk, #run, #contact').hide();
    $('.nav-sitting').addClass('active');
    $('.nav-home, .nav-hiking, .nav-running, .nav-walking, .nav-contact').removeClass('active');
    $('#sitting').show(250, 'linear');
})
}

function showPetSitRatesNav() {
  $('.topnav').on('click', '.nav-sitting', function (event) {
  event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #hike, #walk, #run, #contact').hide();
    $('.nav-sitting').addClass('active');
    $('.nav-home, .nav-hiking, .nav-running, .nav-walking, .nav-contact').removeClass('active');
    $('#sitting').show(250, 'linear');
  })
}  


function goHome() {
  $('.topnav').on('click', '.nav-home', function(event) {
    event.preventDefault();
    $('.rates').addClass('hidden');
    $('.occupy').show();
    $('.nav-home').addClass('active');
    $('.nav-walking, .nav-hiking, .nav-running, .nav-sitting, .nav-contact').removeClass('active');
});
}

function goHomeBanner() {
  $('.banner').on('click', '.banner-home', function(event) {
    event.preventDefault();
    $('.rates').addClass('hidden');
    $('.occupy').show();
    $('.nav-home').addClass('active');
    $('.nav-walking, .nav-hiking, .nav-running, .nav-sitting, .nav-contact').removeClass('active');
});
}

function contactMe() {
  $('.topnav').on('click', '.nav-contact', function (event) {
    event.preventDefault();
    $('.rates').removeClass('hidden');
    $('.occupy, #hike, #walk, #sitting, #run').hide();
    $('.nav-contact').addClass('active');
    $('.nav-walking, .nav-hiking, .nav-running, .nav-sitting, .nav-home').removeClass('active');
    $('#contact').show(250, 'swing');
    })
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    console.log(x);
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
 
function createRates(){
  showWalkRates();
  showHikeRates();
  showRunRates();
  showPetSitRates();
  contactMe();
  goHome();
  goHomeBanner();
  showWalkRatesNav();
  showHikeRatesNav();
  showRunRatesNav();
  showPetSitRatesNav();
  myFunction();
}

$(createRates);