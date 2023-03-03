function MainGame()
{
	const gameCanvas = new GameCanvas();
	const gameSound = new GameSound();
	const score = new Score();
	const bars = [];
	let ball;
	let animationId;
	
	
	this.init = function() {
		
		let h = 230;
		let baseY = gameCanvas.getHeight() - h - 20;
		ball = new Ball(baseY);
		window.setInterval(()=>{ ball.accY = 0.15; }, 2.5*1650);
		
		for(let i=0; i<12; i++)
		{
			let x = gameCanvas.getWidth()/2 + 120*3-30 + i*120;
			let y = baseY;
			let bar = new Bar(h,x,y);
			bars.push(bar);
		}
		
		gameCanvas.getCanvas().addEventListener("click", this.checkAndColorBar.bind(this))
		this.gameLoop();
	}
	
	
	this.gameLoop = function() {
		animationId = window.requestAnimationFrame(this.gameLoop.bind(this));
		gameCanvas.clearCanvas();
		
		ball.update();
		ball.draw();
		
		bars.forEach(bar => {
			bar.update();
			bar.draw();
		})
		
		score.score++;
		score.updateScoreOnScreen();
		this.checkBallBarCollision();
		
	}
	
	
	this.checkAndColorBar = function(e) {
		e.preventDefault();
		let clickX = e.offsetX, clickY = e.offsetY;
		
		for(let i=0; i<bars.length; i++)
		{
			let bar = bars[i];
			if(bar.x <= clickX && clickX <= bar.x+bar.width &&
				bar.y <= clickY && clickY <= bar.y+bar.height)
			{
				bar.stepColorUp();
				break;
			}
		}
	}
	
	
	this.findCentreBar = function() {
		let midX = gameCanvas.getWidth()/2;
		for(let i=0; i<bars.length; i++)
		{
			let bar = bars[i];
			if(bar.x<=midX && midX <= bar.x+bar.width)
				return bar;
		}
	}
	
	
	this.checkBallBarCollision = function() {
		if(ball.y + ball.radius >= ball.baseY)
		{
			collidedBar = this.findCentreBar();
			if(collidedBar.color != ball.color)
			{
				this.pauseGame();
				gameSound.play("gameOver");
				window.setTimeout(this.gameOver, 2000);
			}
			else
				gameSound.play("bounce");
		}
	}
	
	
	this.pauseGame = function() {
		window.cancelAnimationFrame(animationId);
	}
	
	this.gameOver = function() {
		document.querySelector("canvas").classList.add("hide");
		let resultBoard = document.querySelector("#result-board");
		resultBoard.classList.remove("hide");
		
		resultBoard.querySelector("#score").innerHTML = `Your score is ${score.score}`;
		
		resultBoard.animate(
			[{transform: "scale(0.5)"}, {transform: "scale(1)"}],
			{duration: 400, iterations:1}
		);
		
	}
	
	
}