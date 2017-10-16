/**
 * p5js imgSetas
 * 
 * 
 */

var imgSeta;
var meuAngulo = 0;
var s = [];

function preload() {
	imgSeta = loadImage('imagem-2.png');
}

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(900, 400);
	s.push({
		x: 0,
		y: 0,
		ang: 0
	});
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(255);
	var i = 0;
	desenha_imgSeta(s[i].x, s[i].y, s[i].ang);
}

function desenha_imgSeta(x, y, angulo) {
	push();
	// translate(0.5*200/2, 0.5*28/2);
	translate(x, y);
	rotate(angulo);
	image(imgSeta, -0.5*200/2, -0.5*28/2, 200/2, 28/2);
	pop();
}