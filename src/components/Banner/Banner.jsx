import React from 'react'

const BannerContext = React.createContext()
export { BannerContext }

export default function Banner({children, type}) {

    let allClasses = ['banner'];
    type && allClasses.push(type);

    console.log('banner type: ',type)
    console.log(allClasses.join(' '))

    return (
        <BannerContext.Provider value={ {type}} >
            <div className={allClasses.join(' ')}>
                <Banner.Icon />
                <div>
                    {children}
                </div>
            </div>
        </BannerContext.Provider>
    )
}