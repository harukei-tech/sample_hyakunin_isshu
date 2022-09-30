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

    return (
        <div key={props.cardAttribute.getId()} className="card w-1/3" onClick={() => {
            stop()
            props.onClick()
        }}>
                <p className='flex-auto'>
                    {props.cardAttribute.getLine1Body()}
                </p>
                <p className='flex-auto'>
                    {props.cardAttribute.getLine2Body()}
                </p>
                <p className='flex-auto'>
                    {props.cardAttribute.getLine3Body()}
                </p>
        </div>
    )
}

export default TargetCard