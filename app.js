window.onload = function() {

	var stage = document.getElementById('stage');
	var ctx = stage.getContext("2d");

	document.addEventListener("keydown", keyPush);

	setInterval(game, 60);

	const vel = 1;
	
	var nome = prompt("Seu nome:");
	var vx = 1;
	var	vy = 0;
	var px = 10;
	var py = 15;
	var tp = 20;
	var qp = 30;
	var ax=ay=15;
		
	var trail = [];
	tail = 2;


	function game(){

		px += vx;
		py += vy;
		score = 0;

		if (px <0) {
			px = qp-1; 
		}
		if (px > qp-1) {
			px = 0;
		}

		if (py < 0) {
			py = qp-1;
		}
		if (py > qp-1) {
			py = 0;
		}

		ctx.fillStyle = "white";
		ctx.fillRect(0,0, stage.width, stage.height);
				
		ctx.fillStyle = "red";
		ctx.fillRect(ax*tp, ay*tp, tp,tp);

		ctx.fillStyle = "black";
		for (var i = 0; i < trail.length; i++) {
			ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
			
			if (trail[i].x == px && trail[i].y == py) {
			tail = 2;
			alert("O jogo acabou! "+nome+", pontuação: "+score);
			}
			score++;
		}

		trail.push({x:px,y:py})
		
		while (trail.length > tail) {
			trail.shift();
		}

		if (ax==px && ay==py) {
			tail++;
			ax = Math.floor(Math.random()*qp);
			ay = Math.floor(Math.random()*qp);
		}			
	}
	
	function keyPush(event){
	
		switch(event.keyCode) {
	
			case 37:
				vx = -vel;
				vy = 0;
				break;
			case 38:
				vx = 0;
				vy = -vel;
				break;
			case 39:
				vx = vel;
				vy = 0;
				break;
			case 40:
				vx = 0;
				vy = vel;
				break;
		}
	}
}