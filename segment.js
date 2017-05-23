class segment {
  constructor(x, y,length, angle ) {
    this.x = x; // start X coordinate
    this.y = y; // end Y coordinate
	this.length = length;
    this.angle = angle;
  }

  get EndX(){
  	return  Math.cos(this.angle) * this.length + this.x;
  }

  get EndY(){
  	return Math.cos(this.angle) * this.length + this.y;
  }
  render(context){
  	 	context.beginPath();
    	context.moveTo(this.x, this.y);
    	context.lineTo(this.EndX, this.EndY);
    	context.stroke();
  }
}