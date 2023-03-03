class Ball		// 1650ms- time for one cycle
{
	constructor(baseY)
	{
		this.gameCanvas = new GameCanvas();
		this.colors = ["#fc5c82", "#fed65e", "#8f72f3"];
		this.radius = 15;
		this.colorIndex = 0;
		this.color = "#fc5c82";
		this.baseY = baseY;
		this.x = this.gameCanvas.getWidth()/2;
		this.y = 140;
		this.velY = 0;
		this.accY = 0;		// to be set to 0.15 (const) after a while
		
	}
	
	update()
	{
		this.velY += this.accY;
		this.y += this.velY;
		
		if(this.y + this.radius >= this.baseY)
		{
			this.velY = -7.5;
			window.setTimeout(this.changeColor.bind(this), 100);
		}
	}
	
	draw()
	{
		this.gameCanvas.drawFillCircle(this.x, this.y, this.radius, this.color);
	}
	
	getRandomColorIndex()
	{
		let index = Math.floor(Math.random()*3);
		while(index == this.colorIndex)
		{
			index = Math.floor(Math.random()*3);
		}
		return index;
	}
	
	changeColor()
	{
		this.colorIndex = this.getRandomColorIndex();
		this.color = this.colors[this.colorIndex];
	}
	
}