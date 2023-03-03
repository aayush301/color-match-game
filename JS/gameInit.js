function GameInit()
{
	this.init = function() {
		document.querySelector("#start-game").addEventListener("click", this.start);
		document.querySelector("#play-again-game").addEventListener("click", this.start);
	}
	
	this.start = function() {
		document.querySelector("#start-game").classList.add("hide");
		document.querySelector("#result-board").classList.add("hide");
		const canvas = document.querySelector("canvas");
		canvas.classList.remove("hide");
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight - 65;
		
		const mainGame = new MainGame();
		mainGame.init();
	}
}