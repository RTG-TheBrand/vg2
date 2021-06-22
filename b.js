/*class you{
    constructor(x,y,width,height){
        var options={
            "isStatic":true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("jery up.png");
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        fill("red");
        stroke("red");
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }
}*/


class Form {

    constructor() {
   this.input = createInput("").attribute("placeholder", "Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset=createButton("reset");
      
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(width/2 - 50, 10);
  
      this.input.position(width/2 - 40 , height/2 - 80);
      this.button.position(width/2 + 30, height/2);
      this.reset.position(width-100,20);
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(width/2 - 70, height/4);
      });
  
  
      this.reset.mousePressed(()=>{
  
     player.updateCount(0);
     game.update(0);
  
      });
  
    }
  }