import useSound from 'use-sound'
type Props = {
    filename: string
}

const Voice = (props: Props) => {
    const soundfile = '/sample_hyakunin_isshu/voices/all/' + props.filename
    console.log(soundfile)
    const [play] = useSound(soundfile, {volume: 0.2})
    play()

    return (
        <div></div>
    )
}

export default Voice