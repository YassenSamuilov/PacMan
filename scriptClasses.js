
//all coordinates where the pacman and the ghost can be, aka the route
var possibleCellsToMoveTo = [ 
  {x: 1, y: 1}, {x: 1, y: 2}, {x: 1, y: 3}, {x: 1, y: 4}, {x: 1, y: 5},
  {x: 1, y: 6}, {x: 1, y: 7}, {x: 1, y: 8}, {x: 1, y: 14}, {x: 1, y: 20},
  {x: 1, y: 21}, {x: 1, y: 22}, {x: 1, y: 23}, {x: 1, y: 26}, {x: 1, y: 27},
  {x: 1, y: 28}, {x: 1, y: 29}, {x: 2, y: 1}, {x: 3, y: 1}, {x: 4, y: 1},
  {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, {x: 8, y: 1}, {x: 9, y: 1},
  {x: 10, y: 1}, {x: 11, y: 1}, {x: 12, y: 1}, {x: 15, y: 1}, {x: 16, y: 1},
  {x: 17, y: 1}, {x: 18, y: 1}, {x: 19, y: 1}, {x: 20, y: 1}, {x: 21, y: 1},
  {x: 22, y: 1}, {x: 23, y: 1}, {x: 24, y: 1}, {x: 25, y: 1}, {x: 26, y: 1},
  {x: 6, y: 2}, {x: 6, y: 3}, {x: 6, y: 4}, {x: 6, y: 5}, {x: 6, y: 6},
  {x: 6, y: 7}, {x: 6, y: 8}, {x: 6, y: 9}, {x: 6, y: 10}, {x: 6, y: 11},
  {x: 6, y: 12}, {x: 6, y: 13}, {x: 6, y: 14}, {x: 6, y: 15}, {x: 6, y: 16},
  {x: 6, y: 17}, {x: 6, y: 18}, {x: 6, y: 19}, {x: 6, y: 20}, {x: 6, y: 21},
  {x: 6, y: 22}, {x: 6, y: 23}, {x: 6, y: 24}, {x: 6, y: 25}, {x: 6, y: 26},
  {x: 6, y: 29}, {x: 21, y: 2}, {x: 21, y: 3}, {x: 21, y: 4}, {x: 21, y: 5},
  { x: 21, y: 6 }, { x: 21, y: 7 }, { x: 21, y: 8 }, { x: 21, y: 9 }, { x: 21, y: 10 },
  { x: 21, y: 11 }, { x: 21, y: 12 }, { x: 21, y: 13 }, { x: 21, y: 14 }, { x: 21, y: 15 },
  { x: 21, y: 16 }, { x: 21, y: 17 }, { x: 21, y: 18 }, { x: 21, y: 19 }, { x: 21, y: 20 },
  { x: 21, y: 21 }, { x: 21, y: 22 }, { x: 21, y: 23 }, { x: 21, y: 24 }, { x: 21, y: 25 },
  { x: 21, y: 26 }, { x: 21, y: 29 }, { x: 2, y: 5 }, { x: 3, y: 5 }, { x: 4, y: 5 },
  { x: 5, y: 5 }, { x: 6, y: 5 }, { x: 7, y: 5 }, { x: 8, y: 5 }, { x: 9, y: 5 }, { x: 10, y: 5 },
  { x: 11, y: 5 }, { x: 12, y: 5 }, { x: 15, y: 5 }, { x: 16, y: 5 }, { x: 17, y: 5 },
  { x: 18, y: 5 }, { x: 19, y: 5 }, { x: 20, y: 5 }, { x: 21, y: 5 }, { x: 22, y: 5 },
  { x: 23, y: 5 }, { x: 24, y: 5 }, { x: 25, y: 5 }, { x: 26, y: 5 }, { x: 2, y: 14 },
  { x: 3, y: 14 }, { x: 4, y: 14 }, { x: 5, y: 14 }, { x: 6, y: 14 }, { x: 7, y: 14 },
  { x: 8, y: 14 }, { x: 9, y: 14 }, 
  { x: 18, y: 14 },
  { x: 19, y: 14 }, { x: 20, y: 14 }, { x: 21, y: 14 }, { x: 22, y: 14 }, { x: 23, y: 14 },
  { x: 24, y: 14 }, { x: 25, y: 14 }, { x: 26, y: 14 }, { x: 2, y: 20 }, { x: 3, y: 20 },
  { x: 4, y: 20 }, { x: 5, y: 20 },
  { x: 21, y: 6 }, { x: 6, y: 20 }, { x: 7, y: 20 }, { x: 8, y: 20 }, { x: 9, y: 20 },
  { x: 10, y: 20 }, { x: 11, y: 20 }, { x: 12, y: 20 }, { x: 15, y: 20 }, { x: 16, y: 20 },
  { x: 17, y: 20 }, { x: 18, y: 20 }, { x: 19, y: 20 }, { x: 20, y: 20 }, { x: 21, y: 20 },
  { x: 22, y: 20 }, { x: 23, y: 20 }, { x: 24, y: 20 }, { x: 25, y: 20 }, { x: 26, y: 20 },
  { x: 2, y: 29 }, { x: 3, y: 29 }, { x: 4, y: 29 }, { x: 5, y: 29 }, { x: 6, y: 29 },
  { x: 7, y: 29 }, { x: 8, y: 29 }, { x: 9, y: 29 }, { x: 10, y: 29 }, { x: 11, y: 29 },
  { x: 12, y: 29 }, { x: 15, y: 29 }, { x: 16, y: 29 }, { x: 17, y: 29 }, { x: 18, y: 29 },
  { x: 19, y: 29 }, { x: 20, y: 29 }, { x: 21, y: 29 }, { x: 22, y: 29 }, { x: 23, y: 29 },
  { x: 24, y: 29 }, { x: 25, y: 29 }, { x: 26, y: 29 }, { x: 13, y: 29 }, { x: 14, y: 29 },
  { x: 12, y: 28 }, { x: 12, y: 27 }, { x: 15, y: 28 }, { x: 15, y: 27 },
  {x: 21, y: 6}, {x: 9, y: 5}, {x: 9, y: 6}, {x: 9, y: 7}, {x: 9, y: 8},
{x: 9, y: 11}, {x: 9, y: 12}, {x: 9, y: 13}, {x: 9, y: 14}, {x: 9, y: 15},
{x: 9, y: 16}, {x: 9, y: 17}, {x: 9, y: 18}, {x: 9, y: 19}, {x: 9, y: 20},
{x: 9, y: 23}, {x: 9, y: 24}, {x: 9, y: 25}, {x: 9, y: 26}, {x: 9, y: 29},
{x: 18, y: 5}, {x: 18, y: 6}, {x: 18, y: 7}, {x: 18, y: 8}, {x: 18, y: 11},
{x: 18, y: 12}, {x: 18, y: 13}, {x: 18, y: 14}, {x: 18, y: 15}, {x: 18, y: 16},
{x: 18, y: 17}, {x: 18, y: 18}, {x: 18, y: 19}, {x: 18, y: 20}, {x: 18, y: 23},
{x: 18, y: 24}, {x: 18, y: 25}, {x: 18, y: 26}, {x: 18, y: 29}, {x: 14, y: 5},
{x: 13, y: 5}, 
{x: 12, y: 11}, {x: 11, y: 11}, {x: 10, y: 11}, {x: 15, y: 11}, {x: 16, y: 11},
{x: 17, y: 11}, {x: 10, y: 11}, {x: 11, y: 17}, {x: 12, y: 17}, {x: 13, y: 17},
{x: 14, y: 17}, {x: 15, y: 17}, {x: 16, y: 17}, {x: 17, y: 17}, {x: 10, y: 17},
{x: 10, y: 23}, {x: 11, y: 23}, {x: 12, y: 23}, {x: 13, y: 23}, {x: 14, y: 23},
{x: 15, y: 23}, {x: 16, y: 23}, {x: 17, y: 23}, {x: 10, y: 23}, {x: 26, y: 1},
{ x: 21, y: 6 }, { x : 26 , y : 22}, { x : 26 , y : 23}, { x : 26 , y : 26}, { x : 26 , y : 27},
{ x : 26 , y : 28}, { x : 26 , y : 29}, { x : 2 , y : 8}, { x: 2, y: 20 },
{ x: 3, y: 20 }, { x: 4, y: 20 }, { x: 5, y: 20 }, { x: 6, y: 20 },
{ x: 7, y: 20 }, { x: 8, y: 20 }, { x: 9, y: 20 }, { x: 10, y: 20 },
{ x: 11, y: 20 }, { x: 12, y: 20 }, { x: 15, y: 20 }, { x: 16, y: 20 },
{ x: 17, y: 20 }, { x: 18, y: 20 }, { x: 19, y: 20 }, { x: 20, y: 20 },
{ x: 21, y: 20 }, { x: 22, y: 20 }, { x: 23, y: 20 }, { x: 24, y: 20 },
{ x: 25, y: 20 }, { x: 26, y: 20 }, { x: 2, y: 26 }, { x: 3, y: 26 },
{ x: 4, y: 26 }, { x: 5, y: 26 }, { x: 6, y: 26 }, { x: 9, y: 26 },
{ x: 10, y: 26 }, { x: 11, y: 26 }, { x: 12, y: 26 }, { x: 15, y: 26 },
{ x: 16, y: 26 }, { x: 17, y: 26 }, { x: 18, y: 26 }, { x: 21, y: 26 },
{ x: 22, y: 26 }, { x: 23, y: 26 }, { x: 24, y: 26 }, { x: 25, y: 26 },
{ x: 26, y: 26 }, { x: 3, y: 8 }, { x: 4, y: 8 }, { x: 5, y: 8 },
{ x: 10, y: 8 }, { x:11, y: 8 }, { x: 12, y: 8 }, { x: 15, y: 8 },
{ x: 16, y: 8 }, { x: 17, y: 8 }, { x: 22, y: 8 }, { x: 23, y: 8 },
{ x: 24, y: 8 }, { x: 25, y: 8 },{ x: 26, y: 8},{ x: 26, y: 21},
{ x: 21, y: 6 }, { x: 24, y: 23}, { x: 25, y: 23}, { x: 20, y: 23}, { x: 19, y: 23},
{ x: 2, y: 23}, { x: 3, y: 23}, { x: 7, y: 23}, { x: 8, y: 23}, { x: 12, y: 2},
{ x: 12, y: 3}, { x: 12, y: 4}, { x: 15, y: 2}, { x: 15, y: 3},
{ x: 15, y: 4}, { x: 15, y: 21}, { x: 15, y: 22}, { x: 12, y: 21}, { x: 12, y: 22},
{ x: 24, y: 24}, { x: 24, y: 25}, { x: 3, y: 24}, { x: 3, y: 25}, { x: 12, y: 10},{x: 14, y: 11}, {x: 13, y: 11},
{ x: 12, y: 9}, { x: 15, y: 10}, { x: 15, y: 9},{ x: 26, y: 2},{ x: 26, y: 3},{ x: 26, y: 4},{ x: 26, y: 6},{ x: 26, y: 7},
//center coordinates
//{ x: 13, y: 13},  { x: 14, y: 13},//{ x: 12, y: 14 }, //{ x: 15, y: 14 }, 
//{x: 14, y: 14}, {x: 13, y: 14}, 
//coordinates for the tunnel
{ x: 0, y: 14},{ x: 27, y: 14}, 
//coordinates for the center's gate
//{ x: 13, y: 12},{ x: 14, y: 12}
];


//creating class pacman for our game charachter
class Pacman { 
    constructor( x,  y){
    this.x=x; this.y=y; //pacman has a x and y of the MapArray
  }
  //function that takes the argument direction(left, right, top, down), checks wether the new move is allowed, 
  //for example up will be y-1, deletes pacman and draws it on the new location
  movement(direction){
    switch(direction){
      case "left" :
        if(isItPossibleToMove(this.x-1, this.y)){
          this.delete();
          this.x--;
          this.draw();
        }//the else if is for the tunnel
        else if(this.x==0){
          this.delete();
          this.x=27;
          this.draw();
        }
        break;
      case "up" :
        if(isItPossibleToMove(this.x, this.y-1)){
          this.delete();
          this.y--;
          this.draw();
        }
        break;
      case "right" :
        if(isItPossibleToMove(this.x+1, this.y)){
          this.delete();
          this.x++;
          this.draw();
        }//the else if is for the tunnel
        else if(this.x==27){
          this.delete();
          this.x=0;
          this.draw();
        }
        break;
      case "down" :
        if(isItPossibleToMove(this.x, this.y+1)){
          this.delete();
          this.y++;
          this.draw();
        }
        break;
    }
  }
   // function that draws the pacman to its new location, and makes the cell bigger so that the pacman can fit inside 
   //because the cells for the big coins do not cover them fully the cells next to them become black 
      draw() {
      MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x-playerMargin}px`    // new x and y, from where the cell will beggin
      MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y-playerMargin-5}px`
      MapArray[this.x][this.y].style.backgroundImage = "url('SpriteSheet.v1.png')";
      MapArray[this.x][this.y].style.backgroundPosition = "-1105px -2px";
      MapArray[this.x][this.y].style.height = `${playerSize}px`; 
      MapArray[this.x][this.y].style.width = `${playerSize}px`; 
      MapArray[this.x][this.y].style.zIndex = "1";//makes it infront of the rest of the cells
           
      
            
            // a timer for how long the pacman will eat the ghosts
      for(var i in bigCoins){if(bigCoins[i].x==this.x && bigCoins[i].y==this.y){
        itIsEatingTime=true;   bigCoins.splice(i, 1); 
          setTimeout(function () {
              itIsEatingTime=false;
            },timerForEatingGhosts)
        if(isCellEaten(this.x-1,this.y)){
           MapArray[this.x+1][this.y].style.background= "linear-gradient(to right, #000000 40%, transparent 40%)" ;
        }else if(isCellEaten(this.x+1,this.y)){MapArray[this.x-1][this.y].style.background= "linear-gradient(to left, #000000 40%, transparent 40%)" ;}
       else{MapArray[this.x-1][this.y].style.background= "linear-gradient(to left, #000000 40%, transparent 40%)" ;
      MapArray[this.x+1][this.y].style.background= "linear-gradient(to right, #000000 40%, transparent 40%)" ;}
      }}  
  
    }
     //deletes the image from the cell and gets it back to its normal size and pushes the location to eatenCoins 
     delete(){
     
      MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x}px`;
      MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y}px`;
      MapArray[this.x][this.y].style.height = `${cellSizeY}px`; 
      MapArray[this.x][this.y].style.width = `${cellSizeX}px`; 
      MapArray[this.x][this.y].style.removeProperty("background");
      MapArray[this.x][this.y].style.backgroundColor= "black";
      MapArray[this.x][this.y].style.zIndex = "0";//change back the heirarchy
      eatenCoins.push({x:this.x , y:this.y});
    }
  }
  
  //creating the ghost class
  class Ghost {
    constructor(x,y) {
      this.y = y; // X and Y of the ghost
      this.x = x;
      this.lastMove = { x: this.x , y:this.y}; // lastmove is needed so that the pacman doesnt go back and forth, it will be removed from the possible next move
      this.freeIndexes = []; // initialize the freeIndexes array 
      this.hasGoneThroughTunnel = false; //checkpoint, so that the ghost goes properly through 
    }
  
    movement() {
      //two ifs for the tunnel, changing hasGoneThroughTunnel so that the ghost doesnt go back and forth, 
      //for example: he goes, he cant go back(hasGoneThroughTunnel =true), he goes x+-, and when he comes back hasGoneThroughTunnel is again false and he can go through
      if(this.x==27  && this.hasGoneThroughTunnel ==false){
        this.delete();
        this.x=0; this.hasGoneThroughTunnel =true ;
        this.draw();
      }else if(this.x==0 && this.hasGoneThroughTunnel ==false){
        this.delete();
        this.x=27;  this.hasGoneThroughTunnel= true;
        this.draw();
              }
              else if(this.hasGoneThroughTunnel ==false || this.hasGoneThroughTunnel ==true){ 
        this.hasGoneThroughTunnel=false;
        //array freeIndexes has all possible cells, the ghost can move to
        this.freeIndexes = [];
      if ( isItPossibleToMove(this.x+1, this.y)) {
        this.freeIndexes.push({ x: this.x+1 , y: this.y });
      } 
      if ( isItPossibleToMove(this.x-1, this.y)) {
        this.freeIndexes.push({ x: this.x-1 , y: this.y });
      }
      if ( isItPossibleToMove(this.x, this.y-1)) {
        this.freeIndexes.push({ x: this.x , y: this.y-1 });
      }
      if ( isItPossibleToMove(this.x, this.y+1)) {
        this.freeIndexes.push({ x: this.x , y: this.y+1 });
      }
      //we romove the cell he came from
      if(this.lastMove !=null){ for(var i=0; i<this.freeIndexes.length; i++){
         if( this.lastMove.x == this.freeIndexes[i].x && this.lastMove.y == this.freeIndexes[i].y){
                                this.freeIndexes.splice(i,1);
         }
      }}  
      // we choose a random cell of the possible ones, lastMove records the location,we delete it from the cell, we change the X and Y, and draw it on the new one
      if (this.freeIndexes.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.freeIndexes.length);
        const randomValue = this.freeIndexes[randomIndex];
        this.lastMove = { x: this.x , y: this.y};
        this.delete();
        this.y = randomValue.y;
        this.x = randomValue.x;
        this.draw();
      }}
    }
    //deletes the image from the cell. and if the coin is eaten the background color is black
      delete(){//checks if the ghost's x and y has a coin that is eaten
        var alreadyEaten = () => {
          for (var index in eatenCoins) {
            if (this.x == eatenCoins[index].x && this.y == eatenCoins[index].y) {
              return true;
            }
          }
          return false;
        };
        //back to normal x and y and size
        if (alreadyEaten()) {
          MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x}px`; 
          MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y}px`;
          MapArray[this.x][this.y].style.height = `${cellSizeY}px`; 
          MapArray[this.x][this.y].style.width = `${cellSizeX}px`; 
          MapArray[this.x][this.y].style.backgroundImage = "url('SpriteSheet.v1.png')";
          MapArray[this.x][this.y].style.backgroundPosition = "30px 30px";
          MapArray[this.x][this.y].style.zIndex = "0"; //change back the heirarchy
            }else{
          MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x}px`;
          MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y}px`;
          MapArray[this.x][this.y].style.height = `${cellSizeY}px`; 
          MapArray[this.x][this.y].style.width = `${cellSizeX}px`; 
          MapArray[this.x][this.y].style.removeProperty("background");
          MapArray[this.x][this.y].style.zIndex = "0";//change back the heirarchy
        }
      }
     
    
    //draws the ghost
    draw() {
      MapArray[this.x][this.y].style.zIndex = "1";//makes it infront of the rest of the cells
      MapArray[this.x][this.y].style.marginLeft = `${leftUpCornerArray[this.x][this.y].x-playerMargin}px`  // new x and y, from where the cell will beggin
      MapArray[this.x][this.y].style.marginTop = `${leftUpCornerArray[this.x][this.y].y-playerMargin-5}px`
      MapArray[this.x][this.y].style.backgroundImage = "url('SpriteSheet.v1.png')";
      if(itIsEatingTime){MapArray[this.x][this.y].style.backgroundPosition = coordinatesGhostRunning;}else{MapArray[this.x][this.y].style.backgroundPosition = coordinatesGhostNormal;}
      MapArray[this.x][this.y].style.height = `${playerSize}px`; //new height and widht
          MapArray[this.x][this.y].style.width = `${playerSize}px`;
      
    }
  }