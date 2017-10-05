class Line{
  constructor(){
    this.props = {
      width: window.innerWidth,
      height: 5,
      x: 0,
      y: 300
    }
    this.canvas = document.querySelector("#myCanvas");
    this.context = this.canvas.getContext("2d");
  }
  draw(context) {
    this.context.fillRect(
            this.props.x,
            this.props.y,
            this.props.width,
            this.props.height
        )
  }
}

const line = new Line();
line.draw();
