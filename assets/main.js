//	Variáveis Globais
	var cobra = [];
	var rabo = 2;
	const velocidade = 1;
	var velocidade_X = 1;
	var	velocidade_Y = 0;	
	var palco = 30;
	var tamanho = 20;
	var posicao_X = posicao_Y = Math.floor(Math.random()*palco); // Posição aleatória
	var comida_X = comida_Y=15;
//	Nome do jogador
	var nome = prompt("Seu nome");
	var nome = (nome == "" || nome == " " || nome == null || nome == undefined) ? 'Jogador' : nome;
//
//	Quando o jogo começa inicia uma nova função
	window.onload = function() {
	//	Captura o id do canvas e inicia um novo contexto 2D
		var canvas = document.getElementById('canvas');
		var contexto = canvas.getContext("2d");
	//	Captura os movimentos do teclado
		document.addEventListener("keydown", function keyPush(evento){
		//	Estrutura caso para capturar os eventos do teclado
			switch(evento.keyCode) {
				case 37: // Esquerda
					velocidade_X = - velocidade;
					velocidade_Y = 0;
					break;
				case 38: // Cima
					velocidade_X = 0;
					velocidade_Y = - velocidade;
					break;
				case 39: // Direita
					velocidade_X = velocidade;
					velocidade_Y = 0;
					break;
				case 40: // Baixo
					velocidade_X = 0;
					velocidade_Y = velocidade;
					break;
			}
		});
	//	Atualiza a função jogo
		setInterval(jogo, 60);
	//
		function jogo(){
		//	Pontuação
			var pontuacao = 0;
		//	Posição
			posicao_X += velocidade_X;
			posicao_Y += velocidade_Y;
		//	Tratativa caso a posição da cobra bata na parede 
			if (posicao_X < 0) {
				posicao_X = palco-1; 
			}
			if (posicao_X > palco-1) {
				posicao_X = 0;
			}
			if (posicao_Y < 0) {
				posicao_Y = palco-1;
			}
			if (posicao_Y > palco-1) {
				posicao_Y = 0;
			}
		//	Efeito blur
			contexto.shadowBlur = 20;
			contexto.shadowColor = "gray";
		//	Backgroundo do palco
			contexto.fillStyle = "#ccc";
			contexto.fillRect(0,0, canvas.width, canvas.height);
		//	Contexto da comida
			contexto.fillStyle = "red";
			contexto.fillRect(comida_X*tamanho, comida_Y*tamanho, tamanho,tamanho);
		//	Contexto da cobra
			contexto.fillStyle = "black";
		//	Constrói a cobra
			for (var i = 0; i < cobra.length; i++) {
				contexto.fillRect(cobra[i].x*tamanho, cobra[i].y*tamanho, tamanho-1,tamanho-1);
			//	Verifica se a cobra bateu nela mesma
				if (cobra[i].x == posicao_X && cobra[i].y == posicao_Y) {
				//	Diminui o tamanho e exibe uma mensagem
					rabo = 2;
					confirm("O jogo acabou para você! "+nome+", sua pontuação foi de "+pontuacao+" pontos");
				}
			//	Pontuação aumenta
				pontuacao++;
			}
		//	Objeto cobra
			cobra.push({
				x:posicao_X,
				y:posicao_Y
			});
		//	Se o tamanho da cobra for maior do que o permitido
			while (cobra.length > rabo) {
				cobra.shift();
			}
		//	Define uma posição automática da comida
			if (comida_X==posicao_X && comida_Y==posicao_Y) {
			//	Aumenta o tamanho da cobra
				rabo++;
			//	Posição automática
				comida_X = Math.floor(Math.random()*palco);
				comida_Y = Math.floor(Math.random()*palco);
			}
		}
	}