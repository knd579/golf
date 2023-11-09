

// Crie a variável canvas
var canvas = new fabric.Canvas('myCanvas');
//Defina as posições iniciais das imagens da bola e do buraco.
ball_y = 0;
ball__x - 0;
hole_y = 400;
hole_x = 800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// programe o envio da imagem do buraco de golfe ao canvas
	fabric.Image.fromURL("gold-b.png", function(Img){
		hole.obj = Img;
		hole.obj.scaleToWidth(50);
		hole.obj.scaleToHeight(50);
		hole.obj.set({
			top:hole_y,left:hole_x
		});
	})
	new_image();
}

function new_image()
{
	// programe o envio da imagem da bola ao canvas
	fabric.Image.fromURL("bola.png", function(Img){
		ball_obj = img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique as coordenadas da bola e do buraco para concluir o jogo.
	Identifique as coordenadas, caso forem iguais, remova  a imagem da bola,
	exiba "Você acertou o buraco!!"
	e troque a cor da borda do canvas para vermelho (red). */
	if((ball_x == hole_x)&&(ball_y == hole_y))
	canvas.remove(ball_obj);
document.getElementById("hd3").innerHTML = "Você acertou o buraco!!!";
document.getElementById("myCanvas").style.borderColor = "red";

	else{
		if(keyPressed == '38')
		{
			up();
			console.log("cima");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("baixo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("esquerda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("direita");
		}
	}
	
	function up()
	{
		// Programe o movimento da bola para cima.
		if(ball_y > 50){
			ball_y = ball_y - block_image_height;
			console.log("cima")
			canvas.remove(ball_obj);
			new_image();
		 }
	}
	}

	function down()
	{
		 // Programe o movimento da bola para baixo.
		 if(ball_y <= 450){
			ball_y = ball_y + block_image_height;
			console.log("baixo")
			canvas.remove(ball_obj);
			new_image();
		 }
	}

	function left()
	{
		if(ball_x > 5)
		{
			// Programe o movimento da bola para a esquerda.
			ball_x = ball_x - block_image_width;
			console.log("esquerda")
			canvas.remove(ball_obj);
			new_image();
		}
	}

	function right()
	{
		if(ball_x <= 1050)
		{
			// Programe o movimento da bola para a direita.
			ball_x = ball_x + block_image_width;
			console.log("direita")
			canvas.remove(ball_obj);
			new_image();
		}
	}
	
}

