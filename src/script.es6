import Line from "./line.cs6";


class Spel {
    constructor(){

    this.canvas = document.querySelector("#myCanvas");
    this.context = this.canvas.getContext("2d");

    this.player = new Player(200,200);
    this.newPlayer();
    
    this.obstacle = new Obstacle();
    this.newObstacle();
    }
  
  
    newPlayer(){
           // console.log("de bal");  
            this.player.draw(this.context);
        }    
}    

var spel = new Spel();

