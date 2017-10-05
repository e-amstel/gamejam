//het main script
import Player from "./player.es6";
import Obstacle from "./obstacle.es6";
import Line from "./line.es6";

class Spel {
    constructor(){

    this.player = new Player(200,200);        
        
    this.canvas = document.querySelector("#myCanvas");
    this.context = this.canvas.getContext("2d");

    this.refresh();
    
    }
  

    newPlayer(){
        this.player.move();
        this.player.draw(this.context);
    }    
    newObstacle(){
        this.obstacle.draw(this.context);
    }    
    newLine(){
        this.line.draw(this.context);
    }   

    refresh(){
        this.obstacle = new Obstacle(100,100);
        this.newObstacle();
    
        this.line = new Line();
        this.newLine();
        
        document.onkeydown = () => {
        this.newPlayer();
        };
    } 


}    

var spel = new Spel();

