var bird;
var pillars = [];
function setup(){
  createCanvas(400,600);
  bird=new Bird();
  pillars.push(new Pillar());

}
function draw(){
  background(0);
  bird.show();
  bird.update();

  for(var i = 0; i < pillars.length; i++){
    pillars[i].show();
    pillars[i].update();
  }
 if(frameCount % 60 == 0 ){
  pillars.push(new Pillar());
 }

}
function keyPressed(){
  if(key == ' '){
    //console.log("SPACE");
    bird.up();
  }
}