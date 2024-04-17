import React, { useEffect, useState } from 'react'
import PurpleLogo from '../../assets/purple-logo.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import GreyBell from '../../assets/grey-bell.svg'
import GreyMail from '../../assets/grey-mail.svg'
import Person1 from '../../assets/person-1.png'
import api from '../../configs/api'

const NavBar = () => {

    const [myProfile, setMyProfile] = useState({})
    const [myRole, setMyRole] = useState('')

    useEffect(() => {

        api.get(`/auth/check-role`)
            .then((res) => {
                const result = res.data.data.data.role
                console.log(result);
                setMyRole(result)
            })
            .catch((err) => {
                console.log(err.response);
            })

        if (myRole === 'recruiter') {
            api.get(`/recruiters/profile`)
                .then((res) => {
                    const result = res.data.data
                    console.log(result);
                    setMyProfile(result)
                })
                .catch((err) => {
                    console.log(err.response);
                })
        } else {
            api.get(`/workers/profile`)
                .then((res) => {
                    const result = res.data.data
                    console.log(result);
                    setMyProfile(result)
                })
                .catch((err) => {
                    console.log(err.response);
                })
        }

    }, [])

    const navigate = useNavigate()
    const handleProfile = () => {
        if (myRole === 'recruiter') {
            navigate(`/company/profile/`)
        } else {
            navigate(`/talent/profile/${myProfile.id}`)
        }

    }

    const preLogin =
        <div className="px-[150px] py-8 bg-white max-lg:p-8">
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/'><img className="h-[35px]" src={PurpleLogo} alt="" /></Link>
                <div className="flex gap-4">
                    <Link to='/login'><button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-[#5E50A1]">Masuk</button></Link>
                    <Link to='/register-talent'><button
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-white bg-[#5E50A1]">Daftar</button></Link>
                </div>
            </div>
        </div>

    const landingPostLogin =
        <div className="px-[150px] py-8 bg-white max-lg:p-8">
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex gap-24 items-center'>
                    <Link to='/'><img className="h-[35px] " src={PurpleLogo} alt="" /></Link>
                    <Link to='/home' className='font-semibold text-lg leading-7 text-[#1F2A36]'>Home</Link>
                </div>
                <div className="flex gap-4">
                    <button onClick={handleProfile}
                        className="px-5 py-[10px] border border-solid border-[#5E50A1] rounded-[4px] font-bold text-sm leading-6 text-white bg-[#5E50A1]">Profile</button>
                </div>
            </div>
        </div>

    const postLogin =
        <div className="px-[150px] py-8 bg-white max-lg:p-8">
            <div className='container mx-auto flex justify-between items-center'>
                <Link to='/'><img className="h-[35px] " src={PurpleLogo} alt="" /></Link>
                <div className="flex gap-10">
                    <img src={GreyBell} />
                    <img src={GreyMail} />
                    <img className='h-[32px] rounded-full cursor-pointer' src={myProfile.photo ? myProfile.photo : Person1} onClick={handleProfile} />
                </div>
            </div>
        </div>


    const getLocation = useLocation();
    const token = localStorage.getItem('token');

    if (getLocation.pathname === '/' && token) {
        return landingPostLogin
    } else if (getLocation.pathname === '/') {
        return preLogin
    } else {
        return postLogin
    }
}

export default NavBar