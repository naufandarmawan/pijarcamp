import React from 'react'

const Input = ({label="Label", placeholder='Placeholder', className, ...props}) => {
    return (
            <div className="flex flex-col gap-1 w-full">
                {label && <label className="font-normal text-xs text-[#9EA0A5] pl-[5px]">{label}</label>}
                <input {...props} className={`p-[15px] rounded-[4px] font-normal text-sm text-[#1F2A36] placeholder:text-[#858D96] outline-none border border-[#E2E5ED] ${className}`} placeholder={placeholder} />
            </div>
    )
}

export default Input