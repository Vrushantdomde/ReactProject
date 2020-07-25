import React from 'react';
import Clock from 'react-digital-clock';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

var NpmUse = () => {
    return (
        <>
            <Clock />
            <CountdownCircleTimer
                isPlaying
                duration={50}
                colors={[
                    ['#004777', 0.33],
                    ['#F7B801', 0.33],
                    ['#A30000', 0.33],
                ]}
            >
                {({ remainingTime }) => remainingTime}
            </CountdownCircleTimer>

        </>
    )
}

export default NpmUse;