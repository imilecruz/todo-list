import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lista: [],
    }
  }

  handlerSubmit = (ev) => {
    ev.preventDefault();
    const { lista } = this.state
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa')
     
        lista.push(this.inputText.value)
    
   
    this.setState({
      lista,
    })
    this.inputText.value = ''
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.handlerSubmit}>
          <input type="text" autoFocus ref={node => this.inputText = node}/>
          <button>Adicionar</button>
        </form>
        {this.state.lista.map(item=> <p>{item}</p>)}
      </div>
    )
  }
}

export default App;
