import React from "react";
import { BiSolidQuoteAltLeft } from "react-icons/bi";


export default function TestimonialWithImage({imageSrc, imageAlt, children}) {

    
    return (
        <div 
        className="testimonial-with-image-container"
        >
            <img src={imageSrc} alt={imageAlt ? imageAlt : ''} />
            <div className="testimonial-text">
                <BiSolidQuoteAltLeft className="quote-icon"/>
                {children}
            </div>
        </div>
    )
}