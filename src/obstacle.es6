export default class Obstacle{
    constructor(){
      this.props = {
        x: 800,
        y: 190,
        v: 5
      }
      this.canvas = document.querySelector("#myCanvas")
      this.context = this.canvas.getContext("2d");
    }
    draw(context) {
     // this.context.clearRect(0,0,this.canvas.width,this.canvas.height);  
      this.context.fillRect(
              this.props.x,
              this.props.y,
              20,
              20
      )
      console.log(this.props.x);
    }
    move(){
      //this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
     if (this.props.x < 0){
        this.props.isDead = true;
     }

      this.props.x -= this.props.v;
     // this.draw();
    //   window.requestAnimationFrame(() => {
    //         this.move();
    //     });
    }
  }