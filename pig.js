class Pig extends BaseClass{
    //Constructor is a special function which consists of properties of the object 
    // We use keyword "this" to refer to the properties of objects created using this class
 constructor (x,y){
     super(x,y,50,50)
    this.visibility = 255
 this.image = loadImage("sprites/enemy.png")
 }

 display(){
   
  //console.log(this.body.speed)   
   if(this.body.speed < 2.5){
    super.display()
   }else{
    W.remove(world,this.body)
    push()
    this.visibility -= 5
    tint(255,this.visibility)
    image(this.image, this.body.position.x, this.body.position.y, 50, 50)
    pop()
   }
 }

 score(){
     if(this.visibility < 0 && this.visibility >= -500){
        s++
     }
 }
}