class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibilty = 255;
  }
  display(){
    //console.log(this.body.speed);
    if(this.body.speed < 3){
    super.display();
    }
    else{
    World.remove(world, this.body);
    push();
    this.visibilty = this.visibility -5;
    tint(255,this.visibility);
    image(this.image, this.position.x,this.position.y);
    pop();} 
  }
  

}