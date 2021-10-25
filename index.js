
for (var i=0;i<document.querySelectorAll(".drum").length;i++) {
document.querySelectorAll(".drum")[i].addEventListener("click",function(){
	hcheck(this.innerHTML);
	ani(this.innerHTML);
});
}
document.addEventListener("keydown",function(val){
	hcheck(val.key);
	ani(val.key);
});

function hcheck(value)
{
	switch(value)
	{
		case "w":
		    var audio= new Audio("sounds/crash.mp3");
	        audio.play();
	        break;
		case "a":
		    var audio= new Audio("sounds/kick-bass.mp3");
	        audio.play();
	        break;
	    case "s":
		    var audio= new Audio("sounds/snare.mp3");
	        audio.play();
	        break;
	    case "d":
		    var audio= new Audio("sounds/tom-1.mp3");
	        audio.play();
	        break;
	    case "j":
		    var audio= new Audio("sounds/tom-2.mp3");
	        audio.play();
	        break;		

	    case "k":
		    var audio= new Audio("sounds/tom-3.mp3");
	        audio.play();
	        break;
	    case "l":
		    var audio= new Audio("sounds/tom-4.mp3");
	        audio.play();
	        break;
	    default:
	        console.log("wrong");
	}
}
function ani(event)
{
	document.querySelector("."+event).classList.add("pressed");
	setTimeout(function(){
		document.querySelector("."+event).classList.remove("pressed");
	},100)
}