class Home {
    constructor(){
        this.body = createSprite(800, (displayHeight - 200)/2);
        this.bodyImage = loadImage("Images/body.png");
        this.body.addImage(this.bodyImage);
        this.virus = new Virus(this.body,0,0,0.01,false);
        this.virus.virus.visible = false;
        this.tutorial = true;
        this.viType;
        //this.bodyColl = createSprite(800, (displayHeight - 200)/2,200,400);
    }

    createVirus(virusType){
        this.viType = virusType;
        if(virusType == "staph"){
            this.virus.virus.x = this.body.x + 120;
            this.virus.virus.y = this.body.y + 100;
            this.virus.virus.visible = true;
            this.virus.on = true;
        }
    }

    update(){
        this.virus.increaseSize(0.0001);

        if(mousePressedOver(this.virus.virus)){
            gameState = "battle"
        }
    }

    hide(){
        this.body.visible = false;
        this.virus.visible = false;
    }
}