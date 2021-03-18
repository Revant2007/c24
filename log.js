class Log{

    constructor(x,y,angle){
     var options={
         
        restitution : 0.8,
        friction : 1.0,
        density : 1.0

     }
        this.body =  Bodies.rectangle(x,y,300,20,options);
        this.w = 300;
        this.h = 20;
        Matter.Body.setAngle(this.body,angle); 
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