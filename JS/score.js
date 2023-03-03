class Score
{
	constructor()
	{
		this.gameCanvas = new GameCanvas();
		this.score = 0;
	}
	
	updateScoreOnScreen()
	{
		this.gameCanvas.writeText(this.score);
	}
}