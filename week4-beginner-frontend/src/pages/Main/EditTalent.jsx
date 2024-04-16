import Person1 from '../../assets/person-1.png'
import InstagramIcon from '../../assets/grey-instagram.svg'
import PhoneIcon from '../../assets/grey-phone.svg'
import LinkedinIcon from '../../assets/grey-linkedin.svg'

import React, { useEffect, useState } from 'react'
import NavBar from '../../components/module/NavBar'
import Footer from '../../components/module/Footer'

import ProfileImage from '../../components/base/BaseProfile/ProfileImage'
import ProfileName from '../../components/base/BaseProfile/ProfileName'
import ProfileJob from '../../components/base/BaseProfile/ProfileJob'
import ProfileLocation from '../../components/base/BaseProfile/ProfileLocation'
import ProfileStatus from '../../components/base/BaseProfile/ProfileStatus'
import ProfileDescription from '../../components/base/BaseProfile/ProfileDescription'

import ProfileTab from '../../components/module/ProfileTab'

import Tag from '../../components/base/Skills'
import SocialMedia from '../../components/base/Socials'
import Button from '../../components/base/Button'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../configs/api'
import GreyEdit from '../../assets/grey-edit.svg'
import FormSubContainer from '../../components/base/FormSubContainer'
import Input from '../../components/base/Input'


const EditTalent = () => {
  const { id } = useParams()
  const [profile, setProfile] = useState({})
  const [form, setForm] = useState({
    name: '',
    job_desk: '',
    domicile: '',
    workplace: '',
    description: '',
  });

  useEffect(() => {
    api.get(`/workers/${id}`)
      .then((res) => {
        const result = res.data.data
        console.log(result);
        setProfile(result)
        setForm({
          name: result.name || '',
          job_desk: result.job_desk || '',
          domicile: result.domicile || '',
          workplace: result.workplace || '',
          description: result.description || '',
        })
      })
      .catch((err) => {
        console.log(err.response);
      })
  }, [])

  const navigate = useNavigate()
  const handleCancel = () => {
    navigate(`/talent/profile/${id}`)
  }

  const handleSave = (e) => {
    e.preventDefault()
    // console.log(form);
    api.put('/workers/profile', form)
      .then((res) => {
        console.log(res)
        navigate(`/talent/profile/${id}`)
      })
      .catch((err) => {
        console.log(err.response);
        alert('Gagal untuk memperbarui data')
      })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='bg-[#F6F7F8]'>

      <NavBar />
      <div className='bg-[#5E50A1] h-[361px] mb-[-361px] '></div>

      <div className='px-[150px] pt-[70px] pb-[210px]'>
        <div className="flex gap-[30px] container mx-auto">

          <div className="flex flex-col basis-4/12 gap-[34px] bg-[#FFFFFF] p-[30px] h-fit rounded-lg">
            <div className="flex flex-col gap-5 items-center">
              <ProfileImage image={profile.photo} />
              <div className='flex flex-col gap-[13px] w-full'>
                <ProfileName name={profile.name} />
                <ProfileJob job={profile.job_desk} />
                <ProfileLocation location={profile.domicile} />
                <ProfileStatus status={profile.workplace} />
              </div>
              <ProfileDescription>{profile.description}</ProfileDescription>
            </div>
          </div>

          <div className="flex flex-col basis-8/12 gap-[34px] h-fit">
            <FormSubContainer subTitle='Data diri'>
              <Input
                type='text'
                value={form.name}
                onChange={handleChange}
                name="name"
                label="Nama lengkap"
                placeholder="Masukan nama lengkap"
              />
              <Input
                type='text'
                value={form.job_desk}
                onChange={handleChange}
                name="job_desk"
                label="Job desk"
                placeholder="Masukan job desk"
              />
              <Input
                type='text'
                value={form.domicile}
                onChange={handleChange}
                name="domicile"
                label="Domisili"
                placeholder="Masukan domisili"
              />
              <Input
                type='text'
                value={form.workplace}
                onChange={handleChange}
                name="workplace"
                label="Tempat kerja"
                placeholder="Masukan tempat kerja"
              />
              <Input
                type='text'
                value={form.description}
                onChange={handleChange}
                name="description"
                label="Deskripsi singkat"
                placeholder="Tuliskan deskripsi singkat"
              />
            </FormSubContainer>

            <FormSubContainer subTitle='Skill'>
              <Input />
            </FormSubContainer>

            <FormSubContainer subTitle='Pengalaman Kerja'>
              <Input />
              <Input />
              <Input />
              <Input />
            </FormSubContainer>

            <FormSubContainer subTitle='Portfolio'>
              <Input />
              <Input />
              <Input />
              <Input />
            </FormSubContainer>

            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleCancel}>Cancel</Button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default EditTalent