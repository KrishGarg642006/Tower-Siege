class Slingshot{
    constructor(){
    var options={
    bodyA:bodyA,
    pointB:pointB,
    stiffness:.5,
    length:1
    }    
    this.sling=Constraint.create(options);
    this.pointB=this.pointB
    World.add(world,this.sling)
    
 }
 fly()
 {
     this.sling.bodyA=null;
 }

    display()
    {
     if(this.sling.bodyA){
   var pointA=this.sling.bodyA.position;
    var pointB=this.pointB;
    strokeWeight(4)
    stroke("gold");
    line(pointA.x,pointB.x,pointA.y,pointB.y)
     }

    }
}