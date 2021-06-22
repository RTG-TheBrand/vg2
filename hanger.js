/*class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4,
            isStatic:true,
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        //this.color=color(random(0, 255), random(0, 255), random(0, 255));
        this.image=loadImage("1623929773692.png")
        World.add(world, this.body);

        

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        //fill(this.color)
        imageMode(CENTER);
        image(this.image,0, 0, this.r,this.r);
        pop();

        if(mouseIsPressed){
            
            pos.y=pos.y+50;
            
        }

    }

};*/



class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }

      /* = createSprite(300,200);
      car1.addImage("car1",car1_img);
      car2 = createSprite(500,200);
      car2.addImage("car2",car2_img);
     /* car3 = createSprite(500,200);
      car3.addImage("car3",car3_img);
      car4 = createSprite(700,200);
      car4.addImage("car4",car4_img);*/
      //cars = [car1, car2];

           /* = createSprite(300,200);
              car1.addImage("car1",car1_img);
              car2 = createSprite(500,200);
              car2.addImage("car2",car2_img);
             /* car3 = createSprite(500,200);
              car3.addImage("car3",car3_img);
              car4 = createSprite(700,200);
              car4.addImage("car4",car4_img);*/
             // cars = [car1, car2];

             /* track=createSprite(0,height-7800,width,800*20);
              track.addImage("img",trackimg);*/

    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;

        /*b1=new border(width/3,displayHeight/2,20,100000000000000000000000000);
        b2=new border(width/1,displayHeight/2,20,100000000000000000000000000);

        b1.display();
        b2.display();*/

        //background(image(trackimg,0,height-7800,width,800*20));
  
              //image(track, 0,-displayHeight,displayWidth, displayHeight*5);
              car1 = createSprite(300,200);
              car1.addImage("car1",car1_img);
              car2 = createSprite(500,200);
              car2.addImage("car2",car2_img);
             /* car3 = createSprite(500,200);
              car3.addImage("car3",car3_img);
              car4 = createSprite(700,200);
              car4.addImage("car4",car4_img);*/
              cars = [car1, car2];
        //index of the array
        var index =0;
  
        //x and y position of the cars
        var x =175;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 200;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          cars[index-1].x = x;
          cars[index-1].y = y;
  
          if (index === player.index){
            cars[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = cars[index-1].y
          }
          
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.distance +=10
        player.update();
      }
      if(player.distance > 3860){
        gameState = 2;
      }
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");

    }
  }
  