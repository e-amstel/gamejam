//het main script
import Player from "./player.es6";
import Obstacle from "./obstacle.es6";
import Line from "./line.es6";

class Spel {
    constructor(){
        this.props = {
            floor: 200,
        }
    this.cubes = [];

        
    this.canvas = document.querySelector("#myCanvas");
    this.context = this.canvas.getContext("2d");
    
    this.player = new Player(100,this.props.floor+10);                
    
    this.newPlayer();
    
    this.refresh();
    
    }
  

    newPlayer(){
        this.player.move();
        this.player.draw(this.context);

    }    
    newObstacle(){
        this.cubes.push(new Obstacle());

        this.cubes.forEach(cube => {
            this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
            
            cube.move();
            cube.draw(this.context);
            
        })
       // this.obstacle.draw(this.context);
    }    
    newLine(){
        this.line = new Line(this.props.floor);
        
        this.line.draw(this.context);
    }   

    refresh(){
        this.context.clearRect(0,0,900,500);
        this.newObstacle();
    
        this.newLine();
        this.newPlayer();
        
        window.requestAnimationFrame(() => {
            this.refresh();
        })

         //filter dead dots
        this.cubes = this.cubes.filter(cube => {
            return !cube.props.isDead;
        })   ; 
    } 


}    

var spel = new Spel();

