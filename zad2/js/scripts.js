$(function(){
	console.log('DOM loaded');

});



setInterval(function() {

  changeSlide();
}, 3000);

function changeSlide () {
  var carouselList = $("#carousel ul");
  carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
}

function moveFirstSlide () {
  var carouselList = $("#carousel ul");
  var firstItem = carouselList.find("li:first");
  var lastItem = carouselList.find("li:last");
  lastItem.after(firstItem);
  
  carouselList.css({marginLeft:0});
}








