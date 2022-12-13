let board  = ["", "", "", "", "", "", "", "", "", ]
let playerTurn = 0
let symbols = ["O","X"]
let playerOne = prompt("Jogador das espadas, digite o seu nome:")
let playerTwo = prompt("Jogador dos escudos, digite o seu nome:")
let gameOver = false
let winState = [
    [0,1,2],   
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
]

 function printingName (playerTurn) {
    
    if(playerTurn == 0){
        return playerTwo
    }else{
        return playerOne
    }
}
  

function handleMove (position ){
  
    if(gameOver){
        return
    }


    if(board[position] == ""){ 
      
        board[position] = symbols[playerTurn]
        

        if(gameOver == false){ 
           
            playerTurn = (playerTurn == 0) ? 1 : 0; // PlayerTurn é igual a 0, se sim coloca 0, senão coloca 1
        
        }

        gameOver = isWIn()
    } 

    return gameOver   
} 

function isWIn(){
  

    for(i = 0; i < winState.length; i++){
        let comb = winState[i]
        for(v = 0 ; v < comb.length; v++){
            if(board[comb[0]] == board[comb[1]] && board[comb[0]] == board[comb[2]] && board[comb[1]] != ""){
                return true
            }
        }            
    }
   
    return false
}


    
    
    
    
    
    
    
    
    
    
