class Slingshot{
  constructor(bodyA,pointB){
   var options = {
    bodyA: bodyA,
    pointB: pointB,
    stiffness: 0.04,
    lenght:3
   }
  
   this.sling = Constraint.create(options);
   this.pointB=pointB;
   World.add(world, this.sling);

  }

  attach(body){
    this.sling.bodyA = body;
 }
  fly(){
    this.sling.bodyA =null;  
 }

display(){

    if(this.sling.bodyA){
    var pointA = this.sling.bodyA.position;
    var pointB = this.pointB;
    
    strokeWeight(4);
    stroke("turquoise");
    line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
} 

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }

function mouseReleased(){
    slingShot.fly();
  }