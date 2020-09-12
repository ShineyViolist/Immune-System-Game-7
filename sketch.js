var panel1,panel2,object1,body,bodyImage,virus,virus2,battle;

var object = [];
var attack = 0;

var timer = 0;

var index = 0;

function preload(){
  bodyImage = loadImage("Images/body.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight - 200);
  panel1 = createSprite(300, (displayHeight - 200)/2, 500, 400);
  panel1.shapeColor = "red";

  attack = Math.round(random(5,10));

  body = createSprite(800, (displayHeight - 200)/2);
  body.addImage(bodyImage);
  //object1 = createSprite(panel1.x - 150,panel1.y - 100,50,50);
  for(var i = 150; i >= -200; i = i - 100){
    object[index] = new Cell(panel1,i,"Macrophage");
    index++;
  }
}

function draw() {

  timer++;

  background("green");

  for(j = 0; j < object.length; j++){
    object[j].pressedOver();  
    if(object[j].cellState == "fight"){
      if(object[j].cellType == "Macrophage"){
        //battle = new Battle("Macrophage");
        object[j].cellType = "None";
        //console.log(j);
      }
    }
  }

  if(battle !== undefined){
    battle.run();
  }

  if(World.frameCount == attack){
    virus = new Virus(body,120,100,0.01);
    message("A virus has entered the body!");
  }

  if(virus !== undefined){
    virus.increaseSize(0.0001);
  }



  drawSprites();
}

function mouseReleased(){
  for(j = 0; j < object.length; j++){ 
    object[j].letGo(body,virus);
    console.log(object[j].cellState);
  }
}

function message(message){
  fill("blue");
  text(message,displayWidth/2,displayHeight - 200);
  console.log(message);
}