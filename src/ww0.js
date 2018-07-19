import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data.js';
import Img from './Components/Img.js';

var imageStyles = {
  width:'200px', 
  height: '200px'
};

class App extends Component {
  state = {
    data: data
  }

  handleClick = (id) => {
    function shuffle(array) {
      var currentIndex = array.length,
        temporaryValue, randomIndex;

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
    console.log("this img has been clicked");
    console.log(newData);
    console.log(id);
    for(var i = 0; i < newData.length; i++){
      if(id === newData[i].id && newData[i].clicked !== true){
        newData[i].clicked = true
        hasClicked = true
      }
    }
    if (!hasClicked) {
        alert("This image has already been clicked!")
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
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {this.state.data.map((dataObj, index) => {
            return <Img dataImg={dataObj.img}  alternate={dataObj.name} key={index} id={dataObj.id} handleClick={this.handleClick}/>
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
