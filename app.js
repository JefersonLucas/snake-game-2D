window.onload = function() {

	var canvas = document.getElementById('canvas');
	var context = canvas.getContext("2d");

	document.addEventListener("keydown", function keyPush(event){
	
		console.log(event);
		switch(event.keyCode) {
			
			case 37:
				speedX = - speed;
				speedY = 0;
				break;
			case 38:
				speedX = 0;
				speedY = - speed;
				break;
			case 39:
				speedX = speed;
				speedY = 0;
				break;
			case 40:
				speedX = 0;
				speedY = speed;
				break;
		}
	});

	setInterval(game, 60);	
	var snake = [];
	const speed = 1;
	var speedX = 1;
	var	speedY = 0;	
	var stage = 30;
	var size = 20;
	var positionX = positionY = Math.floor(Math.random()*stage);
	var foodX = foodY=15;
	var tail = 2;
	var name = prompt("Your name");
	
	var name = (name == "" || name == " " || name == null || name == undefined) ? 'Player' : name;

	function game(){

		var score = 0;
		positionX += speedX;
		positionY += speedY;
		
		if (positionX <0) {
			positionX = stage-1; 
		}
		if (positionX > stage-1) {
			positionX = 0;
		}
		if (positionY < 0) {
			positionY = stage-1;
		}
		if (positionY > stage-1) {
			positionY = 0;
		}


		context.shadowBlur = 20;
		context.shadowColor = "gray";

		context.fillStyle = "#ccc";
		context.fillRect(0,0, canvas.width, canvas.height);
				
		context.fillStyle = "red";
		context.fillRect(foodX*size, foodY*size, size,size);

		context.fillStyle = "black";

		for (var i = 0; i < snake.length; i++) {
			context.fillRect(snake[i].x*size, snake[i].y*size, size-1,size-1);
			
			if (snake[i].x == positionX && snake[i].y == positionY) {
				tail = 2;
				confirm("The game is over for you "+name+" your score "+score+" points");
			}
			score++;
		}

		snake.push({
			x:positionX,
			y:positionY
		});
		
		while (snake.length > tail) {
			snake.shift();
		}

		if (foodX==positionX && foodY==positionY) {
			tail++;
			foodX = Math.floor(Math.random()*stage);
			foodY = Math.floor(Math.random()*stage);
		}
	}
}