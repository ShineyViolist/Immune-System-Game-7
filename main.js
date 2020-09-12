var home,battle;

var gameState = "home";

function preload(){
  
}

function setup() {
  createCanvas(displayWidth,displayHeight - 200);
  home = new Home();
  battle = new Battle();
  battle.hide();
}

function draw() {
  background("green");

  if(World.frameCount % 50 == 0){
    home.createVirus("staph");
  }

  home.update();

  drawSprites();

  if(gameState == "battle"){
    battle.show();
    battle.inButton.mousePressed(change);
  } else if(gameState == "fight"){
    battle.update();
    home.hide();
  }
}

function change(){
  battle.fight();
}

function mouseReleased(){

}