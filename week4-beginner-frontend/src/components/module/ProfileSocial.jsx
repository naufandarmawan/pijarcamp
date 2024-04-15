import React from 'react'
import SocialMedia from '../base/Socials'
import EmailIcon from '../../assets/grey-mail.svg'
import InstagramIcon from '../../assets/grey-instagram.svg'
import PhoneIcon from '../../assets/grey-phone.svg'
import LinkedinIcon from '../../assets/grey-linkedin.svg'


const Social = () => {
  return (
    <div className="flex flex-col gap-6 font-normal text-sm leading-5 text-[#9EA0A5]">
      <SocialMedia></SocialMedia>
      <div className="flex items-center gap-5"><img className="w-6"
        src={InstagramIcon} alt="" />
        <p>martabat_jaya</p>
      </div>
      <div className="flex items-center gap-5"><img className="w-6"
        src={PhoneIcon} alt="" />
        <p>0821-8190-1821</p>
      </div>
      <div className="flex items-center gap-5"><img className="w-6"
        src={LinkedinIcon} alt="" />
        <p>Martabat Jaya Abadi</p>
      </div>
    </div>
  )
}

export default Social