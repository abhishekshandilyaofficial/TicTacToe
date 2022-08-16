//render function returns html
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css'

class Board extends React.Component{
    handleBoxClick(i){
        this.props.handlerForBoxClick(i);
    }
    renderSquare(i){
        return (
            <button onClick={() => this.handleBoxClick(i)}>{this.props.boxes[i] == null?"":this.props.boxes[i]}</button>
        );
    }
    render(){
        return(
            
                <div className='board'>
                    <div className='title'>
                        Tic-Tac-Toe
                    </div>
                    <div className='content'>
                    <div className='ttt'>
                            <div className='row'>
                                {this.renderSquare(0)}
                                {this.renderSquare(1)}
                                {this.renderSquare(2)}
                            </div>
                            <div className='row'>
                                {this.renderSquare(3)}
                                {this.renderSquare(4)}
                                {this.renderSquare(5)}
                            </div>
                            <div className='row'>
                                {this.renderSquare(6)}
                                {this.renderSquare(7)}
                                {this.renderSquare(8)}
                            </div>
                    </div>
                        
                    </div>
                </div>
            
        )
    }
}
class Display extends React.Component{
    render(){
        let gameStatus = null;
        return(
            
                <div className='display'>
                    <div className='title'>
                        {gameStatus}
                    </div>
                    <div className='content'>
                        <div className='history'>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                                <button>Go to Move</button>
                        </div>
                    </div>
                </div>
            
        )
    }
}
class App extends React.Component {//This represents the whole page
    constructor(props){
        super(props);
        this.state = {
            history : [[null, null, null, null, null, null, null, null, null]],
            stepNumber: 0,
            gameStatus: null
        }
    }
    handleSquareClick(i){
        alert(i);
    }
    render(){
        let squares = this.state.history[this.state.history.length-1];
        return (
            <>
                <Board handlerForBoxClick={(i) => this.handleSquareClick(i)} boxes={squares}/>
                <Display />
            </>
            
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));