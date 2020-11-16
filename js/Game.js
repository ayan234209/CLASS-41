class Game{
constructor(){}

getState(){
    var gameStateRef=database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState=data.val();
    })
}


update(state){
    database.ref('/').update({
        'gameState':state
    });
}


start(){
    if(gameState===0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
       
    }

    car1=createSprite(100,200);
    car1.addImage(car1image);
    car2=createSprite(300,200);
    car2.addImage(car2image);
    car3=createSprite(500,200);
    car3.addImage(car3image);
    car4=createSprite(700,200);
    car4.addImage(car4image);
    cars=[car1,car2,car3,car4];
}



    play(){
        form.hide();
        textSize(30);
        text("Game Start"+120,100);
        console.log("Inside play");
        Player.getPlayerInfo();
        player.getCarsReachedEnd();

        if(allPlayers!==undefined){

            image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=175;
            var y;


            for(var plr in allPlayers){
               // console.log(plr)
                index=index+1;
                x=x+200;
                console.log(allPlayers[plr].distance)
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x
                cars[index-1].y=y;

                if(index=== player.index){
                   // cars[index-1].shapeColor="red";
                   stroke(10);
                   fill("red");
                   ellipse(x,y,60,60);
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }

            }
        }
        if(keyIsDown(UP_ARROW)&& player.index!==null){
            player.distance+=50;
            player.update();
        }

        if(player.distance>4250){
            gameState=2;
            player.rank=player.rank+1;
            Player.updateCarsReachedEnd(player.rank);
        }

        drawSprites();

    }

    end(){
        console.log("Game End");
        console.log("Rank :"+player.rank);
    }
}