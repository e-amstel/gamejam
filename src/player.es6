//de speler

export default class Player {
    constructor(x,y){
        this.props = {
            x: 100,
            y: 200,
            width: 10,
            height: 10,    
            vel: { //speed
                x: 10,
                y: 0
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
        // window.addEventListener("keyup", (e) => {
        //     this.props.move = 0;
        //  //   this.move();
        //  //   console.log(this.props.move);
        // });    
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

    move(){

        this.props.vel.y += this.props.gravity;
        this.props.y += this.props.vel.y;

        
        if(this.props.y > 175.0)
        {
            this.props.y = 175.0;
            this.props.vel.y = 0.0;
           // onGround = true;
        }
        
        if (this.props.move == 0){
            this.props.vel.y += this.props.gravity;   
            if(this.props.vel.y < -6.0)
                this.props.vel.y = -6.0;                     
        }
        //als w dan y +speed, als s dan -speed
        // if (this.props.move == 1){
        //     this.props.y += this.props.vel.y;
        //     console.log("down");
        // }     
        if (this.props.move == 2){
            this.props.vel.y = -20;   
            console.log("up");  
            console.log(this.props.y);    
        }   

             




    }
    
}  


