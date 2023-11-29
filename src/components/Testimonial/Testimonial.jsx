import React from "react";
import { RxSlash } from "react-icons/rx";
import { PiTreePalm } from "react-icons/pi";
import Pattern from "./Pattern";

export default function Testimonial() {
    // no image
    return (
        <div className="testimonial-container">
            <div className="testimonial">
                <div className="testimonial-logo">
                    <PiTreePalm /> Workcation
                </div>
                <div className="testimonial-text">
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                </div>
                <div className="testimonial-info">
                    <span className="testimonial-name">May Andersons</span>
                    <RxSlash className="testimonial-divider"/>
                    <span className="testimonial-company">
                        Workcation, CTO
                    </span>
                </div>
                <Pattern />
            </div>
        </div>
    )
}