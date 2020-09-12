class Cell {
    constructor(panel,offsetX,cellType){
        this.image = loadImage("Images/Macrophage.png");

        this.cellState = "rest";
        this.cellType = cellType;

        this.scale = 0.7;

        this.cell = createSprite(panel.x - offsetX,panel.y - 100,50,50);
        this.cell.addImage(this.image);
        this.cell.scale = this.scale;
        this.cell.visible = false;

        this.display = createSprite(panel.x - offsetX,panel.y - 100,50,50);
        this.display.addImage(this.image);
        this.display.scale = this.scale;

        this.set = 0;
        this.int = 0;
        //this.display;

        this.x = panel.x - offsetX;
        this.y = panel.y - 100;
    }

    pressedOver(){
        //console.log(this.display + "Sam");
        if(mousePressedOver(this.display)){
            //console.log(this.display);
            this.display.x = mouseX;
            this.display.y = mouseY;
            //console.log(this.display.x);
            //this.set = 1;
        }
        //this.display = createSprite(mouseX,mouseY,50,50);
    }

    letGo(entry,virus){
        //console.log(this.display.y)
        if(this.display.isTouching(entry) && this.display.y > 200){
            //if(this.display.)
            this.display.velocityY = -2;
            this.display.depth = entry.depth + 1;
            this.set = 1;
        } else if(this.display.y < 200 && this.set == 1){
            this.display.x = this.x;
            this.display.y = this.y;
            this.display.velocityY = 0;
        }

        if(this.display.isTouching(virus) && this.display.velocityY !== 0){
            this.display.velocityY = 0;
            this.int++;
        }
        this.display.depth = entry.depth + 1;
        //console.log(this.int);
    }
}