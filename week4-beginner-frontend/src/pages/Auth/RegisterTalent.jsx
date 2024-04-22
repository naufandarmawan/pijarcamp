import React, { useState } from 'react'
import HeroAuth from '../../components/module/HeroAuth'
import FormContainer from '../../components/module/FormContainer'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import api from '../../configs/api'


const RegisterTalent = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password:'',
    name:'',
    phone:''
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
      .then((res) => {
        console.log(res.response);
        alert(`Register berhasil dengan email ${form.email} dan password ${form.password}. Silakan Login`)
        navigate('/login')
      })
      .catch((err) => {
        console.log(err.response);
        const error = err.response.data
        alert(`Anda gagal register - ${error.message}`)
      })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="bg-[#F6F7F8]">

      <div className="px-[75px] py-[39px]">
        <div className='container mx-auto flex gap-[70px]'>

          <div className='flex flex-col basis-1/2'>
            <HeroAuth>Temukan developer berbakat & terbaik di berbagai bidang keahlian</HeroAuth>
          </div>

          <div className='flex flex-col basis-1/2'>
            <FormContainer formTitle='Halo, Pewpeople' formDescription='Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.'>
              <div className="flex flex-col gap-4">
              <Input
                  type='text'
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                  label="Name"
                  placeholder="Masukkan nama"
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
                  type='tel'
                  value={form.phone}
                  onChange={handleChange}
                  name="phone"
                  label="Phone"
                  placeholder="Masukkan phone"
                />
                <Input
                  type='password'
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  placeholder="Masukkan password"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button variant='primary-yellow' onClick={handleRegister} text='Daftar'/>
                <p className="text-center font-normal text-base text-[#1F2A36]">Anda sudah punya akun? <Link className="text-[#FBB017]" to="/login">Masuk disini</Link></p>
              </div>
            </FormContainer>
          </div>

        </div>
      </div >

    </div >
  )
}

export default RegisterTalent