document.addEventListener('DOMContentLoaded', () => {
	const squares = document.querySelectorAll('.grid div')
	const result = document.querySelector('#result')
	const displayCurrentPlayer = document.querySelector('#current-player')
	let currentPlayer = 1
	
	for (var i = 0, len = squares.length; i < len; i++)

	(function(index){
		//add an onclick to each square in your grid
		squares[i].onclick = function() {
			//if the square below your current is "taken", you can go ontop of it
			if(!squares[index].classList.contains('player-two')) {
				if (currentPlayer === 1 && 
					!squares[index].classList.contains('player-one')&&
					!squares[index].classList.contains('player-two')
					) {
					squares[index].classList.add('player-one')
					//change the player
					currentPlayer = 2
					displayCurrentPlayer.innerHTML = currentPlayer
					} else if (currentPlayer === 2 &&
						!squares[index].classList.contains('player-one') && 
						!squares[index].classList.contains('player-two')) {
						squares[index].classList.add('player-two')
						//change the player
						currentPlayer = 1
						displayCurrentPlayer.innerHTML = currentPlayer
					}
				//if the square below your current square is not taken. you can't go here
				} else alert('cant go here')
		}
	})(i)
	
	//check board for a win or lose
	function checkBoard() {
		//make const that shows all winning arrays
		/*const winningArrays = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		]*/
		// now take the 4 values in each winningArrays and plug them into squares
		if((squares[0].classList.contains('player-one')&&(squares[1].classList.contains('player-one'))&&(squares[2].classList.contains('player-one')))||
		(squares[3].classList.contains('player-one')&&(squares[4].classList.contains('player-one'))&&(squares[5].classList.contains('player-one')))||
		(squares[6].classList.contains('player-one')&&(squares[7].classList.contains('player-one'))&&(squares[8].classList.contains('player-one')))||
		(squares[0].classList.contains('player-one')&&(squares[3].classList.contains('player-one'))&&(squares[6].classList.contains('player-one')))||
		(squares[1].classList.contains('player-one')&&(squares[4].classList.contains('player-one'))&&(squares[7].classList.contains('player-one')))||
		(squares[2].classList.contains('player-one')&&(squares[5].classList.contains('player-one'))&&(squares[8].classList.contains('player-one')))||
		(squares[0].classList.contains('player-one')&&(squares[4].classList.contains('player-one'))&&(squares[8].classList.contains('player-one')))||
		(squares[2].classList.contains('player-one')&&(squares[4].classList.contains('player-one'))&&(squares[6].classList.contains('player-one')))
		)
			{
				// if they do, player-one is passed as winner
				alert('Player One Wins!')
				location.reload()				
			}
			//now check to see if they all have the class of player-two
			else if((squares[0].classList.contains('player-two')&&(squares[1].classList.contains('player-two'))&&(squares[2].classList.contains('player-two')))||
			(squares[3].classList.contains('player-two')&&(squares[4].classList.contains('player-two'))&&(squares[5].classList.contains('player-two')))||
			(squares[6].classList.contains('player-two')&&(squares[7].classList.contains('player-two'))&&(squares[8].classList.contains('player-two')))||
			(squares[0].classList.contains('player-two')&&(squares[3].classList.contains('player-two'))&&(squares[6].classList.contains('player-two')))||
			(squares[1].classList.contains('player-two')&&(squares[4].classList.contains('player-two'))&&(squares[7].classList.contains('player-two')))||
			(squares[2].classList.contains('player-two')&&(squares[5].classList.contains('player-two'))&&(squares[8].classList.contains('player-two')))||
			(squares[0].classList.contains('player-two')&&(squares[4].classList.contains('player-two'))&&(squares[8].classList.contains('player-two')))||
			(squares[2].classList.contains('player-two')&&(squares[4].classList.contains('player-two'))&&(squares[6].classList.contains('player-two')))
			)
			{
				// if they do, player-two is passed as winner
				alert('Player Two Wins!')
				location.reload()
			} else if((squares[0].classList.contains('player-one')||squares[0].classList.contains('player-two'))&&
			(squares[1].classList.contains('player-one')||squares[1].classList.contains('player-two'))&&
			(squares[2].classList.contains('player-one')||squares[2].classList.contains('player-two'))&&
			(squares[3].classList.contains('player-one')||squares[3].classList.contains('player-two'))&&
			(squares[4].classList.contains('player-one')||squares[4].classList.contains('player-two'))&&
			(squares[5].classList.contains('player-one')||squares[5].classList.contains('player-two'))&&
			(squares[6].classList.contains('player-one')||squares[6].classList.contains('player-two'))&&
			(squares[7].classList.contains('player-one')||squares[7].classList.contains('player-two'))&&
			(squares[8].classList.contains('player-one')||squares[8].classList.contains('player-two'))
				) {
				alert('It is a draw!')
				location.reload()
			}
	}
	//add an eventListener to each squars that will triggere the check board function on click
	squares.forEach(squares => squares.addEventListener('click', checkBoard))
	//squares.addEventListener('click', checkBoard)
	
})