export default class Line{
    constructor(y){
      this.props = {
        width: 900,//window.innerWidth,
        height: 5,
        x: 0,
        y: y + 10,
        color: "#FF0000"
      }
    }
    draw(context) {
      context.fillStyle = this.props.color;
      context.fillRect(
              this.props.x,
              this.props.y,
              this.props.width,
              this.props.height
          );
          
    }
    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
  }