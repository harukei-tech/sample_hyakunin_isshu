import React from 'react';
import CardAttribute from '../../static/cardAttribute'
import useSound from 'use-sound'

type Props = {
    cardAttribute: CardAttribute,
    onClick: () => void
}

type States = {
    play: any,
    stop: any
}

// class TargetCard extends React.Component<Props, States> {
//     clicked() {
//         this.state.stop()
//         this.props.onClick()
//     }

//     render() {
//         const soundfile = '/sample_hyakunin_isshu/voices/all/' + this.props.cardAttribute.getVoiceFile()
//         const [play, {stop}] = useSound(soundfile, {
//             volume: 0.2,
//             autoplay: true
//         })
//         this.setState({
//             play: play,
//             stop: stop
//         })
//         // this.state.play()
//         return (
//             <div key={this.props.cardAttribute.getId()} className="card" onClick={() => this.clicked()}>
//                 {this.props.cardAttribute.getLastedBody()}
//             </div>
//         )
//     }
// }

function clicked() {

}

const TargetCard = (props: Props) => {
    const soundfile = '/sample_hyakunin_isshu/voices/all/' + props.cardAttribute.getVoiceFile()
    const [play, {stop}] = useSound(soundfile, {
        volume: 0.2,
        autoplay: true
    })

    return (
        <div key={props.cardAttribute.getId()} className="card" onClick={() => {
            stop()
            props.onClick()
        }}>
            {props.cardAttribute.getLastedBody()}
        </div>
    )
}

export default TargetCard