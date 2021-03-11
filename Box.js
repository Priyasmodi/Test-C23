class Box{

    constructor(x,y,width,height)
    {
      var options = {
        'restitution':1.0,
      }  

      this.object = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height
      
      World.add(world,this.object);
    }
  display()
  {
     var pos = this.object.position;

     rectMode(CENTER) 
     fill(225);
     rect(pos.x,pos.y,this.width,this,height);
  }
}