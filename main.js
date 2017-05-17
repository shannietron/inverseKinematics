window.addEventListener("load", function(){
	
	function draw(){
	var canvas = document.getElementById('canvas');
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height= height;

	if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
    	ctx.moveTo(0, 0);
    	ctx.lineTo(width/2, height/2);
    	ctx.stroke();
      }
  }

draw();
});