export default class Obstacle {
    constructor(x,y){
        this.props = {
            x: x,
            y: y,
            width: 20,
            height: 20,            
            vel: { //speed
                x: 10,
            },
            color:this.randomColor(),
        };
    } 
    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    draw(context){
        context.fillStyle = this.props.color;
        context.fillRect(this.props.x, this.props.y, this.props.width, this.props.height);
        context.fill();
    }
}
