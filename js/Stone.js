class Stone {
    constructor(x, y, r) {
      let options = {
        restitution: 0.8
      };
      this.x = x;
      this.y = y;
      
    this.r = r;
      this.body = Bodies.circle(x, y, r, options);
      World.add(world, this.body);
    }
  
    show() {
      var pos = this.body.position;
 
      push();
      ellipseMode(CENTER);
      ellipse(pos.x, pos.y, 20, 20);
      translate(pos.x, pos.y);
     
      fill("#000000")
      pop();
    }
  }
  