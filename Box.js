class Box{

constructor(x,y,width,height){
 var options={
     restitution : 0.8,
     friction : 1.0,
     density : 1.0
 }
    this.body =  Bodies.rectangle(x,y,width,height,options);
    this.w = width;
    this.h = height;
    World.add(world,this.body);
}

display(){
  var position = this.body.position;
  var angle = this.body.angle;
  push(); //to apply new settings
  translate(position.x,position.y);
  rotate(angle);
  rectMode(CENTER);
  strokeWeight(4);
  stroke("green");
  rect(0,0,this.w,this.h);
  pop(); //bring back box with older settings
}

}