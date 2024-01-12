import { useState } from "react";
import Card from "./Card"
import "../Carousel.css";


/**
 * Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - images: array of image sources
 *
 * State:
 * - currCardIdx: integer for the current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ images }) {
    const [currCardIdx, setCurrCardIdx] = useState(0);

    const currImageSrc = images[currCardIdx].src;
    const total = images.length;

    // Increments currCardIdx state by 1
    function goForward() {
        if (currCardIdx !== images.length - 1) {
            setCurrCardIdx(currCardIdx + 1);
        }
    }

    // Increments currCardIdx state by -1
    function goBackward() {
        if (currCardIdx !== 0) {
            setCurrCardIdx(currCardIdx - 1);
        }
    }

    return (
        <div className="Carousel">
            <div className="Carousel-main">
                {currCardIdx !== 0 && (
                    <i className="bi bi-arrow-left-circle" onClick={goBackward} />
                )}
                <Card
                    src={currImageSrc}
                    currNum={currCardIdx + 1}
                    totalNum={total}
                />
                {currCardIdx !== images.length - 1 && (
                    <i className="bi bi-arrow-right-circle" onClick={goForward} />
                )}
            </div>
        </div>
    );
}

export default Carousel;
