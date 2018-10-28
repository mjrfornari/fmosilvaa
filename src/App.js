import React, { Component } from 'react';
import nos from './nos.jpg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state={ visible: false }
    
    this.showModal = this.showModal.bind(this)
  }

  showModal(){
    alert("Eu te amo!")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={nos} className="App-logo" alt="logo" />
          <p style={{ marginTop: `100px`}}>
            Oi Amor
          </p>
          <button className = "btnPrincipal" onClick={this.showModal}>Clique aqui!</button>
        </header>
      </div>
    );
  }
}

export default App;
