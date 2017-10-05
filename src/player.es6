//de speler

export default class Player {
    constructor(x,y){
        this.props = {
            x: x,
            y: y,
            width: 10,
            height: 10,            
            vel: { //speed
                x: 10,
                y: 10
            },
            color:this.randomColor()
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

