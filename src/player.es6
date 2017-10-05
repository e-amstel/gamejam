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
            color:this.randomColor(),
            move: 0
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
    arrow(){
        if (e.keyCode == 39){
            this.props.move(-1);
        }
        if (e.keyCode == 87) { //w key
            this.props.move(1);
        }
    }

    move(){
        arrow();
        //als w dan y +speed, als s dan -speed
        if (move == -1){
            this.props.y -= this.props.vel.y;
        }     
        if (move == 1){
            this.props.y += this.props.vel.y;              
        }   
    }
    
}  


