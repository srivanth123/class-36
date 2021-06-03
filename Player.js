class Player{
    constructor(){}   
    
    //to check playerCount from firebase
    getCount(){
       var playerCountref= database.ref('playerCount');
       playerCountref.on("value", function(data){
          playerCount1= data.val();
    
       });
    
    }
    
    
    //to update playercount in the firebase from 0 to 1 and 1 to 2 as per game
    // calling way to call updateCount .....updateCount(1);
    updateCount(p){
        // '/' means the location in the database, here it is gameState
        database.ref('/').update({
            playerCount:p
        })
        
    
    }

    //update name in teh database
    updateName(A){
    var playerIndex='player'+playerCount
     database.ref(playerIndex).set({
    name:A
     })
    }
}