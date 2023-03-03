function GameCanvas()
{
	const canvas = document.querySelector("canvas");
	const pen = canvas.getContext("2d");
	let currColor = "white";
	let currWidth = 10;
	
	this.setColor = function(color) {
		currColor = color;
	}
	
	this.getWidth = function() {
		return canvas.width;
	}
	
	this.getHeight = function() {
		return canvas.height;
	}
	
	this.setWidth = function(w) {
		canvas.width = w;
	}
	
	this.setHeight = function(h) {
		canvas.height = h;
	}
	
	this.getCanvas = function() {
		return canvas;
	}
	
	this.clearCanvas = function() {
		pen.clearRect(0, 0, canvas.width, canvas.height);
	}
	
	
	
	this.drawFillCircle = function(cx,cy,r, color=currColor) {
		pen.beginPath();
		pen.fillStyle = color;
		pen.arc(cx,cy,r,0,2*Math.PI);
		pen.fill();
	}
	
	
	this.drawFillRect = function(x1,y1,x2,y2,color=currColor) {
		const width = x2-x1;
		const height = y2-y1;
		pen.beginPath();
		pen.fillStyle = color;
		pen.fillRect(x1,y1,width,height);
	}

	
	this.writeText = function(text, x, y) {
		if(!x)
			x = canvas.width-50;
		if(!y)
			y = 80;
		
		pen.beginPath();
		pen.font = "bold 50px PT Sans Narrow";
		pen.fillStyle = "#33485f";
		pen.textAlign = "right"
		pen.fillText(text,x,y);
	}
	
	
}