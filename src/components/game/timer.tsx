import CardAttribute from '../../static/cardAttribute'
import { useStopwatch } from "react-timer-hook";

type Props = {
    stop: boolean
}


const Timer = (props: Props) => {
    let option = {
        autoStart: props.stop ? false: true
    }
    const { seconds, minutes, hours, days, isRunning, start, pause, reset  } =
        useStopwatch(option);

    if(props.stop && isRunning) {
        pause()
    }

    return (
        <div>
            <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
            <span>{seconds}</span>
        </div>
    )
}

export default Timer