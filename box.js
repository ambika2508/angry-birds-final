class Box extends BaseClass{
    //Constructor is a special function which consists of properties of the object 
    // We use keyword "this" to refer to the properties of objects created using this class
 constructor (x,y,w,h){
     super(x,y,w,h)

 this.image = loadImage("sprites/wood1.png")
 }
  
}