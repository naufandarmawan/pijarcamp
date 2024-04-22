import React, { useEffect, useState } from 'react'
import Person1 from '../../assets/person-1.png'
import GreyPin from '../../assets/grey-pin.svg'
import WhiteEdit from '../../assets/white-edit.svg'
import NavBar from '../../components/module/NavBar'
import Footer from '../../components/module/Footer'
import api from '../../configs/api'
import { useNavigate } from 'react-router-dom'
import SocialMedia from '../../components/base/Socials'

import EmailIcon from '../../assets/grey-mail.svg'
import InstagramIcon from '../../assets/grey-instagram.svg'
import PhoneIcon from '../../assets/grey-phone.svg'
import LinkedinIcon from '../../assets/grey-linkedin.svg'

import ProfileImage from '../../components/base/BaseProfile/ProfileImage'
import ProfileName from '../../components/base/BaseProfile/ProfileName'
import ProfileJob from '../../components/base/BaseProfile/ProfileJob'
import ProfileLocation from '../../components/base/BaseProfile/ProfileLocation'
import ProfileStatus from '../../components/base/BaseProfile/ProfileStatus'
import ProfileDescription from '../../components/base/BaseProfile/ProfileDescription'
import Button from '../../components/base/Button'



const ProfileCompany = () => {
  const [myProfile, setMyProfile] = useState({})

  useEffect(() => {

    api.get(`/recruiters/profile`)
      .then((res) => {
        const result = res.data.data
        console.log(result);
        setMyProfile(result)
      })
      .catch((err) => {
        console.log(err.response);
      })

  }, [])

  const navigate = useNavigate()
  const handleEdit = () => {
    navigate('edit')
  }

  return (
    <div className="bg-[#F6F7F8]">

      <NavBar />
      <div className="px-[150px] pt-[70px] pb-[210px] ">
        <div className="container mx-auto rounded-lg overflow-hidden">

          <div className="flex flex-col bg-[#5E50A1] px-[30px] py-[4px] h-[200px] justify-end items-end">
            <div className="flex items-center gap-[6px]"><img className="w-[16px]"
              src={WhiteEdit} alt="" />
              <p className="font-semibold text-[22px] leading-[56px] text-white">Change Background</p>
            </div>
          </div>

          <div className="flex justify-center items-center my-[-75px]">
            <ProfileImage image={myProfile.photo} />
            {/* <img className="size-[150px] rounded-full object-cover" src={myProfile.photo ? myProfile.photo : Person1} alt="" /> */}
          </div>

          <div className="flex flex-col gap-[34px] bg-[#FFFFFF] pt-[95px] pb-[190px] px-[250px] items-center h-fit">
            <div className="flex flex-col gap-5 items-center text-center">
              <div className='flex flex-col gap-[13px] items-center'>
                <ProfileName name={myProfile.company} />
                <ProfileJob job={myProfile.position} />
                <ProfileLocation location={myProfile.city} />
                {/* <h2 className="font-semibold text-[22px] text-[#1F2A36]">{myProfile.company ? myProfile.company : 'Company'}</h2> */}
                {/* <p className="font-normal text-sm leading-6 text-[#1F2A36]">{myProfile.position ? myProfile.position : 'Position'}</p>
                <div className="flex gap-[11px]"><img src={GreyPin}
                  alt="" />
                  <p className="font-normal text-sm leading-5 text-[#9EA0A5]">{myProfile.city ? myProfile.city : 'City'}</p>
                </div> */}
              </div>
              {/* <p className="font-normal text-sm leading-6 text-[#9EA0A5]">{myProfile.description ? myProfile.description : 'Description'}</p> */}
              <ProfileDescription>{myProfile.description}</ProfileDescription>
              <Button
              variant='primary-purple' 
              onClick={handleEdit}
              className='w-80'
              text='Edit profile'
              />
              {/* <button onClick={handleEdit} className="py-[15px] px-[15px] bg-[#5E50A1] rounded-[4px] font-bold text-base leading-5 text-[#FFFFFF]">Edit profile</button> */}
            </div>
            <div className="flex flex-col gap-6 font-normal text-sm leading-5 text-[#9EA0A5]">
              <SocialMedia
                image={EmailIcon}
                social={myProfile.email}
              />
              <SocialMedia
                image={InstagramIcon}
                social={myProfile.instagram}
              />
              <SocialMedia
                image={PhoneIcon}
                social={myProfile.phone}
              />
              <SocialMedia
                image={LinkedinIcon}
                social={myProfile.linkedin}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProfileCompany