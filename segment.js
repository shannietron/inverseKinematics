class segment {
  constructor(x, y,length, angle ) {
    this.x = x; // start X coordinate
    this.y = y; // end Y coordinate
    this.length = length;
    this.angle = angle;
  }

  get EndX(){
  	return  this.x + Math.cos(this.angle) * this.length;
  }

  get EndY(){
  	return this.y +Math.sin(this.angle) * this.length;
  }
  render(context){
  	 	context.beginPath();
    	context.moveTo(this.x, this.y);
    	context.lineWidth = 4;
    	context.lineTo(this.EndX, this.EndY);
    	context.stroke();
  }
}