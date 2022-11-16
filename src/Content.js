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
            <div className='element long'></div>
            <div className='element long'></div>
            <div className='element long'></div>
            <div className='element long'></div>
            <div className='element gigalong left'>
                <p>Hi!</p>
                <p>I'm a Software Engineer from Poland who's passionate about making beautiful looking web pages.</p>
                <p>I've been working as a Software Engineer for a year and I'm looking forward to learning more.</p>
            </div>
            <div className='element gigalong'></div>
            <div className='element gigalong'></div>
            <div className='element gigalong'></div>
            <div className='element gigalong'></div>
            <div className='element gigalong right'>
                <p>All of the models on this page were made by me using Blender. This is really what my room looks like.</p>
                <p>Well only difference is that in reality I don't have that picture on the wall but I thought it looked empty.</p>
            </div>
            <div className='element gigalong'></div>
            <div className='element gigalong'></div>
            <div className='element gigalong left'>
                <p>Project heavily inspired by <a href="http://bokoko33.me">this</a> portfolio</p>
                <p>Find me on LinkedIn <a href="linkedin.com">LinkedIn</a></p>
                <p>Visit me on Github <a href="github.com">Github</a></p>
            </div>
            <div className='element gigalong'></div>
        </div>
    );
}
