import React from 'react'
import NavBar from '../../components/module/NavBar'
import Footer from '../../components/module/Footer'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import TalentProfile from '../../components/module/Profile'
import TalentSkill from '../../components/module/ProfileSkill'

const HireTalent = () => {
  return (
    <div className="bg-[#F6F7F8]">

      <NavBar />

      <div className='px-[150px] pt-[70px] pb-[210px]'>
        <div className="flex gap-[30px] container mx-auto">
          
          <div className="flex flex-col basis-4/12 gap-[34px] bg-[#FFFFFF] p-[30px] items-center h-fit rounded-lg ">
            <TalentProfile />
            <TalentSkill />
          </div>

          <div className="flex flex-col basis-8/12 gap-[52px] px-[30px] h-fit">
            <div className="flex flex-col gap-4">
              <h1 className="font-semibold text-[32px] text-[#1F2A36]">Hubungi Lous Tomlinson</h1>
              <p className="font-normal text-lg text-[#46505C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <form className="flex flex-col gap-[52px]" action="">
              <div className="flex flex-col gap-8">
                <Input />
                <Input />
                <Input />
                <Input />
                <Input />
              </div>
              <Button>Piw Profile</Button>
            </form>
          </div>

        </div>
      </div>

      <Footer />

    </div>
  )
}

export default HireTalent