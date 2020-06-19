/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//player 1 = 0 player 2 = 1;
//
var activePlayer, dice, game;


var scores;
var roundScore;
 
init();

document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(game) {
        dice = Math.floor(Math.random()*6) + 1;
    
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        if(dice !== 1) {
                roundScore += dice;
                document.querySelector('#current-' + activePlayer).innerHTML = roundScore;    
        }
        else {
        activePlayer === 0? activePlayer = 1:activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
    }    
    } 
        
});

document.querySelector('.btn-hold').addEventListener('click', function(){
//    document.querySelector('#score-' + activePlayer).textContent = document.querySelector('#current-'+activePlayer).textContent;
//    
//    scores[activePlayer] += document.querySelector('#current-' + activePlayer).textContent;
//    console.log(scores[activePlayer]);
    
    if(game) {
        scores[activePlayer] += roundScore;
    
    if(scores[activePlayer] >= 20) {
        game = false;
        
        alert('Player-' + (activePlayer+1) + ' has Won!');
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        
        
//        document.querySelector('#score-0').textContent = '0';
//        document.querySelector('#score-1').textContent = '0';
//        document.querySelector('#current-1').textContent = '0';
//        document.querySelector('#current-1').textContent = '0';  
        
    }
    
//    document.querySelector('#score-0').textContent = '0';
//    document.querySelector('#score-1').textContent = '0';
//    document.querySelector('#current-1').textContent = '0';
//    document.querySelector('#current-1').textContent = '0';
    
    
    
    document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];
    
    if(activePlayer === 0) {
        activePlayer = 1;
    }
    else {
        activePlayer = 0;
    }
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');    
    }
    
    
});

    document.querySelector('.btn-new').addEventListener('click', function(){
        init();
    });

function init() {
    
//    var player1 = prompt('Player 1 Name:');
//    var player2 = prompt('Player 2 Name:');
//    
////    console.log(player1);
//    
//    document.querySelector('#name-0').textContent = 'pl1';
//    document.querySelector('#name-1').textContent = player2;
    
    
    
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    game = true;
    
    
    
    document.querySelector('.dice').style.display = 'none';
    
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'Player-1';
    document.querySelector('#name-1').textContent = 'Player-2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    
    
//    
//    document.querySelector('.player-0-panel').classList.remove('active');
//    document.querySelector('.player-1-panel').classList.add('active');
    
    
    
}



