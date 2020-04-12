let rocket;
let population;
let lifespan = 400;
let genP;
let target;
let velMag = 0.5;
let genCount = 1;
let ob;
let ob1;
let ob2;
let countP;
let obstacles = [];
let startxy, endxy;
let mouseInTarget = false;
let mouseIsDragged = false;
let speed = 1 ;
let pauseButton;

function setup() {
  createCanvas(640, 480);
  //ob = new Obstacle(200, 250, 250, 25);
  ob1 = new Obstacle(0, 250, 100, 25);
  ob2 = new Obstacle(250, 250, width-250, 25);
  target = createVector(width/2, 100);
  rocket = new Rocket();
  population = new Population();
  genP = createP(" ");
  countP = createP(" ");
  pauseButton = createSlider(0, 1);

	//frameRate(120);
}

function draw() {
  //population.run();
  //mouseInTarget = false;
  //for (let i = 0; i < speed; i++) {
    background(200);
  
  if (pauseButton.value == 0) {
    noLoop();
  }


    if (obstacles) {
	for (let i = 0; i < obstacles.length; i++) {
		obstacles[i].show();
	}
  }
  //target = createVector(mouseX, mouseY);


  genP.html("Generation " + genCount);
  countP.html("Frames left: " + (lifespan - count));

  if (!rocket.crashed) {
	  rocket.update();
	  rocket.show();  	
  }


  if (count < lifespan) {
    population.run();
	//population.separate(population.rockets);
    count++;

  } else {
  	//population = new Population();
  	population.evaluate();
  	population.selection();

  	count = 0;
  	genCount++;
  }



  fill(10, 250, 50);
  ellipse(target.x, target.y, 20, 20);


    // if (mouseY > target.y && mouseY < target.y + 20 &&
    //   mouseX > target.x && mouseX < target.x + 20 &&
    //   mouseIsDragged) {
    //     target.x = mouseX;
    //     target.y = mouseY;
    //     console.log("DRAGGING")
   // mouseInTarget = true; 
    //console.log(mouseInTarget)
  
  

//console.log(mouseInTarget)



}


function mousePressed() {
  startxy = createVector(mouseX, mouseY);


}

function mouseDragged() {
  mouseIsDragged = true;

}

function mouseReleased() {
  //if (!mouseInTarget) {

    endxy = createVector(mouseX, mouseY);


	  let x = startxy.x;
	  let y = startxy.y;
	  let w = endxy.x - startxy.x;
    let h = endxy.y - startxy.y;

    if (w < 0) {
      x = endxy.x;
      y = endxy.y;
      let w = -(endxy.x - startxy.x);
      let h = -(endxy.y - startxy.y);
    }

    
    if (h < 0) {
      x = endxy.x;
      y = endxy.y;
      let w = -(endxy.x - startxy.x);
      let h = -(endxy.y - startxy.y);
    }

    obstacles.push(new Obstacle(x, y, w, h));  
  

    //mouseInTarget = false
  //}

} 



















