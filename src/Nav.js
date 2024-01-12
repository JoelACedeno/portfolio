import React from 'react';

function Nav() {
    // Function to handle link clicks and scroll to the corresponding section
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="Nav">
            <h2>Joel Cedeno</h2>
            <ul>
                <li onClick={() => scrollToSection('dev')}>Code</li>
                <li onClick={() => scrollToSection('art')}>Art</li>
                {/* <li onClick={() => scrollToSection('music')}>Music</li> */}
            </ul>
        </div>
    );
}

export default Nav;
