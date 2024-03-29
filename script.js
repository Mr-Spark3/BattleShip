//creating the game board//
function createBoard(boardId) {
  const board = document.getElementById(boardId);
   for (let row = 0; row < 10; row++) {
    for (let col = 0; col < 10; col++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = `${String.fromCharCode(65 + row)}${col + 1}`;
      cell.setAttribute('dropzone', 'copy');
      board.appendChild(cell);
    }
  }
 }
 createBoard('computerBoard');
 createBoard('playerBoard');
