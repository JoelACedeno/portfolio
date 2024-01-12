import React from 'react';
import leavingTimeImage from '../images/photography/87DE9BD1-EA51-408A-B541-3E77526142E2.jpg';

const Music = () => {
    const imageStyle = {
        width: '30vw',
        height: 'auto',
        margin: '0, auto',

    };

    return (
        <div >
            <h3>Music</h3>
            <ul>
                <li>
                    <img src={leavingTimeImage} alt="Leaving Time" style={imageStyle} />
                    <b>Leaving Time</b>
                </li>
            </ul>
            <h4>Leaving Time Links:</h4>
            <ul>
                <li><a href="https://www.instagram.com/leavingtimeband/?hl=en">Instagram</a></li>
                <li><a href="https://open.spotify.com/artist/7uskWkK7rsdbMgE2wDU22Y?si=KPRwQMQxQyCDOWQl6D9HeA&nd=1&dlsi=d40fa80b18664fe8"> Spotify</a></li>
                <li><a href="https://music.apple.com/us/artist/leaving-time/1547997926">Apple Music</a></li>
                <li><a href="https://linktr.ee/leavingtime">More Links</a></li>

            </ul>
        </div>
    );
};

export default Music;
