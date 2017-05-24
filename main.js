window.addEventListener("load", function(){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d')
	width = window.innerWidth;
	height = window.innerHeight;
	canvas.width = width;
	canvas.height= height;
	

	segment1 = new segment(100,100,100,Math.PI);
	segment2 = new segment(segment1.EndX,segment1.EndY,100,Math.PI/2);

	updateFrame();

	function updateFrame(){
		context.clearRect(0,0,width,height);
		segment1.angle += 0.1;
		segment2.x = segment1.EndX;
		segment2.y = segment1.EndY;
		segment1.render(context);
		segment2.render(context);
		requestAnimationFrame(updateFrame);
	}
});
