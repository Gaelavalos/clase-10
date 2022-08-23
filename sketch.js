//C10 Actividad del alumno

var s1,s2,s3,s4;
var sprites =[]
var promedio=[35,38,40,45]
function setup() {
  createCanvas(400, 400);
  s1 = createSprite(75, 100, 30, 30);
  s2 = createSprite(150, 250, 30, 30);
  s3 = createSprite(300, 300, 30, 30);
  s4 = createSprite(350, 150, 30, 30);
  var suma=promedio[0]+promedio[1]+promedio[2]+promedio[3];
  var guardar=suma/promedio.length;
  console.log(guardar);
 
}
function draw() {

  background(100,200,50);
  drawSprites();
  
}

