import React from 'react';
import './styles.scss';

const questionImage = require('./images/question.svg');

function Card({ image, flipped, onClick }) {
    return (
        <div className={`Card${!flipped ? ' flipped' : ''}`} {...{ onClick }}>
            <img src={questionImage} alt="card" />
            <div className="card__face card__face--front d-flex align-items-center">
                <img src={image} alt="card" style={{ height: '100%', borderRadius: '15px' }} />
            </div>
            <div className="card__face card__face--back d-flex align-items-center">
                <img src={questionImage} alt="card" />
            </div>
        </div>
    );
}

class GameBoard extends React.Component {

    constructor(props) {
        super(props);

        this.flipCard = this.flipCard.bind(this);
        this.updateGameStatus = this.updateGameStatus.bind(this);
    }

    flipCard(card) {
        if (card.flipped || this.props.gameData.flipCount === 2) return;

        this.props.updateStore(state => {
            let newState = Object.assign({}, state);

            newState.gameData.timeout = 5;

            newState.gameData.flipCount++;

            newState.gameData.flipped.push(card);

            newState.board[card.y][card.x].flipped = !newState.board[card.y][card.x].flipped;

            return newState;
        }, () => {
            /* Timeout for the CSS transition to be executed */
            setTimeout(this.updateGameStatus, 1000);
        });
    }

    updateGameStatus() {
        if (this.props.gameData.flipCount !== 2) return;

        this.props.updateStore(state => {
            let newState = Object.assign({}, state);

            if (newState.gameData.flipped[0].image !== newState.gameData.flipped[1].image) {

                newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped = !newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped;
                newState.board[newState.gameData.flipped[1].y][newState.gameData.flipped[1].x].flipped = !newState.board[newState.gameData.flipped[1].y][newState.gameData.flipped[1].x].flipped;
                newState.gameData.flipped = [];

                newState.gameData.flipCount = 0;

                newState.gameData.playerTurn = newState.gameData.playerTurn === 1 ? 2 : 1;
            }
            else {
                newState.gameData.flipped = [];
                newState.gameData.flipCount = 0;
                newState.gameData[`player-${newState.gameData.playerTurn}`].score += 2;

                if (newState.gameData['player-1'].score + newState.gameData['player-2'].score === 20) {
                    let score1 = newState.gameData['player-1'].score;
                    let score2 = newState.gameData['player-2'].score;

                    newState.gameData.end = true;
                    newState.gameData.winner = score1 === score2 ? 0 : (score1 > score2 ? 1 : 2);
                }
            }

            return newState;
        });
    }

    render() {
        return (
            <div className="GameBoard bg-info" style={this.props.style}>
                {
                    this.props.board.map((row, y) => (
                        <div className="row" key={y}>
                            {
                                row.map((card, x) => (
                                    <div className="col-3" key={x}>
                                        <Card {...card} onClick={() => this.flipCard(card)} />
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    }
}

const boardDimensions = { x: 4, y: 3 };

class GameOne extends React.Component {
    constructor(props) {
        super(props)
        this.setGameData = this.setGameData.bind(this);
        this.startTimeout = this.startTimeout.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.generateBoard = this.generateBoard.bind(this);
        this.getInitialState = this.getInitialState.bind(this);
        this.state = this.getInitialState();
        this.startTimeout();
    }

    getInitialState() {
        return {
            board: this.generateBoard(),
            gameData: {
                flipped: [],
                flipCount: 0,
                playerTurn: 1,
                end: false,
                winner: 0,
                timeout: 5,
                'player-1': { score: 0 },
                'player-2': { score: 0 }
            }
        };
    }

    generateBoard() {
        const cardImages = [
            require('./images/0.png'),
            require('./images/1.png'),
            require('./images/2.png'),
            require('./images/3.png'),
            require('./images/4.png'),
            require('./images/5.png'),
            require('./images/0.png'),
            require('./images/1.png'),
            require('./images/2.png'),
            require('./images/3.png'),
            require('./images/4.png'),
            require('./images/5.png')
        ];

        cardImages.sort(() => Math.random() - 0.5);
        let board = new Array(boardDimensions.y);
        for (var y = 0; y < board.length; y++) {
            board[y] = new Array(boardDimensions.x);
            for (var x = 0; x < board[y].length; x++) {
                board[y][x] = {
                    image: cardImages.pop(),
                    flipped: false,
                    y,
                    x
                };
            }
        }
        return board;
    }

    setGameData(fun, callback) {
        this.setState(fun, callback);
    }

    startTimeout() {
        this.interval = setInterval(() => {
            if (this.state.gameData.end) return clearInterval(this.interval);
            if (this.state.gameData.timeout === 0) {
                this.setState(state => {
                    let newState = Object.assign({}, state);
                    if (newState.gameData.flipped[0]) {
                        newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped = !newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped;
                    }
                    if (newState.gameData.flipped[1]) {
                        newState.board[newState.gameData.flipped[1].y][newState.gameData.flipped[1].x].flipped = !newState.board[newState.gameData.flipped[0].y][newState.gameData.flipped[0].x].flipped;
                    }
                    newState.gameData.playerTurn = state.gameData.playerTurn === 1 ? 2 : 1;
                    newState.gameData.timeout = 5;
                    newState.gameData.flipped = [];
                    newState.gameData.flipCount = 0;
                    return newState;
                });
            }
            else {
                this.setState(state => {
                    return {
                        gameData: {
                            ...state.gameData,
                            timeout: state.gameData.timeout - 1
                        }
                    }
                });
            }
        }, 1000)
    }

    resetGame() {
        this.setState(this.getInitialState());
        clearInterval(this.interval);
        this.startTimeout();
    }

    render() {
        return (
            < div className="container-fluid p-0" >
                <div className="bg-warning col-md-12 pt-4" style={{ height: '30vh' }}>
                    <h1 className="text-center text-white mb-5">Memorama</h1>
                    <div className="card container p-5">
                        <div className="App container d-flex align-items-center flex-column">
                            <GameBoard
                                updateStore={this.setGameData}
                                board={this.state.board}
                                gameData={this.state.gameData}
                                style={{ 'maxWidth': (window.innerHeight - 60) + 'px' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-info" style={{ height: '70vh' }}>

                </div>
            </div >

        );
    }
}

export default GameOne;
