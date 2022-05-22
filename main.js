var mousEvent="empty";

var last_position_of_x,last_position_of_y;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

radius=5;

color="black";

width_of_line=1;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    radius=document.getElementById("radiuus").value;
    color=document.getElementById("cooler").value;
    width_of_line=document.getElementById("thichness").value;
    mousEvent="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mousEvent="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mousEvent="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
if (mousEvent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width_of_line;
    ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius ,0 ,2* Math.PI);
    console.log("last postion of x & y are=");
    console.log("x="+last_position_of_x+"y="+last_position_of_y);
    ctx.moveTo(last_position_of_x,last_position_of_y);
    console.log("current position of x & y are=");
    console.log("x="+current_position_of_mouse_x+"y="+current_position_of_mouse_y);
    ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
    ctx.stroke();
}

last_position_of_x=current_position_of_mouse_x;

last_position_of_y=current_position_of_mouse_y;
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}
