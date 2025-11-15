window.onload = function(){
    const squares = document.querySelectorAll('#board div');
    const status = document.querySelector('#status')
    const button = document.querySelector('.btn')
    const instructions = status.textContent;

    // Adds the square class to each div element
    squares.forEach(square => {
    square.classList.add('square');

        // Resets the game
        button.addEventListener('click',() => {
            square.textContent = '';
            currentplayer = "X"
            XPositions = []
            OPositions =[]
            status.textContent = instructions;
            status.classList.remove('you-won')
        })

        // Changes square style depending on hover
        square.addEventListener('mouseover', ()=> {
            square.classList.add('hover')
        });
        square.addEventListener('mouseout', ()=> {
            square.classList.remove('hover')
        });
    });

    let currentplayer = "X";
    const winpattern = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    function Winner(lst) {
        const correct = winpattern.some(pattern => 
        pattern.every(pat => lst.includes(pat))
    );
        if (correct) {
            return true;
        } else {
            return false;
        }
    }

    let XPositions = []
    let OPositions =[]
    squares.forEach((square,index) => {
        square.addEventListener('click', () =>{
            if(square.textContent === "" && currentplayer === "X"){
                square.textContent = "X";
                XPositions.push(index);
                if(Winner(XPositions)){
                    status.textContent = "Congratulations! X is the Winner!";
                    status.classList.add('you-won');
                }
                else{
                    currentplayer = "O";
                }
                
            } else if (square.textContent === "" && currentplayer === "O"){
                square.textContent = "O";
                OPositions.push(index);
                if(Winner(OPositions)){
                    status.textContent = "Congratulations! O is the Winner!" 
                    status.classList.add('you-won')
                }
                else{
                currentplayer = "X";
                }
            }
        });
    });
};