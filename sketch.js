const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var Box1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    Box1=new Box(200,200,50,50);
   

   
}

function draw(){

    background("cyan");
    Engine.update(engine);
    
    Box1.display()
 
}