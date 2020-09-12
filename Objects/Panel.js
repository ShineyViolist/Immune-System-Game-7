class Panel{
    constructor(battlePanel){
        this.panel1 = createSprite(300, (displayHeight - 200)/2, 500, 400);
        this.panel1.shapeColor = "red";
        this.index = 0;
        this.battlePanel = battlePanel;
        this.object = [];
        this.nImage = loadImage("Images/Nuetrophil.png")
        this.nuetro = createSprite(750,300);
        this.nuetro.addImage(this.nImage);
        this.nuetro.visible = false;
        this.set = 0;

        for(var i = 150; i >= -200; i = i - 100){
            this.object[this.index] = new Cell(this.panel1,i,"Macrophage");
            this.index++;
        }
        //console.log(this.object[3].display);
    }

    update(entry,virus){
        //console.log(virus);
        for(var j = 0; j < this.object.length; j++){
            //console.log(this + "Here");
            this.object[j].pressedOver();
            //console.log(j);
            this.release(entry,virus);
            var ret;

            if(keyDown("SPACE") && this.set == 0){
                this.set = 1;
                this.object[j].int = this.object[j].int + 1;
            }else if(keyDown("SPACE") == false){
                this.set = 0;
            }

            if(this.object[j].int == 1){
                ret = "First the macrophages eat the enemies using a process called phagocytosis. (Space)"
            }

            //console.log(this.object[j].int);

            if(this.object[j].int == 2){
                ret = "Next the macrophage signals the nuetrophils and dentritic cells. (Space)";
                this.nuetro.visible = true;
                
            }

            if(this.object[j].int == 3){
                ret = ""
            }

            return ret;
        }
    }

    release(entry,virus){
        for(var j = 0; j < this.object.length; j++){ 
            this.object[j].letGo(entry,virus);
            //console.log(this.object[j].cellState);
        }
    }

    hide(){
        this.panel1.visible = false;
        for(var j = 0; j < this.object.length; j++){
            //console.log(this + "Here");
            this.object[j].cell.visible = false;
            this.object[j].display.visible = false;
            //console.log(j);
        }
    }

    show(){
        this.panel1.visible = true;
        for(var j = 0; j < this.object.length; j++){
            //console.log(this + "Here");
            this.object[j].cell.visible = true;
            this.object[j].display.visible = true;
            //console.log(j);
        }
    }
}