window.addEventListener("load", function(){
	var canvas = document.getElementById('canvas');
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height= height;
	
	function draw(){
	if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
    	ctx.moveTo(0, 0);
    	ctx.lineTo(width/2, height/2);
    	ctx.stroke();
      }
  }

segment = new segment(1,2,2,4);

draw();
});
