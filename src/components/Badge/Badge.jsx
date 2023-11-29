import React from 'react'

export default function Badge( {children, ...rest} ) {

    let allClasses = ['badge'];
    rest.shape && allClasses.push(rest.shape);
    rest.color && allClasses.push(rest.color);

    return (
        <div className={allClasses.join(' ')}>
            {children}
        </div>
    )
}