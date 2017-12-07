$(function(){
	console.log('DOM loaded');
});



$("span:even").css({
      "color": "red",
      "font-weight": "bold"
      
    });


$("span:odd").css({
	"font-size": "25px",
    "margin-right": "20px"
    });




var paragraphs = $('p');
paragraphs.each(function(index, element) {
	var button = '<button class="btn" data-tmp="' + index + '">click me</button>'
	$(element).append(button)
})


$("button").click(function(){
	alert($(this).attr("data-tmp"));
});


$( "span" )
  .on( "mouseenter", function() {
    $( this ).css({
      "background-color": "yellow",
      "font-weight": "bolder"
    });
  })
  .on( "mouseleave", function() {
    var styles = {
      backgroundColor : "#ddd",
      fontWeight: ""
    };
    $( this ).css( styles );
  });