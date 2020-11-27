class BaseClass {
    //Constructor is a special function which consists of properties of the object 
    // We use keyword "this" to refer to the properties of objects created using this class
 constructor (x,y,w,h,a){
     var options =  {
        restitution : 0.7, friction : 1
     }
this.body = B.rectangle(x,y,w,h,options)
this.w = w
this.h = h
 W.add(world,this.body)

 this.image = loadImage("sprites/base.png")
 }
  display(){
      push ()
      angleMode(RADIANS)
      translate (this.body.position.x, this.body.position.y)
      rotate (this.body.angle)
      imageMode(CENTER)
      image(this.image,0 ,0, this.w, this.h)
      pop ()
  }
}