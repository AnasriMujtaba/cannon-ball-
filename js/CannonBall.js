class CannonBall {
  constructor(x, y) {
    var options = {
     //add resistution 
     restitution : 0.8,
      isStatic: true,
    };
//add circle to the body
this.body=Bodies.circle(x,y,20,options);
//loadImage
this.image=loadImage("assets/cannonball.png");
    World.add(world, this.body);
  }

  //add shoot function 
shoot(){
var velocity=p5.Vector.fromAngle(cannon.angle);
velocity.mult(20);
  Matter.Body.setStatic(this.body,false);
  Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
}

  display() {
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
//call the image function
image(this.image,0,0,65,65);
    pop();

    }
  }

