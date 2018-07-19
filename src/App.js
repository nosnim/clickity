import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Img from './Components/Img.js';

class App extends Component {
  state = {
    data,
    score: 0,
    topScore: 0,
    newScore: 0
  }

  handleClick = (id) => {
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue, randomIndex;
      // keep score
      // const { topScore, score } = this.state;
      // const newScore = score + 1;
      // const newTopScore = newScore > topScore ? newScore : topScore;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    var hasClicked = false;

    var newData = this.state.data;
    console.log("this image has been clicked");
    console.log(newData);
    console.log(id);
    for (var i = 0; i < newData.length; i++) {
      if (id === newData[i].id && newData[i].clicked !== true) {
        newData[i].clicked = true
        hasClicked = true
        // Track Score = pseudo code (code not working yet)
      //   let newScore = score + 1;
      //   let newTopScore = newScore > topScore ? newScore : topScore;
      }
    }
    if (!hasClicked) {
      alert("this thing has already been clicked")
    }


    newData = shuffle(newData)
    this.setState({
      data: newData
    });

  }


  render() {
    console.log(this.state.data);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Eric's Clickity Game</h1>
        </header>
        <p className="App-intro">
          Click an image to get started, but don't click the same image twice!
        </p>
        <div>
          {this.state.data.map((dataObj, index) => {
            return <Img dataImg={dataObj.img} alternate={dataObj.name} key={index} id={dataObj.id} handleClick={this.handleClick} />
          })}
        </div>
        {/* <Img dataImg={this.state.data[0].img} alternate={this.state.data[0].name}/>
        <Img dataImg={this.state.data[1].img} alternate={this.state.data[1].name}/>
        <Img dataImg={this.state.data[2].img} alternate={this.state.data[2].name}/> */}
        {/* <Img />
          <Img /> */}
      </div>
    );
  }
}

export default App;
