class Bob{
    constructor(x, y) {
      var options = {
          isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }

      this.body = Bodies.circle(x,y,70, options);


    World.add(world, this.body);
}


    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      fill("blue");
      push();
      translate(pos.x, pos.y);
      circle(this.body, 0, 0);
      pop();

    }
}

