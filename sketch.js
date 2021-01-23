/* types of data - 
     numbers
     strings
     boolean
     objects
     null
     undefined
API stands for Application Programming Interface
API is a service which helps us in interactions between software. It is used to access data, server software or other applications.
For example -  weather API, time API

    Types of data structures(storage) --
     variable
     array - is a data structure used to hold multiple values at a time in the memory. It takes continuous memory locations for storage
            A array consists of elements which are accessed using their index values. It is denoted using [].
     JSON - Java Script Object Notation. It stores values in key value pair form. 
     

var a = [10,32,6,true,null,100.2,"Ambika",[19,25]]
a.push("Dipneet ma'am")
a.pop()
console.log(a)*/
var a = {
  
}
const E = Matter.Engine;
const B = Matter.Bodies;
const W = Matter.World;
const C = Matter.Constraint;
var engine, world;
var box1, ground, bird, box2, box3, box4, box5, pig1, pig2, log1, log2, log3, log4, counter = 5, button;
var bg,bg2, platform, s = 0;
var chain;
var gamestate = "onsling";


function setup() {
  createCanvas(1200,400);
  engine = E.create();
  world = engine.world; 
  //new keyword allocates memory for a new object.
  // whenever class name is used, it basically refers to constructor. Constructor is called to generate objects.
  ground = new Ground(800,390,1600,10)
  platform = new Ground(200,320,300,140)

  box1 = new Box(900,360,70,70);
  box2 = new Box(1100,360,70,70);
  box3 = new Box(900,257,70,70)
  box4 = new Box(1100, 257, 70,70)
  box5 = new Box(1000,205,70,70)


  pig1 = new Pig(1000,370)
  pig2 = new Pig(1000,285)

  // 1 PI = 180 degree (PI in radians)
  log1 = new Log(1000,315,15,300,PI/2)
  log2 = new Log(1000,225,15,300,PI/2)
  log3 = new Log(970,160,15,150,PI/6)
  log4 = new Log(1030,160,15,150, -PI/6)

  bird = new Bird(200,40)

  chain = new SlingShot(bird.body, {x: 200, y:40})

  button = createSprite(10,10,20,20)

}

function preload(){
  getTime()
}

function draw() {
 if(bg2)
  background(bg2);  
  drawSprites();
  E.update(engine);
  // functions in classes are called using their object name
  ground.display()
  platform.display()

  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()

  pig1.display()
  pig1.score()
  pig2.display()
  pig2.score()

  log1.display()
  log2.display()
  log3.display()
  log4.display()

  bird.display()

  chain.display()

  textSize(25)
  text("Score - " + s, 1050,50)
text("Attempts left - " + counter, 1000,20)
  if(counter === 0){
    textSize(70)
    text("Game over!", 400, 90)
    gamestate = "launched"

  }
  if(mousePressedOver(button)){
      text("okay", 10, 50)
  }
}
//function overriding means re-writing a function which is pre-defined so as to make it behave the way you want.
function mouseDragged(){
if(gamestate === "onsling"){
  Matter.Body.setPosition (bird.body, {x:mouseX, y:mouseY})
  console.log("md")
}
}

function mouseReleased(){
  chain.fly()
  gamestate = "launched"
  console.log("mr")
}

function keyPressed(){
  if(keyCode === 32 && counter > 0){
    chain.attach(bird.body)
    Matter.Body.setPosition(bird.body, {x:200, y:40})
    bird.path = []
    gamestate = "onsling"
    counter--
    console.log("kp")
    
  } 
}
/*
fetch() - it sends a request to the API service and collects the response.
Making an API call involves some network requests that take a little time.
However, Java script executes every instruction synchronously, that means it executes one line after the other.
In such a scenario, it will not wait for the fetch API call to be completed before moving to the next line
but, we want it to wait so we do this by adding "AWAIT" command before fetch. It tells the system/computer to wait for the API call
to be completed before moving to the next lines.
A function which waits for some lines to be completed before jumping to the next line are known as Asyncronous functions.
*/
async function getTime(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var r = await response.json()
    var dt = r.datetime
    var h = dt.slice(11,13)
    if (h>=06 && h<=17){
        bg = "sprites/bg.png"
    } else{
      bg = "sprites/bg2.jpg"
    }
    bg2 = loadImage(bg)
    console.log("api")
}
