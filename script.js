/**
 * p5js imgSetas
 * 
 * 
 */

var imgSeta, imgCoracao;
var TAM_CORACAO = 254/10;
var meuAngulo = 0;
var s = [];
var v1, v2, vr;

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

		desenha_imgSeta(s[i].x, s[i].y, s[i].ang);
	}

	desenha_coracao();
}

function desenha_imgSeta(x, y, angulo) {
	push();
	// translate(0.5*200/2, 0.5*28/2);
	translate(x, y);
	rotate(angulo);
	image(imgSeta, -0.5*200/2, -0.5*28/2, 200/2, 28/2);
	pop();
}

function desenha_coracao() {
	image(imgCoracao, mouseX - TAM_CORACAO / 2, mouseY - TAM_CORACAO / 2, TAM_CORACAO, TAM_CORACAO);
}