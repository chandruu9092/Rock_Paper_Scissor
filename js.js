let score = {
  wins : 0,
  losses : 0,
  tie :0
};

function playerMove(move,pcm)
{
  let computerMove = pcm
  let result = '';
  if (move === 'scissor')
  {
    if (computerMove === 'rock')
    {
      result = 'you lose';
    }
    else if (computerMove === 'paper')
    {
      result = 'you win';
    }
    else if (computerMove === 'scissor')
    {
      result = 'tie';
    }
  }

  else if (move === 'paper')
  {
    if (computerMove === 'rock')
    {
      result = 'you win';
    }
    else if (computerMove === 'paper')
    {
      result = 'tie';
    }
    else if (computerMove === 'scissor')
    {
      result = 'you lose';
    }
  }

  else if(move === 'rock')
  {
    if(computerMove === 'rock')
    {
      result = 'tie';
    }
    else if (computerMove === 'paper')
    {
      result = 'you lose';
    }
    else if (computerMove === 'scissor')
    {
      result = 'you win';
    }
  }
  return result;
}


function pickComputerMove(){
  let randomNum2 = Math.random();
  let computerMove = '';

    if(randomNum2 >= 0 && randomNum2 < 1/3){
      computerMove = 'rock';
    }
    else if (randomNum2 > 1/3 && randomNum2 < 2/3){
      computerMove = 'paper';
    }
    else if (randomNum2 > 2/3 && randomNum2 < 1 ){
      computerMove = 'scissor';
    }
    return computerMove
}

function playgame(pick)
        {
            document.getElementById('your').innerHTML =  pick ;
            let rm = pickComputerMove();
            document.getElementById('computer').innerHTML = rm;
            let dispScore = playerMove(pick,rm)
            document.getElementById('result').innerHTML = dispScore ; 
            switch(dispScore){
              case 'you win': score.wins += 1 
              break;
              case 'you lose': score.losses += 1 
              break;
              case 'tie': score.tie += 1 
              break;
            }
            document.getElementById('win').innerHTML = score.wins;
            document.getElementById('loss').innerHTML = score.losses;
            document.getElementById('tie').innerHTML = score.tie;
        }
function reset(){
            score.wins = 0;
            score.losses = 0;
            score.tie = 0;
            document.getElementById('win').innerHTML = score.wins;
            document.getElementById('loss').innerHTML = score.losses;
            document.getElementById('tie').innerHTML = score.tie;
            document.getElementById('your').innerHTML =  'click' ;
            document.getElementById('computer').innerHTML = 'click' ;
            document.getElementById('result').innerHTML = 'Reseted';
}