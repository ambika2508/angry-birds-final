class Log extends BaseClass{
    //Constructor is a special function which consists of properties of the object 
    // We use keyword "this" to refer to the properties of objects created using this class
 constructor (x,y,w,h,a){
     super(x,y,w,h,a)
Matter.Body.setAngle (this.body,a)
 
 this.image = loadImage("sprites/wood2.png")
 }
}