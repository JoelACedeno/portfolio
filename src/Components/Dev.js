import React from 'react';
import tuneRouletteGif from "../images/gifs/tune-roulette.gif"
import warblerGif from "../images/gifs/warbler.gif"


const Dev = () => {
    const imageStyle = {
        width: '50vw',
        height: 'auto',
        margin: '0, auto',
    };
    return (
        <div>
            <h3>Code</h3>
            <ul>
                <li>
                    <img src={tuneRouletteGif} alt="TuneRoulette GIF" style={imageStyle} />
                    <b>TuneRoulette Capstone Project (Full Stack JavaScript web app)</b>
                </li>
                <br></br>
                <li>
                    <img src={warblerGif} alt="Warbler GIF" style={imageStyle} />
                    <b>Warbler Twitter Clone (Full Stack Python web app)</b>
                </li>
                {/* <li>Others: React-Cards, React-VendingMaching, React-Magic8Ball</li>
                carousel of gifs of app usage */}
            </ul>
        </div>
    );
};

export default Dev;
