import React from 'react'
import Board from './board'

type GAME_STATE = 'START' | 'IN_GAME' | 'END'

interface GameState {
    scene: GAME_STATE,
    point: number,
    shuffledIdList: Array<number>
    // cards: Array<CardAttribute>,
    // displayedIds: Array<number>

}

const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}



class Game extends React.Component<{}, GameState>{
    private totalCard = 9

    getRandomIds(count: number) {
        //1~100の値を持つ配列を作ってシャッフル
        const ids = [...Array(100)].map((_, i) => i + 1)
        const shuffledIds = shuffle(ids)

        //必要な個数だけに切り取る
        return shuffledIds.slice(-count)
    }

    constructor(props: any) {
        super(props)
        // const displayedIds = this.getRandomIds(this.totalCard)
        // console.log(displayedIds)
        // const displayedCards = Source
        //     .filter(d => {
        //         return displayedIds.includes(d.n)
        //     })
        //     .map(d => {
        //         return new CardAttribute(d.n, d.bodyKana)
        //     })

        // console.log(displayedCards)

        const shuffledIdList = this.getRandomIds(this.totalCard)

        this.state = {
            scene: 'START',
            point: 0,
            shuffledIdList: shuffledIdList
            // cards: displayedCards,
            // displayedIds: displayedIds
        }
    }

    cardTouchAction(index: number) {

    }

    increasePoint() {
        this.setState({
            scene: this.state.scene,
            point: this.state.point + 1,
            shuffledIdList: this.state.shuffledIdList
        })
    }

    decreasePoint() {
        this.setState({
            scene: this.state.scene,
            point: this.state.point - 1,
            shuffledIdList: this.state.shuffledIdList
        })
    }

    startGame() {
        this.setState({
            scene: 'IN_GAME',
            point: this.state.point,
            shuffledIdList: this.state.shuffledIdList,
        })
    }

    render() {
        switch (this.state.scene) {
            case 'START':
                return (
                    <div>
                        <ol><button onClick={() => this.startGame()}>start!</button></ol>
                    </div>
                )
            case 'IN_GAME':
                return (
                    <div className="game">
                        <div className="game-info">
                            <div>point: {this.state.point}</div>
                        </div>
                        <div className="game-board">
                            <Board correctAnswer={() => this.increasePoint()} wrongAnswer={() => this.decreasePoint()} shuffledIdList={this.state.shuffledIdList} />
                        </div>
                    </div>
                )
            case 'END':
                return (
                    <div></div>
                )
        }
    }
}

export default Game