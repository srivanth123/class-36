class Form{
    constructor(){}
    display(){
        //Not directly using html format
        // how to display message as title
        var title=createElement('h2');
        title.html("Car Racing Game");
        title.position(130,5);

        // input box
//can be any name eg- input,etc...
        var input=createinput("Name");
        input.position(130,150);

        //button
        
        var Button= createButton("play")
        Button.position(220,200);
        
        //greeting message
        var greeting=createElement('h3');

        //when we click on button do this 

        Button.mousePressed( function(){
            input.hide();
            Button.hide();
            var name1=input.value();
            greeting.html("hello"+name1)
            greeting.position(130,160);

            playerCount1 +=1; //a=a+1 
            //calling updatecount to update value of playercount in database
            player.updateCount(playerCount1)
            player.updateName(name1)
        });
        


    }

    
}