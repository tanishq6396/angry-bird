class BaseClass{
    constructor(x, y, width, height, angle) {
      class Bird extends BaseClass {
        constructor(x,y){
          super(x,y,50,50);
          this.image = loadImage("sprites/bird.png");
        }
        display() {
          //this.body.position.x = mouseX;
          //this.body.position.y = mouseY;
          super.display();
        }
      }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}