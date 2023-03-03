var mainBoard = document.getElementById('mainBoard'); // variable to access mainBoard class
var marginMap = 11; //this is the margin in pixels, for the position of the cells, because there are walls at the top left corner so the cells cant start there
var sizeX = 22;  // X of MapArray , how many cells will be there on every row
var sizeY = 22; // Y of MapArray , how many cells will be there on every column
var cellSize = 27; //size of the cells in pixels
var MapArray = [];  // array of cells, for the movement and position of the pacman charachter and the ghosts
var direction = "right" //direction of pacman when a key is pressed



//creating class pacman for our game charachter
class Pacman { 
  constructor( x,  y){
  this.x=x; this.y=y; //oacman has a x and y of the MapArray
}
//function that takes the argument direction(left, right, top, down), checks wether its in the boundaries of MapArray, deletes pacman and draws it on the new location
movement(direction){
  switch(direction){
    case "left" :
      if(this.y - 1 >= 0){
        MapArray[this.x][this.y].style.removeProperty("background");
        this.y--;
        this.display(this.x,this.y);
      }
      break;
    case "up" :
      if(this.x - 1 >= 0){
        MapArray[this.x][this.y].style.removeProperty("background");
        this.x--;
        this.display(this.x,this.y);
      }
      break;
    case "right" :
      if(this.y + 1 < sizeX){
        MapArray[this.x][this.y].style.removeProperty("background");
        this.y++;
        this.display(this.x,this.y);
      }
      break;
    case "down" :
      if(this.x + 1 < sizeY){
        MapArray[this.x][this.y].style.removeProperty("background");
        this.x++;
        this.display(this.x,this.y);
      }
      break;
  }
}
 // function that draws the pacman to its new location
  display(newX, newY) {
    MapArray[newX][newY].style.backgroundImage = "url('SpriteSheet.v1.png')";
    MapArray[newX][newY].style.backgroundPosition = "-912px -2px";
  
    this.x = newX;
    this.y = newY;
  }
}

// creating two dimensional array MapArray
for (let x = 0; x < sizeY; x++) {
  MapArray.push([]); //array gets two dimensions
    for (let y = 0; y < sizeX; y++) {
        MapArray[x][y] = document.createElement("div"); //creating a cell
        
        MapArray[x][y].style.height = `${cellSize}px`; //height of the cell
        MapArray[x][y].style.width = `${cellSize}px`; //widht of the cell
        MapArray[x][y].style.marginLeft = `${(y*cellSize)+marginMap}px` // y of a cell times the cell size we want plus the margin(because of the walls), so that cell 2,3... are next to cell 1
        MapArray[x][y].style.marginTop = `${(x*cellSize)+marginMap-3}px`  //x of a cell times the cell size we want plus the margin(because of the walls) minus 5 because the map requires it,it will be under the desired height, so that cell 2,3... are under cell 1
        MapArray[x][y].style.borderStyle = "solid";  // borderis solid
        MapArray[x][y].style.borderWidth = "1px";  //border's widht 1px
        MapArray[x][y].style.padding = "0px";  //nopadding
        MapArray[x][y].style.position = "absolute"; //position is absolute
        MapArray[x][y].style.borderColor = "red";  //color of the border is red so that we can visualise them for now 

        mainBoard.appendChild(MapArray[x][y]);  // creating the div
    }
}
//creating pacman variable of the class Pacman
 var pacman = new Pacman(1,1);
 
// eventlistener, so that when a key is pressed, that key is now the new direction
document.addEventListener("keydown", (event) => {

  var key = event.code;
  switch(key){
    case "ArrowUp":
      direction ="up";
      break;
      case "ArrowDown":
      direction ="down";
      break;
      case "ArrowLeft":
      direction ="left";
      break;
      case "ArrowRight":
      direction ="right";
      break;
        
  }
});
//moves the character every one second by executing the movement function with the argument direction(in which direction the pacman will move)
setInterval(function() {
  pacman.movement(direction);
}, 1000);