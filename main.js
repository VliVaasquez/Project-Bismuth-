var = mouseEvent = "empty";
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
function my_mousedown(e);
ctx.strokeStyle = color;
ctx.lineWidth = width_of_line;
ctx.strokeStyle = color;
setmouseEvent=mousedown
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e);
setmouseEvent=mouseup
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e);
setmouseEvent=mouseleave;
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemoveb>
setmouseEvent=mousemove;
console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
ctx.stroke();
e.clientY - canvas.offsetTop;
canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart
console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
ctx.moveTo(last_position_of_x, last_position_of_y);
canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove;
last_position_of_x
last_position_of_y


