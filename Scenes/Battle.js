class Battle{
    constructor(virus){
        this.battlePanel = createSprite(800, (displayHeight - 200)/2,300,400);

        this.cellPanel = new Panel(this.battlePanel);
        this.cellPanel.hide();

        this.virusNa = virus;

        this.timer = 0;

        this.virusCol2 = createSprite(-50,-50,200,50);
        this.virusCol2.shapeColor = "blue";
        this.virus = loadImage("Images/VirusG.png");
        this.virusCol = createSprite(-50,-50,200,50);
        this.virusCol.addImage(this.virus);
        this.virusCol.scale = 0.25;

        this.text = createElement("h4");
        this.text.html("Intiate battle with " + this.virusNa + "?");
        this.text.position(750,((displayHeight - 300)/2));

        this.inButton = createButton('Intiate Battle');
        this.inButton.position(750,((displayHeight - 150)/2));

        this.entry = createSprite(800,(displayHeight + 100)/2,500,200);
        this.entry.shapeColor = "blue";

        this.info = createElement("h4");
        this.info.html("");
        this.info.position(750,((displayHeight - 250)/2));
        this.info.hide();
        //this.inButton.mousePressed(this.fight());
    }

    fight(){
        this.battlePanel.width = 500;
        this.battlePanel.height = 400;
        this.text.hide();
        this.inButton.hide();
        this.cellPanel.show();
        imageMode(CENTER);
        //1065 × 234 (1.2)
        //443.75,97.5
        //image(this.virus,800,(displayHeight - 400)/2,36.97,8.125);
        this.timer++;
        this.virusCol.x = 800;
        this.virusCol.y = (displayHeight - 400)/2;
        gameState = "fight";
    }

    hide(){
        this.battlePanel.visible = false;
        this.text.hide();
        this.inButton.hide();
        this.entry.visible = false;
    }

    show(){
        this.battlePanel.visible = true;
        this.entry.visible = true;
        this.text.show();
        this.inButton.show();
    }

    update(){
        this.fight();
        this.cellPanel.update(this.entry,this.virusCol);
        if(this.cellPanel.update(this.entry,this.virusCol) !== undefined){
            //console.log(this.cellPanel.update(this.entry,this.virusCol));
            this.info.show();
            this.info.html(this.cellPanel.update(this.entry,this.virusCol));
            //console.log(this.cellPanel.update(this.entry,this.virusCol));
        }else{
            this.info.hide();
        }
        //console.log(this.virusCol.width + " and " + this.virusCol.height)
    }
}