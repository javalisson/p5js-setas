/**
 * p5js setas
 * 
 * 
 */

var imgSeta, imgCoracao;
var TAM_CORACAO = 254/10;
var meuAngulo = 0;
var s = [];
var v1, v2, vr;
var distancia;
var numero_magico = 100;

function preload() {
	imgSeta = loadImage('imagem-2.png');
	imgCoracao = loadImage('coracao.png');
}

// chamada no inicio do programa
function setup() {
	// cria o quadro, com dimensoes 900 x 400
	createCanvas(900, 600);

	noCursor();

	var incremento = height / 5;
	for (var i = incremento / 2; i < width; i += incremento) {
		for (var j = incremento / 2; j < height; j += incremento) {
			s.push({
				x: i,
				y: j,
				ang: 0
			});			
		}	
	}
	v1 = createVector();
	v2 = createVector();
}

// chamada toda vez que o quadro for redesenhado
// ou seja, a cada frame da animacao
function draw() {
	// pinta o fundo de preto
	background(255);

	for (var i = 0; i < s.length; i ++) {
		v1.x = s[i].x;
		v1.y = s[i].y;
		
		v2.x = mouseX;
		v2.y = mouseY;

		vr = p5.Vector.sub(v2, v1);

		s[i].ang = vr.heading();

		distancia = vr.mag();

		desenha_seta(s[i].x, s[i].y, s[i].ang, numero_magico/distancia^0.5);
	}

	desenha_coracao();
}

function desenha_seta(x, y, angulo, escala) {
	push();
	// translate(0.5*200/2, 0.5*28/2);
	translate(x, y);
	rotate(angulo);
	scale(escala, escala);
	image(imgSeta, -0.5*200/2, -0.5*28/2, 200/2, 28/2);
	pop();
}

function desenha_coracao() {
	image(imgCoracao, mouseX - TAM_CORACAO / 2, mouseY - TAM_CORACAO / 2, TAM_CORACAO, TAM_CORACAO);
}

function keyPressed() {
	if (keyCode == UP_ARROW) {
		numero_magico += 25;
	} else if (keyCode == DOWN_ARROW) {
		numero_magico -= 25;
	}
	console.log(numero_magico);
}