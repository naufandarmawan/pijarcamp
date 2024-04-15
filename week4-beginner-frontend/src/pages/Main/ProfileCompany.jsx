import React from 'react'
import Person1 from '../../assets/person-1.png'
import GreyPin from '../../assets/grey-pin.svg'
import WhiteEdit from '../../assets/white-edit.svg'
import NavBar from '../../components/module/NavBar'
import Footer from '../../components/module/Footer'
import Social from '../../components/module/ProfileSocial'
import Profile from '../../components/module/Profile'


const ProfileCompany = () => {
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
            <img className="w-[150px]" src={Person1} alt="" />
          </div>
          <div className="flex flex-col gap-[34px] bg-[#FFFFFF] pt-[95px] pb-[190px] px-[250px] items-center h-fit">
            <div className="flex flex-col gap-5 items-center text-center">
              <div className='flex flex-col gap-[13px] items-center'>
                <h2 className="font-semibold text-[22px] text-[#1F2A36]">Louis Tomlinson
                </h2>
                <p className="font-normal text-sm leading-6 text-[#1F2A36]">Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum erat orci.</p>
                <div className="flex gap-[11px]"><img src={GreyPin}
                  alt="" />
                  <p className="font-normal text-sm leading-5 text-[#9EA0A5]">Purwokerto, Jawa Tengah</p>
                </div>
                <p className="font-normal text-sm leading-5 text-[#9EA0A5]">Freelance</p>
              </div>
              <p className="font-normal text-sm leading-6 text-[#9EA0A5]">Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Vestibulum erat orci, mollis nec gravida
                sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
              <button className="py-[15px] px-[90px] bg-[#5E50A1] rounded-[4px] font-bold text-base leading-5 text-[#FFFFFF]">Edit profile</button>
            </div>
            <Profile />
            <Social />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default ProfileCompany