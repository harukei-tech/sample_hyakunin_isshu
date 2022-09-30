import React from 'react';
import Card from './card';
import TargetCard from './target_card';
import CardAttribute from '../../static/cardAttribute'
import Bource from '../../static/hyakunin1.json'

type PLAYER = "FIRST" | "SECOND";

type Props = {
    correctAnswer: () => void,
    wrongAnswer: () => void,
    endGame: () => void,
    shuffledIdList: Array<number>,
    // cards: Array<CardAttribute>,
}

interface BoardState {
    currentPlayer: PLAYER,
    activeCardId: number,
    cardAttributes: Array<CardAttribute>,
    displayedCardIds: Array<number>
}


class Board extends React.Component<Props, BoardState>{
    private v = 3
    private h = 3

    constructor(props: Props) {
        super(props)

        const displayedCardIds = props.shuffledIdList.slice(0, this.v * this.h)
        const activeCardId = displayedCardIds[Math.floor(Math.random() * displayedCardIds.length)];
        const cardAttributes = Bource
            // .filter(d => {
            //     return displayedIds.includes(d.n)
            // })
            .map(d => {
                return new CardAttribute(d, activeCardId === d.id)
            })
        console.log(cardAttributes)

        this.state = {
            currentPlayer: "FIRST",
            activeCardId: activeCardId,
            cardAttributes: cardAttributes,
            displayedCardIds: displayedCardIds
        }
    }

    nextCard() {
        let displayedCardIds = this.state.displayedCardIds.filter((v, index) => this.state.activeCardId !== v)
        let cardAttributes = this.state.cardAttributes.slice()
        cardAttributes[this.state.activeCardId - 1].remove()

        if(displayedCardIds.length === 0) {
            this.setState({
                currentPlayer: "FIRST",
                activeCardId: this.state.activeCardId,
                cardAttributes: cardAttributes,
                displayedCardIds: displayedCardIds,
            })
            return
        }

        const activeCardId = displayedCardIds[Math.floor(Math.random() * displayedCardIds.length)];
        cardAttributes[activeCardId - 1].activate()

        this.setState({
            currentPlayer: "FIRST",
            activeCardId: activeCardId,
            cardAttributes: cardAttributes,
            displayedCardIds: displayedCardIds,
        })
    }

    wrongAnswer(id:number) {
        if(this.state.cardAttributes[id - 1].isRemoved()) {
            return
        }
        this.props.wrongAnswer()
    }

    correctAnswer() {
        this.props.correctAnswer()
        this.nextCard()
        if(this.state.displayedCardIds.length === 1) {
            this.props.endGame()
        }
    }

    renderCard(id: number) {
        return this.state.cardAttributes[id - 1].isActive()
            ? <TargetCard key={id} cardAttribute={this.state.cardAttributes[id - 1]} onClick={() => this.correctAnswer()} />
            : <Card key={id} cardAttribute={this.state.cardAttributes[id - 1]} onClick={() => this.wrongAnswer(id)} />
    }

    render() {
        return (
            <div>
                {
                    this.props.shuffledIdList.map((id, index) => {
                        return this.renderCard(id)
                    })
                }
            </div>
        )
    }
}

export default Board