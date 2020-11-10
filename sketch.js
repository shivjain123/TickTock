/*
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Engine = Matter.Engine;
*/

var hr, mn, sec;

var scAngle;
var mnAngle;
var hrAngle;

function setup() {
  createCanvas(400, 400);
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);

  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sec = second();

  //angleMode(DEGREES);
  scAngle = map(sec, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  //Drawing second hands

    push();

    rotate(scAngle);
    stroke(255, 0, 0);
    strokeWeight(7);
    line(0, 0, 100, 0);
    //arc(50, 50, 80, 80, 0, PI + QUARTER_PI);

    pop();

    //Drawing minute hands

    push();

    rotate(mnAngle);
    stroke(0, 255, 0);
    strokeWeight(7);
    line(0, 0, 75, 0);
    //arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
    
    pop();

    //Drawing hour hands

    push();

    rotate(hrAngle);
    stroke(0, 0, 255);
    strokeWeight(7);
    line(0, 0, 50, 0);
    //arc(50, 50, 80, 80, 0, PI + QUARTER_PI);
    
    pop();

    stroke(255, 0, 255);
    point(0, 0);
    strokeWeight(10);
    noFill();

    stroke(255, 0, 0);
    arc(0, 0, 300, 300, 0, scAngle);

    stroke(0, 255, 0);
    arc(0, 0, 280, 280, 0, mnAngle);

    stroke(0, 0, 255);
    arc(0, 0, 260, 260, 0, hrAngle);

}