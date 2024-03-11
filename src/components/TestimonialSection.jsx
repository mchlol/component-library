import React from "react";
import Testimonial from "./Testimonial"
import { PiTreePalm } from "react-icons/pi";
import TestimonialWithImage from "./TestimonialWithImage/TestimonialWithImage"
import Image from '../assets/christina.jpg'

export default function TestimonialSection() {
    return (
    <section className="section--testimonial">
        <div className="section-content">
            <h2>Testimonial</h2>
            <h3>Plain</h3>
            <div className="flex-center">
                <Testimonial>
                    <Testimonial.Logo>
                        <PiTreePalm /> WorkCation
                    </Testimonial.Logo>
                    <Testimonial.Text>
                        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
                    </Testimonial.Text>
                    <Testimonial.Source>
                        May Anderson / Workcation, CTO
                    </Testimonial.Source>
                </Testimonial>
            </div>
            <hr />
            <h3>With image</h3>
            <div className="flex-center">
                <TestimonialWithImage imageSrc={Image}>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.</p>
                    <small>May Anderson / Workcation, CTO</small>
                </TestimonialWithImage>
            </div>
        </div>

      </section>
    )
}