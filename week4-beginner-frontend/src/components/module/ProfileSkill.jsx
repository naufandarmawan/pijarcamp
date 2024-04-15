import React from 'react'
import Tag from '../base/Skills'
import SocialMedia from '../base/Socials'
import EmailIcon from '../../assets/grey-mail.svg'
import InstagramIcon from '../../assets/grey-instagram.svg'
import PhoneIcon from '../../assets/grey-phone.svg'
import LinkedinIcon from '../../assets/grey-linkedin.svg'

const Skill = () => {
    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-[22px] leading-6 text-[#1F2A36]">Skill</h3>
            <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                <Tag>Phyton</Tag>
                <Tag>Laravel</Tag>
                <Tag>Golang</Tag>
                <Tag>JavaScript</Tag>
                <Tag>PHP</Tag>
                <Tag>HTML</Tag>
                <Tag>C++</Tag>
                <Tag>Kotlin</Tag>
                <Tag>Swift</Tag>
            </ul>
        </div>
    )
}

export default Skill