const gameboard = document.getElementById('gameboard');
let rows = 10;
let cols = 10;
let sizeSquare = 30;
let attacksCounter = 0;
let ships = [];
//let boardPlayerOne = createBoard();
//let boardPlayerTwo = createBoard();

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
            

// 
let grid = [
   [1,1,1,1,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
   [0,0,0,0,0,0,0,0,0,0],
];

//Check for  hits

gameboard.addEventListener("click", fireTorpedo, false);

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

function fireTorpedo(e) {
	if (e.target !== e.currentTarget) {
      
		var row = e.target.id.substring(1,2);
		var col = e.target.id.substring(2,3);
        //alert("Clicked on row " + row + ", col " + col);
				

		if (grid[row][col] == 0) {
			e.target.style.background = '#bbb';
			
			grid[row][col] = 3;
			
		
		} else if (grid[row][col] == 1) {
			e.target.style.background = 'black';
			grid[row][col] = 2;			
         
         let total = attacksCounter++;
         let h = document.getElementById('count-shot');
         h.innerHTML = total;
			
			if (attacksCounter == 17) {
                showAlert("All enemy battleships have been defeated! You win!", 'win', 10000);
            }
		   } else if (grid[row][col] > 1) {
            showAlert('Stop wasting your torpedos! You already fired at this location.',"alreadyfired", 2000);
         }		
    }
    e.stopPropagation();
}





/*function play (e){
 
}*/



////  cardArray.sort(() => 0.5 - Math.random())


//check for shots


