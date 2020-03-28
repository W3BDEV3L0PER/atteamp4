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
            <div id="ball" onMouseDown={function(e){

                let ball = document.getElementById('ball')

                let shiftX = e.clientX - ball.getBoundingClientRect().left
                let shiftY = e.clientY - ball.getBoundingClientRect().top

                ball.style.position = 'absolute'
                ball.style.zIndex = 1000

                function moveAt(pageX, pageY) {
                    ball.style.left = pageX - shiftX + 'px'
                    ball.style.top = pageY - shiftY + 'px'
                }

                moveAt(e.pageX, e.pageY)

                function onMouseMove(e) {
                    moveAt(e.pageX, e.pageY)
                }

                document.addEventListener('mousemove', onMouseMove);

                ball.onmouseup = function() {
                    document.removeEventListener('mousemove', onMouseMove);
                    ball.onmouseup = null;
                }

                ball.ondragstart = function() {
                    return false
                }
        }}>
            </div>
            <textarea id="txt">
                {localStorage.getItem('txt')}
            </textarea>
            <button id="btn" onClick={function(e){
                    let getText = document.getElementById('txt').value
                    localStorage.setItem('txt',getText)
            }}>
            </button>
           </header>
          </div>

      );
    }
}

export default App;
