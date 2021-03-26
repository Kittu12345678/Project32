class Block {
    constructor(x, y, c) {
      var options = {
          'restitution':0.4,
          'friction':1.0
          
      }
      this.body = Bodies.rectangle(x, y, 20, 40, options);
      this.width = 20;
      this.height = 40;
       this.c =c;
       this.Visibility = 255;
      
    
      
      World.add(world, this.body);
    }

   



    display(){
      
      console.log(this.body.speed)

      if(this.body.speed < 3){
        var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(2);
      fill(this.c);
      rect(0, 0, this.width, this.height);
      pop();
      }
      else{
          World.remove(world, this.body);
          push();
          this.Visibility = this.Visibility-5;
          tint(255, this.Visibility);
          pop();



    }
  };
}  