import React from "react";
import CardIcon from "./CardIcon";

const CardContext = React.createContext();
export { CardContext };

export default function Card( {children} ) {

    return (
        <CardContext.Provider>
            <div className="card">
                {children}
            </div>
        </CardContext.Provider>
    )
};