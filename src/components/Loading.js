import React, { useEffect } from "react";
import { animated, useTrail } from "react-spring";

const Loading = () => {

    const trail = useTrail(3, {
        from: {y: -100},
        y: 0,
        loop: true,
        config: {frequency: 10, damping: 0},
        reset:true
    })

    useEffect(() => {
        console.log(trail);
    }, [trail])

    return(
        <div className="loadingContainer">
            {trail.map((props, i) => (
                <animated.div style={props} key={i} className="dot"/>
            ))}
        </div>
    )
}

export default Loading;