import CardAttribute from '../../static/cardAttribute'
import useSound from 'use-sound'

type Props = {
    cardAttribute: CardAttribute,
    onClick: () => void
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