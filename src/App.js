import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

const choice = {
  rock:{
    name:"Rock",
    img:"https://png.pngtree.com/png-vector/20220106/ourmid/pngtree-cartoon-stone-vector-material-png-image_4094436.png",
  },
  scissors:{
    name:"Scissors",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-S9fVPSeA28SJexVubODPSkYPbaGlHh_Y2g&usqp=CAU",
  },
  paper:{
    name:"Paper",
    img:"https://www.cavalierart.com.au/wp-content/uploads/2009/05/litho-paper.jpg",
  },
};
function App() {

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

    const judgement =(user,computer)=>{
      if(user.name == computer.name){
        return "tie"
      }else if(user.name == "Rock")
      return computer.name =="Scissors"?"win":"lose";
      else if(user.name == "Scissors")
      return computer.name =="Paper"?"win":"lose";
      else if(user.name == "Paper")
      return computer.name =="Rock"?"win":"lose";
    }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체를 배열화시킴
    let randomItem = Math.floor(Math.random()* itemArray.length);
    let final = itemArray[randomItem];
   return choice[final];
  }

  return (
    <div>
    <div className="main">
 <Box title="You" item={userSelect} result = {result} />
 <Box title="Computer" item={computerSelect} result = {result}/>
 </div>
  <div className="main">
  <button onClick={() => play("scissors")}>가위</button>
  <button onClick={() => play("rock")}>바위</button>
  <button onClick={() => play("paper")}>보</button>
 </div>
 </div>
  );
}

export default App;
