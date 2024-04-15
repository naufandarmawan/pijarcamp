import React from 'react'
import PurpleLogo from '../../assets/purple-logo.svg'
import { Link, useLocation } from 'react-router-dom'
import GreyBell from '../../assets/grey-bell.svg'
import GreyMail from '../../assets/grey-mail.svg'
import Person1 from '../../assets/person-1.png'


const NavBar = () => {
    const preLogin =
        <div className="px-[150px] py-8 bg-white max-lg:p-8">
            <div className='container mx-auto flex justify-between items-center'>
                <img className="h-[35px]" src={PurpleLogo} alt="" />
                <div className="flex gap-4">
                    <Link to='/login'><button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-[#5E50A1]">Masuk</button></Link>
                    <Link to='/register'><button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-white bg-[#5E50A1]">Daftar</button></Link>
                </div>
            </div>
        </div>

    const landingPostLogin =
        <div className="px-[150px] py-8 bg-white max-lg:p-8">
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex gap-24 items-center'>
                    <img className="h-[35px] " src={PurpleLogo} alt="" />
                    <Link to='/home' className='font-semibold text-lg leading-7 text-[#1F2A36]'>Home</Link>
                </div>
                <div className="flex gap-4">
                    <Link to='/talent/profile'><button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-white bg-[#5E50A1]">Profile</button></Link>
                </div>
            </div>
        </div>

    const postLogin =
        <div className="px-[150px] py-8 bg-white max-lg:p-8">
            <div className='container mx-auto flex justify-between items-center'>
                <img className="h-[35px] " src={PurpleLogo} alt="" />
                <div className="flex gap-10">
                    <img src={GreyBell} />
                    <img src={GreyMail} />
                    <Link to='/talent/profile'><img className='h-[32px]' src={Person1} /></Link>
                </div>
            </div>
        </div>


    const getLocation = useLocation();
    const token = localStorage.getItem('token');

    if (getLocation.pathname === '/' && token === false) {
        return preLogin
    } else if (getLocation.pathname === '/' && token === true) {
        return landingPostLogin
    } else {
        return postLogin
    }
}

export default NavBar