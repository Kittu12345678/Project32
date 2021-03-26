class Rock{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 20, options);
        this.width = 20;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke("white");
        fill("purple");
        ellipseMode(CENTER);
        ellipse( 0, 0, this.width, this.width);
        pop();

        
      }
}