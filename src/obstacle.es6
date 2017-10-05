export default class Obstacle{
    constructor(){
      this.props = {
        x: 800,
        y: 20,
        v: 5
      }
      this.canvas = document.querySelector("#myCanvas")
      this.context = this.canvas.getContext("2d");
    }
    draw(context) {
      this.context.fillRect(
              this.props.x,
              this.props.y,
              20,
              20
      )
    }
    move(){
     // this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
      this.props.x -= this.props.v;
      this.draw();
      window.requestAnimationFrame(() => {
            this.move();
        });
    }
  }