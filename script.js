const board = document.querySelector('.board'); //target board div

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div'); //create a div in memory called row
    row.classList.add('row'); //adds a class to the recipe

    for (let j = 0; j < 16; j++) {
       const column = document.createElement('div'); //creates a div called columns in memory
       column.classList.add('column'); //adds aclass to the new columns div
       row.appendChild(column); //appends column into row.
    }
    board.appendChild(row); //appends one row, and 16 columns
}