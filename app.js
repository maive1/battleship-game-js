const gameboard = document.getElementById('gameboard');
let rows = 10;
let cols = 10;
let sizeSquare = 30;
let attacksCounter = 0;
let shipNum = 5;
let ships = [];
let mySound;
soundHit = new sound("./sounds/Bomb.mp3");
soundOcean = new sound("./sounds/ocean.mp3")


//Create gameboard with squares

for(let i=0; i < cols; i++){
      for(let j=0; j< rows; j++){
         let square = document.createElement('div');
         gameboard.appendChild(square);
         square.id = `s${j}${i}`;

         let topPosition = j * sizeSquare;
         let leftPosition = i * sizeSquare;

         square.style.top = topPosition + 'px';
         square.style.left = leftPosition + 'px';
      }
}
            

// Grid Game

let grid = [
   [1,1,1,1,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,1,0,0],
   [1,0,0,0,0,0,0,1,0,0],
   [1,0,0,0,0,0,0,1,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,1,1,1,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,1,1,1,1,1],
   [0,0,0,0,0,0,0,0,0,0],
];



//create alert
function showAlert (message, cssClass, time){
   const alert = document.createElement('div');
   alert.className = `msg msg-${cssClass}`;
   alert.appendChild(document.createTextNode(message));
   
   const container = document.querySelector('.container');
   const title = document.getElementsByTagName('p')[0];
   container.insertBefore(alert, title);
   setTimeout(function(){
    document.querySelector('.msg').remove();
   }, time)
}

//create class sound

function sound(src) {
   this.sound = document.createElement("audio");
   this.sound.src = src;
   this.sound.setAttribute("preload", "auto");
   this.sound.setAttribute("controls", "none");
   this.sound.style.display = "none";
   document.body.appendChild(this.sound);
   this.play = function(){
       this.sound.play();
   }
   this.stop = function(){
       this.sound.pause();
   }    
}

//Check for  hits

gameboard.addEventListener("click", fireTorpedo, false);

function fireTorpedo(e) {
	if (e.target !== e.currentTarget) {
      
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
        //alert("Clicked on row " + row + ", col " + col);
				

		if (grid[row][col] == 0) {
         soundOcean.play();
			e.target.style.background = '#bbb';
			
         grid[row][col] = 3;
         
		} else if (grid[row][col] == 1) { 
         soundHit.play();
			e.target.style.background = 'black';
			grid[row][col] = 2;			
         
         let total = attacksCounter++;
         let h = document.getElementById('count-shot');
         h.innerHTML = total + 1;
			
			if (attacksCounter == 17) {
            showAlert("All enemy battleships have been defeated! You win!", 'win', 10000);
            }
		   } else if (grid[row][col] > 1) {
            showAlert('Stop wasting your torpedos! You already fired at this location.',"alreadyfired", 2000);
         }		
    }
    e.stopPropagation();
}



/*function generateShip ()  {
   let direction = Math.floor(Math.random() * 2);
	let row, col;

   if (direction === 1) { // horizontal
      row = Math.floor(Math.random() * boardSize);
      col = Math.floor(Math.random() * (boardSize - model.shipLength+ 1));
   } else { // vertical
      row = Math.floor(Math.random() * (boardSize - model.shipLength + 1));
      col = Math.floor(Math.random() * boardSize);
   }

   let newShipLocations = [];
   for (let i = 0; i < model.shipLength; i++) {
      if (direction === 1) {
         newShipLocations.push(row + "" + (col + i));
      } else {
         newShipLocations.push((row + i) + "" + col);
      }
   }  
   return newShipLocations;
}*/
//generateShipLocations();


