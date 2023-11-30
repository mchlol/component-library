import React from 'react'

const BannerContext = React.createContext()
export { BannerContext }

export default function Banner({children, type}) {

    let allClasses = ['banner', 'flex-center'];
    type && allClasses.push(type);

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