let board = document.getElementById('board')

const squares =  () => {
   let cols = 10;
   let rows = 10;   

   for(let i=0; i < cols; i++){
      for(let u=0; i< rows; u++){
         square = document.createElement('div');
         board.appendChild(square);
         square.className = `b + ${i} + ${u} + square`;
         
      }
   }
            
};


let shots =  () => {

};