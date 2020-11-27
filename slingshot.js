class SlingShot {
  constructor(b1,p2){
  var n = {
    bodyA: b1, 
    pointB: p2, 
    stiffness: 0.05,
    length: 10
  }
this.p = p2
this.constraint =  C.create(n) 
W.add(world,this.constraint)   
this.s1 = loadImage("sprites/sling1.png")
this.s2 = loadImage("sprites/sling2.png")
this.s3 = loadImage("sprites/sling3.png")
}
   display(){
    image(this.s1,200,54)
    var posB = this.p;
    strokeWeight(5)
    stroke(48,22,8)
    if(this.constraint.bodyA !== null){
    var posA = this.constraint.bodyA.position;
    line (posA.x-25, posA.y, posB.x+30, posB.y+40)
    line (posA.x-25, posA.y, posB.x-22, posB.y+40)
    image(this.s3,posA.x-30,posA.y-10, 15,30)
   }else{
     line(175, 50, posB.x + 30, posB.y + 50);
     line(175, 50, posB.x - 22, posB.y+30);        
     image(this.s3, 168, 35, 15, 30); 
   }

   image(this.s2, 170,54)
  }
   fly(){
   this.constraint.bodyA = null  
   }
   
   attach(b){
     this.constraint.bodyA = b
   }
}