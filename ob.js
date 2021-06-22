class border extends baseclass {
    constructor(x, y){
      super(x,y,width,height);
      this.Visiblity = 255;
    }
  
   display(){
     
      super.display();
     
       push();
       this.Visiblity = this.Visiblity - 255;
       tint(255,this.Visiblity);
       rect( this.body.position.x, this.body.position.y, 50, 50);
       pop();
     
   }
  
  };