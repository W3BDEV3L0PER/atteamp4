import React from 'react';
import './App.css';

class App extends React.Component{
  state = {
    isButtonClicked:false
  }

  render(){
      return (
          <div className="App">
           <header className="App-header">
            <div className={ this.state.isButtonClicked ? "on" : "off" }
              onClick={() => this.setState({isButtonClicked: !this.state.isButtonClicked})}>
                  { this.state.isButtonClicked ? 'on' : 'off' }
            </div>
            <div id="card" onMouseMove={function location(e){
                let elem = document.getElementById('card')
                let X = e.nativeEvent.offsetX
                let Y = e.nativeEvent.offsetY
                let width = elem.offsetWidth
                let height = elem.offsetHeight
                elem.style.transform = "rotateX(" + -(Y  - width / 2) / 10 + "deg) rotateY(" + (X - height / 2) / 10 + "deg)"
            }} onMouseOut={function relocation(e){
                let elem = document.getElementById('card')
                elem.style.transform = "rotateX(0) rotateY(0)"
            }}>
            </div>
           </header>
          </div>
      );
    }
}

export default App;
