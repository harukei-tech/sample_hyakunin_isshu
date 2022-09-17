import CardAttribute from '../../static/cardAttribute'
import Voice from './voice'

type Props = {
    cardAttribute: CardAttribute
    correctAnswer: () => void
    wrongAnswer: () => void
}
type State = {
    be_silent: boolean
}


const Card = (props: Props, state:State) => {
    if(props.cardAttribute.isActive()) {
        console.log(props)
        console.log(props.cardAttribute.getVoiceFile())
        return (
            <div key={props.cardAttribute.getId()} className="card" onClick={() => props.correctAnswer()}>
                <Voice filename={props.cardAttribute.getVoiceFile()} be_silent={state.be_silent}/>
                {props.cardAttribute.getLastedBody()}
            </div>
        )
    } else {
        return (
            <div key={props.cardAttribute.getId()} className="card" onClick={() => props.wrongAnswer()}>
                {props.cardAttribute.getLastedBody()}
            </div>
        )
    }
}

export default Card