import React from 'react';
import Carousel from './Carousel';
import photos from '../images/photography/photos';
import designs from '../images/design/designs';
const Art = () => {
    return (
        <div>
            <h3>Photography</h3>
            <Carousel images={photos} />

            <h3>Design</h3>
            <Carousel images={designs} />
        </div>
    );
};

export default Art;
