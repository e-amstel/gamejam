//het main script
import Player from "./player.es6";
import Obstacle from "./obstacle.es6";
import Line from "./line.es6";

class Spel {
    constructor(){

    this.canvas = document.querySelector("#myCanvas");
    this.context = this.canvas.getContext("2d");

    this.player = new Player(200,200);
    this.newPlayer();
    
    this.obstacle = new Obstacle();
    this.newObstacle();

    this.line = new Line();
    this.newLine();
    }
  
  
    newPlayer(){
        this.player.draw(this.context);
        }    
    newObstacle(){
        this.obstacle.draw(this.context);
    }    
    newLine(){
        this.line.draw(this.context);
    }    
}    

var spel = new Spel();

