import React from "react";
import "../Card.css"


/** Card: displays image.
 * 
 * Props:
 * - src: string for the image link
 * - currNum: integer for what image we're on
 * - totalNum: integer for how many images are in the collection
 * 
 * State:
 * - none
 * 
 * App --> Carousel --> Card
 */

function Card({ src, currNum, totalNum }) {

    return (
        <div className="Card">
            <img className="Card-image" src={src} />
            <small className="Card-small">
                Image {currNum} of {totalNum}.
            </small>
        </div>
    );
}

export default Card;