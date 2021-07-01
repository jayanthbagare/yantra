function setup(){
  this.can = createCanvas(windowWidth,windowHeight);
  this.radius = 100;
  this.p1 = createVector(0,0);
  this.p2 = createVector(0,0);
  this.p3 = createVector(0,0);
  this.n = 0;
}

function draw(){
  let tx = 0;
  let ty = 0;
  this.n = 0;
  background('#FFF');
  for(var x=0;x<=width;x+=this.radius/2){
    for(var y=0;y<=height;y+=this.radius){
      tx = x;
      ty = y;

      if(this.n%2 ==0){
        tx = (tx - this.radius*2.9);
        ty = ty + this.radius/2;
      }


      this.p1.x = this.radius * cos(0) + tx;
      this.p1.y = this.radius * sin(0) + ty;

      this.p2.x = this.radius * cos(1/3 * (PI * 2)) + tx;
      this.p2.y = this.radius * sin(1/3 * (PI * 2)) + ty;

      this.p3.x = this.radius * cos(2/3 * (PI * 2)) + tx;
      this.p3.y = this.radius * sin(2/3 * (PI * 2)) + ty;

      cx = (this.p1.x+this.p2.x+this.p3.x)/3;
      cy = (this.p1.y+this.p2.y+this.p3.y)/3;

      push();
        stroke('#25CED1');
        strokeWeight(2);
        translate(tx,ty);
        triangle(this.p1.x,this.p1.y,this.p2.x,this.p2.y,this.p3.x,this.p3.y);
        fill('#AF3800');
        stroke('#00CFC1');
        ellipse(cx,cy,16,16);
        noFill();
        noStroke();
      pop();
    }
  this.n++;
  noLoop();
  saveCanvas(this.can,'yantra','jpg');
  }
}
