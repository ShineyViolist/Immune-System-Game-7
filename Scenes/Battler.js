class Battle{
    constructor(cellType){
        this.timer = 0;
        this.x = 1;
        this.macrophage = loadImage("Images/" + cellType + ".png");
        this.battleState = "approach";
        this.panel = createSprite(displayWidth/2,(displayHeight - 200)/2,500,400);
        this.panel.shapeColor = "white";
        this.enemy = new Virus(this.panel,0,-150,0.05);
        this.enemies;
        this.text = createElement("h3");
        this.text.position(displayWidth/2,(displayHeight + 300)/2);
        this.text.html("An invader has come!")
    }

    createViruses(x){
        this.enemies = new Virus(this.panel,0 + (x * 50), -150,0.05);
    }

    run(){
        this.timer++;

        if(keyDown("space")){
            this.battleState = "fight";
            this.text.hide();
        }

        //console.log(timer);

        if(this.timer % 30 == 0 && this.x !== 4){
            this.createViruses(this.x);
            this.x++;
            
        }
    }
}