const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var name1
let engine;
let world;
var question;

function preload(){
  ballimage=loadImage("ball.png")
}
function setup()
{
  createCanvas(900,720);

  engine =  Engine.create()
  world = engine.world;

  title = createElement('h1')
  title.position(450,50)
  title.html("8 Ball")

  tagline = createElement("h3")
  tagline.html("Ask Me anything")
  tagline.position(380,510)

  username=createInput("").attribute("placeholder", "Enter your question");
  username.position(280,570)
  username.class("placeholder")


  button=createButton("shake")
  button.position(500,650)

  //ball = createSprite(450,350)
  //ball.addImage(ballimage)

  rectangle1 = Bodies.rectangle(450,350,400,400,{restitution:1.7,isStatic:true})
  World.add(world,rectangle1)
  ground = Bodies.rectangle(450,700,400,30,{isStatic:true})
  World.add(world,ground)
  ground1 = Bodies.rectangle(450,250,400,30,{isStatic:true})
  World.add(world,ground1)

}


function draw() 
{
  background("white");
  Engine.update(engine)
  button.mousePressed(()=>{
  question=username.value()
  display1 = createElement('h2')
  display1.position(400,150)
  display1.style('color',"black")
  display1.html("Question:"+question)
  display = createElement('h2')
  display.position(400,450)
  display.style('color',"white")
  var rand = Math.round(random(1,4))
  switch(rand){
    case 1: 
   display.html("yes you are")
    break;
    case 2: display.html("doing good")
    break;
    case 3:
      display.html("wow")
    break;
    case 4:display.html("you can't")
    break;
  }
  Matter.Body.setStatic(rectangle1,false)
  console.log("I qm here")
  button.hide()
  username.hide()
  tagline.hide()
  button1=createButton("reload")
  button1.position(500,700)
  button1.mousePressed(()=>{
    location.reload()
  })
  })
  imageMode(CENTER)
  image(ballimage,rectangle1.position.x,rectangle1.position.y,400,400)
  /*rectMode(CENTER)
  fill("cyan")
  rect(ground1.position.x,ground1.position.y,400,20)*/
  drawSprites()
}

