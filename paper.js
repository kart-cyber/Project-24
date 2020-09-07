class paper{
    constructor(x, y) {
        var paper_options = {
            restitution: 0.3,
            density: 1.2,
            friction: 0.5,
            isStatic: false
    
        }
        this.body = Bodies.circle(x, y, 40, paper_options);
        
        World.add(world, this.body);
      }
      display(){ 
        ellipseMode(CENTER);
        fill("red");
        ellipse(this.body.position.x, this.body.position.y,20,20);
      }
}