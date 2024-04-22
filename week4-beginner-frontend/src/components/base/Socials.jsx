import React from 'react'
import EmailIcon from '../../assets/grey-mail.svg'
import InstagramIcon from '../../assets/grey-instagram.svg'
import GithubIcon from '../../assets/grey-github.svg'
import GitlabIcon from '../../assets/grey-gitlab.svg'
import PhoneIcon from '../../assets/grey-phone.svg'
import LinkedinIcon from '../../assets/grey-linkedin.svg'
import PhotoIcon from '../../assets/grey-photo.svg'

const SocialMedia = ({image, social}) => {
    return (
        <div className="flex items-center gap-5">
            <img className="w-6" src={image ? image : InstagramIcon} alt="" />
            <p className='font-normal text-sm leading-5 text-[#9EA0A5]'>{social ? social : 'Social Media'}</p>
        </div>
    )
}

export default SocialMedia