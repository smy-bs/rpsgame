import React, { Component } from 'react';
import './App.css';
import './box.css'
import BoxClass from "./component/BoxClass";


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

export default class AppClass extends Component {
    constructor() {
        super();
        this.state = {
          userSelect: null,
          computerSelect: null,
          result: "",
        };
      }

      play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
          userSelect: choice[userChoice],
          computerSelect: computerChoice,
          result: this.judgement(choice[userChoice], computerChoice),
        });
      };

      randomChoice = () => {
        let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let final = itemArray[randomItem];
        return choice[final];
      };

      judgement = (user, computer) => {
        if (user.name === computer.name) {
          return "tie";
        } else if (user.name === "Rock")
          return computer.name === "Scissors" ? "win" : "lose";
        else if (user.name === "Scissors")
          return computer.name === "Paper" ? "win" : "lose";
        else if (user.name === "Paper")
          return computer.name === "Rock" ? "win" : "lose";
      };
  render() {
    return (
        <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="iconsBox">
          <button className="button" onClick={() => this.play("scissors")}>
            <img  src={`${process.env.PUBLIC_URL}imags/scissors.png`} alt="scissors" /></button>
          <button className="button" onClick={() => this.play("rock")}>
          <img src={`${process.env.PUBLIC_URL}imags/rock.png`} alt="rock" /></button>
          <button className="button" onClick={() => this.play("paper")}>
          <img src={`${process.env.PUBLIC_URL}imags/paper.png`} alt="paper" />
            </button>
        </div>
      </div>
          );
  }
}
