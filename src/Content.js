import { useScroll } from "@use-gesture/react";

export default function Content( {changeScrollDistanceFromTop} ) {
    const bind = useScroll(() => {
        const element  = document.getElementById("main");
        changeScrollDistanceFromTop(element.scrollTop / window.innerHeight);
      })

    return(
        <div {...bind()} id='main'>
            <div className='element left-first' id='name'>
                <p>MACIEJ TRZĄSALSKI</p>
                <p>Room Portfolio</p>
            </div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element right-first'>
                <p>Software Developer</p>
                <p>Hobby 3d Artist</p>
                <p>Tech Entusiast</p>
            </div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
            <div className='element'></div>
        </div>
    );
}
