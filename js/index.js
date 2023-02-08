$(document).ready(function () {
    $('.single-item').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
    }); 
});

$(function(){
    new WOW().init(); 
  });


  $(window).on('load', function(){

    new WOW().init(); 
});

var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var day = currentDate.getDate();
var month = currentDate.getMonth() ;
var year = currentDate.getFullYear();

var countDownDate = new Date("February 28, 2023 02:00:00").getTime();
var megaDayCount = new Date("April 5, 2023 02:15:00").getTime();
var skullCount = new Date("April 12, 2023 02:15:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d :" + hours + "h : "
  + minutes + "m : " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


// megacount

var y = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
      
    // Find the distance between now and the count down date
    let distance = megaDayCount - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("megaJackpot").innerHTML = days + "d " + hours + "h : "
    + minutes + "m : " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("megaJackpot").innerHTML = "EXPIRED";
    }
  }, 1000);

  var z = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();
      
    // Find the distance between now and the count down date
    let distance = skullCount - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    document.getElementById("skullCount").innerHTML =days + "d " + hours + "h : "
    + minutes + "m : " + seconds + "s ";
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("skullCount").innerHTML = "EXPIRED";
    }
  }, 1000);


    var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
        var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
        console.log(object.USD)
        var jackpots = $('.jackpot_content')
        jackpots.each(function() {
          console.log(this)
          var amount = Number($(this).children('.header_content').children('.currency_content').children('h2').text().replace(' ETH', ''))
          console.log(amount)
          function numberWithCommas(x) {
              return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
          var USD = numberWithCommas((amount * object.USD).toFixed(2));
          console.log(USD)

          $(this).children('.cash_value').children('.cash_wrapper').children('.usd').text("$" + USD)
        })
      }
    };


    json.open(
      "GET", // method
      "https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR", // url
      true // async
    ); // initialise the request
    json.send(); //send request

    

