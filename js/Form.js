class Form{
    constructor(){
        this.title=createElement('h1');
        this.input=createInput("Name");
        this.button=createButton('Play');
        this.greeting=createElement('h2');
        this.reset=createButton("Reset");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
        this.title.hide();
    }

    display(){

      
       this.title.html("Car Racing Game");
       this.title.position(width/2,0);

       
        this.input.position(width/2,height/2-50);
      
       
        this.button.position(width/2,height/2);

       this.reset.position(width-100,20);


       this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            player.name=this.input.value();
            
            playerCount=playerCount+1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html(" welcome to the game ( ; "+player.name);
            this.greeting.position(width/2,height/2);

            
        })
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
            Player.updateCarsReachedEnd(0);
        })

    }
}    