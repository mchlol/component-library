import React from "react";

export default function TestimonialWithImage({imageSrc, imageAlt, children}) {

    
    return (
        <div 
        className="testimonial-with-image-container"
        >
            <img src={imageSrc} alt={imageAlt ? imageAlt : ''} />
            <div className="testimonial-text">
                {children}
            </div>
        </div>
    )
}