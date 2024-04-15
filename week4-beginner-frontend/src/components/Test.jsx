import React from 'react'
import PurpleLogo from '../assets/purple-logo.svg'
import { Link, useLocation } from 'react-router-dom'


const Test = () => {

    const getLocation = useLocation();

    const NavLanding =
        <div className="px-[150px] py-8 bg-red-600 max-lg:p-8">
            <div className='container mx-auto flex justify-between items-center'>
                <img className="h-[35px]" src={PurpleLogo} alt="" />
                <div className="flex gap-4">
                    <Link to='/login'><button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-[#5E50A1]">Masuk</button></Link>
                    <button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-white bg-[#5E50A1]">Daftar</button>
                </div>
            </div>
        </div>

    const NavNotLanding =
        <div className="px-[150px] py-8 bg-blue-600 max-lg:p-8">
            <div className='container mx-auto flex justify-between items-center'>
                <img className="h-[35px]" src={PurpleLogo} alt="" />
                <div className="flex gap-4">
                    <Link to='/login'><button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-[#5E50A1]">Masuk</button></Link>
                    <button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-white bg-[#5E50A1]">Daftar</button>
                </div>
            </div>
        </div>

    if (getLocation.pathname === "/") {
        return NavLanding
    }
    return NavNotLanding
}

export default Test