class Ball  
{
  constructor(x, y, r) 
  {
    let options = {
        restitution: 0.95,
        frictionAir:0.01
      }
       
    
    this.body = Bodies.circle(x,y,r,options);
    this.r = r;
    World.add(world,this.body);
    
  }
  display(){
    push();
    ellipse(this.body.x,this.body.y,20,20);
    pop();

   


  }

 
   
}
