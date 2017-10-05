export default class Line{
    constructor(){
      this.props = {
        width: window.innerWidth,
        height: 5,
        x: 0,
        y: 300
      }
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
