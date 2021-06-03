class Game{
constructor(){}   

//to check state from firebase
getState(){
   var gamestateref= database.ref('gameState');
   gamestateref.on("value", function(data){
      gameState= data.val();

   });

}


//to update game State in the firebase from 0 to 1 and 1 to 2 as per game
// calling way to call update .....update(1);
update(state){
    // '/' means the location in the database, here it is gameState
    database.ref('/').update({
        gameState:state
    })
    

}

// to start the game 
start(){
    if(gameState==0){
        //will create object of form class here
        form=new Form()
        form.display()

        //will create object of player class here
        player=new Player()
        //it will give playercount value from database
        player.getCount()
    }
    
}




    
}