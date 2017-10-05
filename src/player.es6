//de speler

export default class Player {
    constructor(x,y){
        this.props = {
            x: x,
            y: y-10,
            width: 10,
            height: 10,    
            vel: { //speed
                x: 10,
                y: 10
            },
            gravity: 0.5,
            color:this.randomColor(),
            move: 0
        };
        window.addEventListener("keydown", (e) => {
            if (e.keyCode == 83){ //s key
                this.props.move = 1;
                this.move();
            }
            if (e.keyCode == 87) { //w key
                this.props.move = 2;
                this.move();
            }

        });    
        window.addEventListener("keyup", (e) => {
            this.props.move = 0;
            this.move();
            console.log(this.props.move);
        });    
    } 
    randomColor() {
        return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
    }
    draw(context){
     //   context.clearRect(this.props.x,this.props.y,this.props.width,this.props.height);        
        context.fillStyle = this.props.color;
        context.fillRect(
            this.props.x, 
            this.props.y, 
            this.props.width, 
            this.props.height);
    }

    move(time){
        if (this.props.move == 0){
            this.props.y = 210;
        }
        //als w dan y +speed, als s dan -speed
        if (this.props.move == 1){
            this.props.y += this.props.vel.y;
            console.log("down");
        }     
        if (this.props.move == 2){
            this.props.y-= this.props.vel.y;      
            console.log("up");        
        }   
        this.props.y += this.props.vel.y * time;      // Apply vertical velocity to X position
        velocityY += gravity * time; 
        
    }
    
}  


