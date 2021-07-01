function setup(){
  createCanvas(windowWidth,windowHeight);
  this.radius = 100;
  this.p1 = createVector(0,0);
  this.p2 = createVector(0,0);
  this.p3 = createVector(0,0);
  this.n = 0;
}

function draw(){
  background('#FFF');
  for(var x = 0;x<=width;x += this.radius){
    for(var y=0;y<=height;y += this.radius){

      this.p1.x = this.radius * cos(0) + x;
      this.p1.y = this.radius * sin(0) + y;

      this.p2.x = this.radius * cos(1/3 * (PI * 2)) + x;
      this.p2.y = this.radius * sin(1/3 * (PI * 2)) + y;

      this.p3.x = this.radius * cos(2/3 * (PI * 2)) + x;
      this.p3.y = this.radius * sin(2/3 * (PI * 2)) + y;

      // triangle(this.p1.x,this.p1.y,this.p3.x,this.p3.y,this.p2.x,this.p2.y);
      push();
        // if(this.n % 2 !=0){
          // translate(x+this.radius-80,y-this.radius);
        // }else{
          translate(x,y);
          // translate(x+this.radius-10,y);
        // }
        
          translate(x+this.radius-10,y);
        stroke('#25CED1');
        strokeWeight(2);
        triangle(this.p1.x,this.p1.y,this.p2.x,this.p2.y,this.p3.x,this.p3.y);
        noFill();
        stroke('#FFEFD3');
        if(this.n % 2 == 0){
          // ellipse(0,0,this.radius,this.radius);
          // fill('#FF8A5B');
            // ellipse(x,y,10,10);
          // noFill();
        }
      pop();
    }
  this.n++;
  }
}
