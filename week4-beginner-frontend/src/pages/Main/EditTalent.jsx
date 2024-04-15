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

  useEffect(() => {
    api.get(`/workers/${id}`)
      .then((res) => {
        const result = res.data.data
        console.log(result);
        setProfile(result)
      })
      .catch((err) => {
        console.log(err.response);
      })
  }, [])

  const navigate = useNavigate()
  const handleHire = () => {
    navigate('hire')
  }

  const handleEdit = () => {
    navigate('edit')
  }

  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    phone: ''
  })

  const handleRegister = (e) => {
    e.preventDefault()
    // console.log(form);
    api.post('/workers/register', {
      email: form.email,
      password: form.password,
      name: form.name,
      phone: form.phone
    })
      .then(() => {
        alert(`Register berhasil dengan email ${form.email} dan password ${form.password}. Silakan Login`)
        navigate('/login')
      })
      .catch((err) => {
        console.log(err.response);
        alert('Anda gagal register')
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
                <div className='flex gap-[6px] items-center cursor-pointer' onClick={handleEdit}>
                  <img src={GreyEdit} className='h-[16px]' />
                  <p className='font-semibold text-[22px] text-[#9EA0A5]'>Edit</p>
                </div>
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
                  type='email'
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                  label="Nama"
                  placeholder="Masukkan nama"
                />
                <Input
                  type='email'
                  value={form.job_desk}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.domicile}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
              </FormSubContainer>

              <FormSubContainer subTitle='Skill'>
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
              </FormSubContainer>

              <FormSubContainer subTitle='Pengalaman Kerja'>
              <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
              </FormSubContainer>

              <FormSubContainer subTitle='Portfolio'>
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
              </FormSubContainer>

              <Button>Save</Button>
              <Button>Cancel</Button>
            </div>

          </div>
        </div>

        <Footer />
      </div>
  )
}

export default EditTalent