/*class back{
    constructor(x,y,width,height){
        var options={
            "isStatic":true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("bg1.jpg");
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



class back{
    constructor(x,y,width,height){
        var options={
            "isStatic":true,
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("bg1.jpg");
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
}
