var mouseX;
var mouseY;
var offsetX;
var offsetY;
var doMove = false;
var moveTarget;
function mouse_position(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
	if(doMove) {
		moveTarget.style.left = mouseX - offsetX;
		moveTarget.style.top = mouseY - offsetY;
	}
}

function menuOffset(e, target) {
	moveTarget = target;
	offsetX = mouseX - parseInt(moveTarget.style.left, 10);
	offsetY = mouseY - parseInt(moveTarget.style.top, 10);
}

function movePanel(e) {
  if(e.buttons === 1) {
    doMove = true;
  } else {
	doMove = false;
  }
}