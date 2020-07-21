//moon lander project - July 2020 - Aaron Spring - with borrowed code from
//P5js.org reference page. Thank you!
 //short term goal - learn to use various shapes/colors and syntax for p5 JS library.
 //design a moon lander based on user input
 //long term goal - take created model and put into moon lander game using JS.
  //also try to recreate/copy parts of ship design using CSS,
  //learn similarities and advantages to both for animation and drawing functions.



function setup() {
  createCanvas(400, 300);
  
  // set radio buttons to the right of the canvas.
  // grouped by ship part
  noses = createRadio();
  noses.option("Speed");
  noses.option('Data');
  noses.option('Habitat');
  noses.style('width', '70px');
  noses.position(410, 100)

  bodies = createRadio();
  bodies.option('Explore');
  bodies.option('Hauler');
  bodies.option('Fighter');
  bodies.style('width', '80px');
  bodies.position(410, 200);
    //for adding text to body shape...
    //textAlign(CENTER);
    //textSize(20);
    // ...
  
  tails = createRadio();
  tails.option('Light Weight');
  tails.option('Heavy Duty');
  tails.option('Long Range');
  tails.style('width', '110px');
  tails.position(410, 300);
  
}

  

function draw() {
  background(0);
  noStroke();

  
 // maybe add animated stars to breakup black bkgrnd
 // either twinkling or shooting/flying 
  
  
  //gets string values from radio buttons  
  let noseopt = noses.value();
  let bodyopt = bodies.value();
  let tailopt = tails.value();

//start of ship drawing
  
  //nose draw options. meets body at y100 
  if (noseopt === "Speed") {
    fill(255, 77, 77);
    triangle(200, 20, 220, 100, 180, 100);
    stroke(0, 204, 255);
    strokeWeight(2);
    line(211.2, 91, 209.5, 83);
    line(209, 79, 207, 70);
    line(206.2, 66, 204.5, 57);  
    
    noStroke();
    
      //pass shape to game?...
      //nosepic = 1
  }
  
  if (noseopt === "Data") {
    stroke(255, 204, 0);
    strokeWeight(5);
    line(200, 100, 200, 40);
    line(200, 55, 215, 55);
    line(215, 55, 215, 25);
    strokeWeight(3);
    line(200, 80, 185, 80);
    line(185, 80, 185, 70);
    stroke("gray");
 // insert arc and tiny triangle for sat dish on left arm   
    arc(185, 71, 9, 2, 1.8, 1.7, PIE);
    triangle(182, 67, 183, 70, 185, 68);
    stroke(255, 51, 0);
    circle(200, 40, 3, 3);
    
    noStroke();
    
       //pass shape to game?...
      //nosepic = 2
    
  }
  if (noseopt === "Habitat") {
    fill(0, 102, 153);
    rect(192, 70, 15, 30);
    quad(187, 70, 211, 70, 223, 50, 174, 50);
    quad(223, 50, 174, 50, 193, 20, 205, 20);
    fill(179, 0, 179);
    ellipse(200, 82, 70, 6);
    fill("red");
    circle(179, 50, 5, 5);
    fill("green");
    circle(218, 50, 5, 5);
    fill("yellow");
    circle(200, 44, 5, 5);
    
    noStroke();
    
      //pass shape to game?...
      //nosepic = 3
  }

  //body draw options 
  //meets nose at y100. meets tail at y190
  
  if (bodyopt === "Explore") {
    fill(255, 133, 51);
    rect(160, 150, 40, 10);
    rect(200, 150, 40, 10);
    ellipse(240, 155, 8, 30);
    ellipse(160, 155, 8, 30);
    arc(200, 190, 40, 180, -3.7, 0.55, PIE);
    fill("black")
    circle(200, 130, 8, 8);
    circle(200, 140, 8, 8);
    circle(200, 150, 8, 8);
  }
  if (bodyopt === "Hauler") {
    fill(204, 163, 0);
    rect(170, 100, 60, 30, 5);
    rect(195, 130, 10, 40);
    rect(170, 170, 60, 20, 5);
    fill(134, 45, 134);
    quad(195, 170, 195, 130, 172, 130, 105, 170);
    quad(205, 170, 205, 130, 228, 130, 290, 170);
    triangle(200, 105, 190, 125, 210, 125);
  }
  
  if (bodyopt === "Fighter") {
    fill("teal");
    triangle(200, 100, 150, 150, 250, 150);
    quad(150, 150, 250, 150, 224, 190, 180, 190); 
     
           //tried to use arc to make inverted wing...
           //couldn't get the scale right.
     // fill("red"); 
     // arc(248, 150, 80, 100, TWO_PI - QUARTER_PI, HALF_PI +    QUARTER_PI, ); 
    
    fill(153, 0, 51);
    quad(224, 190, 250, 150, 270, 150, 245, 190);
    triangle(250, 150, 270, 150, 270, 120);
    
    quad(150, 150, 180, 190, 160, 190, 130, 150);
    triangle(150, 150, 130, 150, 130, 120);
    
    fill("orange");
    circle(200, 150, 5, 5);
    circle(190, 160, 5, 5);
    circle(210, 160, 5, 5);
  }

  //tail draw options 
  //meets body at y200
  
  if (tailopt === "Light Weight") {
    fill(255, 255, 26);
    triangle(160, 230, 200, 200, 200, 190);
    triangle(240, 230, 200, 200, 200, 190);
  }
  
  if (tailopt === "Heavy Duty") {
    fill("purple");
    quad(180, 190, 220, 190, 230, 210, 170, 210); 
    
    stroke(128, 0, 128);
    strokeWeight(4);
    line(200, 200, 250, 200);
    line(250, 200, 250, 230);
    line(240, 230, 260, 230);
    
    line(200, 200, 150, 200);
    line(150, 200, 150, 230);
    line(140, 230, 160, 230);
    noStroke();
    
  }
  
  if (tailopt === "Long Range") {
    fill(71, 209, 71);
    circle(175, 200, 20, 25);
    circle(225, 200, 20, 25);
    circle(152, 200, 20, 25);
    circle(248, 200, 20, 25);
    triangle(200, 180, 185, 210, 215, 210);
    
    stroke(41, 163, 41);
    strokeWeight(5);
    line(150, 200, 250, 200);
    
    noStroke();
  }
//end of ship drawing
  
  
//flame animation. change alpha at random intervals using JS. can't use key frames on JS objects like CSS?  

  if (tailopt) {
    
  var flameOne = color("blue");
  var flameTwo = color("blue");
  var flameThree = color("cyan");
//borrowed from references page. changed ms values to
//animate flames. learned color strings can be stored as var.
    //would also like to use as transition on 
    //whole ship. jump/teleport to lander game...
    
// use setAlpha to animate.     sin value is pos and neg?    
  flameOne.setAlpha(128 + 128 * sin(millis() / 200));
  fill(flameOne); 
  triangle(180, 260, 190, 210, 200, 210);  
    
  flameTwo.setAlpha(128 + 128 * sin(millis() / 320));
  fill(flameTwo);  
  triangle(220, 255, 210, 210, 200, 210);
    
  flameThree.setAlpha(128 + 128 * sin(millis() / 390));
  fill(flameThree);  
  triangle(180, 265, 200, 210, 220, 264);  
    
    
  };
//end of flame animation


}
//end of draw function
