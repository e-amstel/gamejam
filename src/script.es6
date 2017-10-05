//het main script
import Player from "./player.es6";

class Spel {
    constructor(){

    this.canvas = document.querySelector("#myCanvas");
    this.context = this.canvas.getContext("2d");

    this.player = new Player(200,200);
    this.newPlayer();
    
    }
  
  
    newPlayer(){
           // console.log("de bal");  
            this.player.draw(this.context);
        }    
}    

var spel = new Spel();

