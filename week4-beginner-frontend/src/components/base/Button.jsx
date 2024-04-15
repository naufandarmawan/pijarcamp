import React from 'react'

const Button = ({ children='Button', className, ...props }) => {
    return (
        <button {...props} className={`p-[15px] bg-[#FBB017] rounded-[4px] font-bold text-base leading-5 text-[#FFFFFF] ${className}`}>{children}</button>
    )
}

export default Button