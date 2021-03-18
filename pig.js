class pig{

    constructor(x,y){
     var options={
         
        restitution : 0.8,
        friction : 1.0,
        density : 1.0
     }
        this.body =  Bodies.rectangle(x,y,50,50,options);
        this.w = 50;
        this.h = 50;
        World.add(world,this.body);
    }
    
    display(){
      var position = this.body.position;
      var angle = this.body.angle;
      push(); //to apply new settings
      translate(position.x,position.y);
      rotate(angle);
      rectMode(CENTER);
      fill("red");
      rect(0,0,this.w,this.h);
      pop(); //bring back box with older settings
    }
    
    }