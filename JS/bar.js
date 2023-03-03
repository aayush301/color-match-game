class Bar
{
	constructor(h,x,y)
	{
		this.gameCanvas = new GameCanvas();
		this.colors = ["#fc5c82", "#fed65e", "#8f72f3"];
		this.colorDefault = "#605b72";
		this.width = 60;
		this.height = h;
		this.colorIndex = -1;
		this.color = this.colorDefault;
		this.x = x;
		this.y = y;
		this.velX = -1.212;
		
	}
	
	update()
	{
		this.x += this.velX;
		if(this.x + this.width <=0)
		{
			this.x += 12*120;
			this.colorIndex = -1;
			this.color = this.colorDefault;
		}
	}
	
	draw()
	{
		this.gameCanvas.drawFillRect(this.x, this.y, this.x+this.width, this.y+this.height, this.color);
	}
	
	stepColorUp()
	{
		this.colorIndex = (this.colorIndex+1)%3;
		this.color = this.colors[this.colorIndex];
	}
	
}
