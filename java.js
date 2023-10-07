canvas=document.getElementById("n");
ctx=canvas.getContext("2d");
Rover_width=150;
Rover_heigth=150;
Rover_imagen="si.jpg";
Rover_PNG="rover.png";
Rover_x=200;
Rover_y=200;
function add(){
    background_imgTag = new Image(); //defining a variable with a new image
	background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
	background_imgTag.src = Rover_imagen

	rover_imgTag = new Image(); //defining a variable with a new image
	rover_imgTag.onload = uploadrover; // setting a function, onloading this variable
	rover_imgTag.src = Rover_PNG
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.heigth);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,Rover_x,Rover_y,Rover_width,Rover_heigth);
}