const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var box1, ground1, ground2, backgroundImg;


function preload() {
  getTime();
}




function setup() {

  engine = Engine.create();
  world = engine.world;


  createCanvas(1600,600);
 // createSprite(400, 200, 50, 50);

  ground1 = new Base(800, 590, 1600, 20);
  ground2 = new Base(800, 445, 200, 30);
  ground3 = new Base(1400, 215, 100, 30);
  
  

  box1 = new Block(800 , 250, "green");
  box2 = new Block(790 , 290, "gray");
  box3 = new Block(810 , 290, "gray");
  box4 = new Block(780 , 330, "pink");
  box5 = new Block(800 , 330, "pink");
  box6 = new Block(820 , 330, "pink");
  box7 = new Block(770 , 370, "yellow");
  box8 = new Block(790 , 370, "yellow");
  box9 = new Block(810 , 370, "yellow");
  box10 = new Block(830 , 370, "yellow");
  box11 = new Block(760 , 435, "blue");
  box12 = new Block(780 , 435, "blue");
  box13 = new Block(800 , 435, "blue");
  box14 = new Block(820 , 435, "blue");
  box15 = new Block(840 , 435, "blue");
  box16 = new Block(1400 , 100, "red");
  box17 = new Block(1390 , 140, "orange");
  box18 = new Block(1410 , 140, "orange");
  box19 = new Block(1380 , 205, "white");
  box20 = new Block(1400 , 205, "white");
  box21 = new Block(1420 , 205, "white");

  bird = new Rock(100, 100);
  sling = new Shotter(bird.body, {x:200, y:400});

}

function draw() {
  if(backgroundImg){
    background(backgroundImg);
  }
  
  Engine.update(engine);
  ground1.display();
  ground2.display();
  ground3.display();
  bird.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  
  sling.display();
  
  

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Shotter.attach(bird.body);
  }
}

async function getTime(){
  var response = await fetch('https://worldtimeapi.org/api/timezone/asia/kolkata');
  console.log(response);
  var responseJSON = await response.json();
  console.log(responseJSON);
  var dateTime = responseJSON.datetime;
  console.log(dateTime);
  var hour = dateTime.slice(11, 13);
  console.log(hour);
  if(hour >= 6 && hour <= 18){
      bg = 'sprites/morrning.jpg';
  }
  else{
      bg = 'sprites/night.jpg';
  }

  backgroundImg = loadImage(bg);
}