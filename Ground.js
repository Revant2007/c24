class Ground {

constructor(x,y){

    var options = {
         isStatic: true
     }
  
  this.body = Bodies.rectangle(x,y,800,10,options);    
  
  this.w = 800;
  this.h = 10;

  World.add(world,this.body);
}

display(){
    
    var position = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(position.x,position.y,this.w,this.h);

}

}