window.addEventListener("load", function(){
	var canvas = document.getElementById('canvas');
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height= height;
	
	function draw(){
	if (canvas.getContext) {
     //    var ctx = canvas.getContext('2d');
     //    ctx.beginPath();
    	// ctx.moveTo(0, 0);
    	// ctx.lineTo(width/2, height/2);
    	// ctx.stroke();
      }
  }

segment1 = new segment(100,100,100,Math.PI);
segment2 = new segment(100,100,100,Math.PI/2);

segment1.render(canvas.getContext('2d'));
segment2.render(canvas.getContext('2d'));

draw();
});
