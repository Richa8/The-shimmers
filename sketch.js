const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var boxes=[];
var ground;
var i=0;
function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;  
    
    ground = Bodies.rectangle(600,780,1200,10,{isStatic:true});
    World.add(world,ground)
}

function mouseDragged(){
    console.log("hello")
    boxes[i]=new Box(mouseX,mouseY,random(10,40),random(10,40));
    i++;
}

function draw(){
    background(0);
    Engine.update(engine);
    for(var j=0;j<boxes.length;j++){
        boxes[j].show();
    }
    rectMode(CENTER)
    rect(ground.position.x,ground.position.y,1200,10);
}