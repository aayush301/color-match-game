class GameSound
{
	constructor()
	{
		this.bounce = new Audio("sounds/bounce.mp3")
		this.gameOver = new Audio("sounds/game-over.wav")
	}
	
	play(type)
	{
		if(type == "bounce")
		{
			this.bounce.pause();
			this.bounce.currentTime = 0;
			this.bounce.play();
		}
		else if(type == "gameOver")
		{
			this.gameOver.pause();
			this.gameOver.currentTime = 0;
			this.gameOver.play();
		}
	}
}
