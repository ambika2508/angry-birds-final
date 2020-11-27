class Ground {
    //Constructor is a special function which consists of properties of the object 
    // We use keyword "this" to refer to the properties of objects created using this class
 constructor (x,y,width,height){
     var options =  {
      isStatic : true
     }
this.body = B.rectangle(x,y,width,height,options)
this.w = width
this.h = height
 W.add(world,this.body)
 }
  display(){
    
      rectMode(CENTER)
      fill ("brown")
      rect(this.body.position.x, this.body.position.y, this.w, this.h)
      
  }
}