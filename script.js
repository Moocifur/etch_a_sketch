createBoard(16)

let btn_popup = document.querySelector("#popup");
btn_popup.addEventListener("click", function(){
    let size = getSize();
    clearBoard();
    createBoard(size);
});

function createBoard(size) {//wrapped to take in 'size'
    const board = document.querySelector('.board'); //target board div

    for (let i = 0; i < size; i++) { //loop 'size' amount of times
        const row = document.createElement('div'); //create a div in memory called row
        row.classList.add('row'); //adds a class to row called row

        for (let j = 0; j < size; j++) { //loop in a a loop
        const column = document.createElement('div'); //creates a div called columns in memory
        column.classList.add('column'); //adds aclass to the new columns div
        row.appendChild(column); //appends column into row.
        
        //the mouseover
        column.addEventListener('mouseover', () => {
            column.style.backgroundColor = 'black';
        });
        }
        board.appendChild(row); //appends one row, and 16 columns
    }
}

function clearBoard() {
    const board = document.querySelector('.board');
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

function getSize(){//activate to ask for grid size
    let input = prompt ("Size? Between 2 and 100 please"); //user inout taker
    let message = document.querySelector("#message"); //message is targeting message in html
    if (input == ""){ //if input is empty
        message.innerHTML = "Please provide a number"; //let message be ask again
    }
    else if (input < 0 || input > 100) {
        message.innerHTML = "Pick a number between 1 and 100";
    }
    else{
        message.innerHTML = "Ready!";
        return input;
    }
}