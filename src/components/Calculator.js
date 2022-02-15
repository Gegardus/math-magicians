import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total } = this.state;
    return (
      <main>
        <div className="output"><p className="display">{ next || total || 0}</p></div>
        <div className="buttons">
          <button className="btn" type="button" onClick={ this.handleClick }>AC</button>
          <button className="btn" type="button" onClick={ this.handleClick }>+/-</button>
          <button className="btn" type="button" onClick={ this.handleClick }>%</button>
          <button className="btn end" type="button" onClick={ this.handleClick }>÷</button>
        </div>
        <div className="buttons">
          <button className="btn" type="button" onClick={ this.handleClick }>7</button>
          <button className="btn" type="button"onClick={ this.handleClick }>8</button>
          <button className="btn" type="button" onClick={ this.handleClick }>9</button>
          <button className="btn end" type="button" onClick={ this.handleClick }>x</button>
        </div>
        <div className="buttons">
          <button className="btn" type="button" onClick={ this.handleClick }>4</button>
          <button className="btn" type="button" onClick={ this.handleClick }>5</button>
          <button className="btn" type="button" onClick={ this.handleClick }>6</button>
          <button className="btn end" type="button" onClick={ this.handleClick }>-</button>
        </div>
        <div className="buttons">
          <button className="btn" type="button" onClick={ this.handleClick }>1</button>
          <button className="btn" type="button" onClick={ this.handleClick }>2</button>
          <button className="btn" type="button" onClick={ this.handleClick }>3</button>
          <button className="btn end" type="button" onClick={ this.handleClick }>+</button>
        </div>
        <div className="buttons">
          <button className="btn zero" type="button" onClick={ this.handleClick }>0</button>
          <button className="btn" type="button" onClick={ this.handleClick }>.</button>
          <button className="btn end" type="button" onClick={ this.handleClick }>=</button>
        </div>
      </main>
    );
  }
}

export default Calculator;
