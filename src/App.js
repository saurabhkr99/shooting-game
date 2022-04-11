import React from 'react'
import { useState } from 'react';
function App() {

  const [finalwin, setFinalwin] = useState(0)
  const [win1, setWin1] = useState(0)
  const [win2, setWin2] = useState(0)

  var game_wonp1 = 0;
  var game_wonp2 = 0;
  function onclickHandler() {


    for (let i = 1; i < 6; i++) {
      let p1_health = 100; 
      let p2_health = 100;
      while (p1_health != 0 || p2_health != 0) {
        p1_health = p1_health - Math.floor(Math.random() * 6);
        p2_health = p2_health - Math.floor(Math.random() * 6);

        if (p1_health < 0) {
          p1_health = 0;
          break;
        }
        if (p2_health < 0) {
          p2_health = 0;
          break;
        }
      }
      if (p1_health == 0) {
        game_wonp1 = game_wonp1 + 1;
      } else {
        game_wonp2 = game_wonp2 + 1;
      } 
      console.log("each game won by players:-", game_wonp1, game_wonp2);
      setWin2(game_wonp2)
      setWin1(game_wonp1)


      if (game_wonp1 == 3 || game_wonp2 == 3) {
        break;
      }

      console.log("each game won:-", game_wonp1 > game_wonp2 ? "p1 is winner" : "p2 is winner");
    }

    console.log("winner of 5 game:-", game_wonp1, game_wonp2)
    let winner = game_wonp1 > game_wonp2 ? "P1 is winner" : "p2 is winner";
    console.log("winner of 5 game:-", winner)
    setFinalwin(winner)
    console.log("set winner:-", winner);
  }


  return (
    <div className='text-center mb-5'>
      <button className='btn btn-primary mb-2' onClick={onclickHandler}> Start the game</button>
      <h4>Player1-won:{win1}</h4>
      <h4>Player2-won:{win2}</h4>
      <h5>winner of the game: {finalwin}</h5>


    </div>
  )
}



export default App;