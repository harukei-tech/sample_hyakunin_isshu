import useSound from 'use-sound'
type Props = {
    filename: string,
    be_silent: boolean
}

const Voice = (props: Props) => {
    const soundfile = '/voices/all/' + props.filename
    const [play] = useSound(soundfile, {volume: 0.2})
    play()

    return (
        <div></div>
    )
}

export default Voice