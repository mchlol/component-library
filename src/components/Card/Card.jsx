import React from "react";
import CardIcon from "./CardIcon";

export default function Card( {children} ) {

    return (
        <div className="card flex-center">
            {children}
        </div>
    )
};