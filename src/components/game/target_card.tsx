import CardAttribute from '../../static/cardAttribute'
import useSound from 'use-sound'

type Props = {
    cardAttribute: CardAttribute,
    onClick: () => void
}


const TargetCard = (props: Props) => {
    const soundfile = '/sample_hyakunin_isshu/voices/all/' + props.cardAttribute.getVoiceFile()
    const [_, {stop}] = useSound(soundfile, {
        volume: 0.2,
        autoplay: true
    })
    let classes = "card rounded border bg-lime-500 p-3 w-1/3 "

    return (
        <div key={props.cardAttribute.getId()} className={classes} onClick={() => {
            stop()
            props.onClick()
        }}>
                <div>
                    {props.cardAttribute.getLine1Body()}
                </div>
                <div>
                    {props.cardAttribute.getLine2Body()}
                </div>
                <div>
                    {props.cardAttribute.getLine3Body()}
                </div>
        </div>
    )
}

export default TargetCard