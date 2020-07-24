class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        
        this.offsetX = this.offsetX;
        this.offsetY = this.offsetY;
        var options = {
            bodyA: bodyA, 
            bodyB: bodyB, 

            pointB: {x:this.offsetX, y:this.offsetY },
            stiffness: 0.055,
            length: 10,
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    display(){

        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        strokeWeight(4);
        line(pointA.x, pointB.x, pointA.y, pointB.y);

    }

}