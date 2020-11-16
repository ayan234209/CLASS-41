class Player{
    constructor(){
        this.name=null;
        this.distance=0;
        this.index=null;
        this.rank=null;
    }

 
    getCount(){
        var playerCountRef=database.ref('playerCount');
        playerCountRef.on("value",function(data){

            playerCount=data.val();

        })
  }

updateCount(count){

    database.ref('/').update({
        'playerCount':count
    })
}

update(){
    var playerIndex="Players/Player"+this.index;
    database.ref(playerIndex).set({
        'name':this.name,
        'distance':this.distance,
        'rank': this.rank
    })
}

getCarsReachedEnd(){
   var carsReachedEndRef= database.ref('carsReachedEnd');
   carsReachedEndRef.on("value",function (data) {
       this.rank=data.val();
   })
}

static updateCarsReachedEnd(rank){
    database.ref('/').update({
        'carsReachedEnd': rank
    })
}

  static  getPlayerInfo(){

    var getPlayerInfoRef=database.ref('Players');
    getPlayerInfoRef.on("value",function(data){
        allPlayers=data.val();
    })

    }
}