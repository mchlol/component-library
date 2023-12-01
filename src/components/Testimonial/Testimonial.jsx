import React from "react";
import dotBg from '../../assets/dot-bg.png';

export default function Testimonial({children}) {

    const styles = {
        backgroundImage: `url(${dotBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'bottom left',
        backgroundSize: '120px 140px'
    }
    // no image
    return (
        <div 
        className="testimonial-container flex-center"
        style={styles}
        >
            <div className="testimonial flex-center">
                {children}
            </div>
        </div>
    )
}