import React from 'react'
import { FaExclamationTriangle } from "react-icons/fa";
import { FaCircleInfo, FaCircleXmark, FaCircleCheck } from "react-icons/fa6";
import { BannerContext } from './Banner';

export default function BannerIcon() {

    const { type } = React.useContext(BannerContext)

    console.log('icon type: ',type)

    function getIcon(type) {
        if (type === 'success') {
            return <FaCircleCheck />
        } else if (type === 'warning') {
            return <FaExclamationTriangle />
        } else if (type === 'error') {
            return <FaCircleXmark />
        } else {
            return <FaCircleInfo />
        }
    }

    return (
        <div className="banner-icon">
            {getIcon(type)}
        </div>
    )
}