class Bird extends BaseClass {
    //Constructor is a special function which consists of properties of the object 
    // We use keyword "this" to refer to the properties of objects created using this class
 constructor (x,y){
    super(x,y,50,50)
 this.image = loadImage("sprites/bird.png")
 this.picture = loadImage("sprites/smoke.png")
 this.path = []

 }
  display(){
      var pos = this.body.position
      super.display()
      if(pos.x>250 && this.body.velocity.x > 10){
        var position = [pos.x,pos.y]
        this.path.push(position)
      }
     
      for(var i = 0;i<this.path.length; i++){
          image(this.picture, this.path[i][0],this.path[i][1])
      }
       
  }
}