import React from 'react';
import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

const choice = {
  rock:{
    name:"Rock",
    img:`${process.env.PUBLIC_URL}imags/rock.png`,
  },
  scissors:{
    name:"Scissors",
    img:`${process.env.PUBLIC_URL}imags/scissors.png`,
  },
  paper:{
    name:"Paper",
    img:`${process.env.PUBLIC_URL}imags/paper.png`,
  },
};

function App() {
// UI change => state 
   const[userSelect,setUserSelect]= useState(null);
   const[computerSelect,setComputerSelect] = useState(null);
   const[result,setResult]=useState("");


   const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    //컴퓨터가 랜덤번호를 생성하는 함수를 따로 play함수 안에 만들어줌
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
    };

    const judgement = (user,computer) => {
      if(user.name === computer.name){
        return "Tie";
      }
      else if(user.name === "Rock") return computer.name === "Scissors" ? "Win" : "Lose"
      else if(user.name === "Scissors") return computer.name === "Paper" ? "Win" : "Lose"
      else if(user.name === "Paper") return computer.name === "Rock" ? "Win" : "Lose"
      };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체를 배열화시킴
    let randomItem = Math.floor(Math.random()* itemArray.length);
    let final = itemArray[randomItem];
   return choice[final];
  }

  return (
<div className="mainState">
<h1 className="gamename">Rock - Scissors - Paper Game</h1>
<div className="main">
  <Box title="You" item={userSelect} result = {result} />
 <Box title="Computer" item={computerSelect} result = {result}/>
 </div>
  <div className="iconsBox">
  <button className="button" onClick={() => play("scissors")}>
  <img src={`${process.env.PUBLIC_URL}imags/scissors.png`} alt="scissors" />
  </button>
  <button className="button" onClick={() => play("rock")}>
  <img src={`${process.env.PUBLIC_URL}imags/rock.png`} alt="rock" />
  </button>
  <button className="button" onClick={() => play("paper")}>
  <img src={`${process.env.PUBLIC_URL}imags/paper.png`} alt="paper" />
  </button>
 </div>
 </div>
  );
}

export default App;
