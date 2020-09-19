const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;
const Engine = Matter.Engine;
var engine, world;
var ground, body1;
var divisionHeight = 300;
var wall1, wall2, wall3, wall4;
var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(240, 795, 480, 10);
  // creating divisions and plinkos
  for(var k = 0; k <= 480; k = k + 80) {
    divisions.push(new Division(k, (800-divisionHeight/2), 10, divisionHeight));
  }

  for (var index = 40; index <= 480; index = index+50) {
    plinkos.push(new Plinko(index, 75));
  }

  for(var j = 15; j <= 470; j = j + 50) {
    plinkos.push(new Plinko(j, 150));
  }

  for (let k = 40; k <= 480; k = k+50) {
    plinkos.push(new Plinko(k, 225));    
  }

  for (var l = 15; l <= 470; l = l+50) {
    plinkos.push(new Plinko(l, 300));
  }

  wall1 = Bodies.rectangle(0, 400, 5, 800, {isStatic: true});
  World.add(world, wall1);
  wall2 = Bodies.rectangle(480, 400, 5, 800, {isStatic: true});
  World.add(world, wall2);
  wall3 = Bodies.rectangle(240, 0, 480, 5, {isStatic: true});
  World.add(world, wall3);
  wall4 = Bodies.rectangle(240, 800, 480, 5, {isStatic: true});

}

function draw() {
  background(0);  
  Engine.update(engine);
  
  if(frameCount % 45 === 0) {
    particles.push(new Particle(random(240 - 100, 240 + 100), 10, 10));
  }
  
  // displaying everything
  ground.display();
  stroke("black");
  fill("black");
  rect(wall1.position.x, wall1.position.y, 5, 800);
  rect(wall2.position.x, wall2.position.y, 5, 800);
  rect(wall3.position.x, wall3.position.y, 480, 5);
  rect(wall4.position.x, wall4.position.y, 480, 5);
  for(var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  for(var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
  }

  for(var index = 0; index<plinkos.length; index++) {
    plinkos[index].display();
  }

  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display();    
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();    
  }

 for(var l = 0; l < particles.length; l++) {
  particles[l].display();
 }
  
  
}