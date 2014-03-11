/*$('button').on("click",function(){
	console.log(this)
        $('h1').css("color","red")
        $('h1').html("change my text")
          $('p').css("visibility","visible")
$('p').hide()
//})
$(this).css('color','blue')
})*/

function generateEq(){
var eq={
	a: Math.floor((Math.random()*100)+1),
	b: Math.floor((Math.random()*100)+1)
}
	return eq
}
var eq=generateEq()
$('#ans').text(eq.a +"+"+ eq.b);
correctans=eq.a+eq.b

$('#answer').on("click",function(){

var input=$('input').val()
if (input==correctans){
	alert("correct")
}
else{
	alert("incorrect")
   }

var eq=generateEq()
$('#ans').text(eq.a +"+"+ eq.b);
correctans=eq.a+eq.b
var input=($('input').val(''))
})







