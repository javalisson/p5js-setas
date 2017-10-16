/**
 * p5js Setas
 * 
 * 
 */

var seta;

function preload() {
	seta = loadImage('imagem-2.png');
}

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(900, 400);
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(255);
	desenha_seta();
}

function desenha_seta() {
	push();
	// ...
	image(seta, 0, 0, 200/2, 28/2);
	pop();
}