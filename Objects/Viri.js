class Viri{
    constructor(x,y){
        this.virus = loadImage("Images/Virus.png");
        this.virusCol = createSprite(x,y,50,50);
        this.virusCol.visible = false;
    }
}