import React, { useState } from 'react'
import HeroAuth from '../../components/module/HeroAuth'
import FormContainer from '../../components/module/FormContainer'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import api from '../../configs/api'


const Register = () => {
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
    <div className="bg-[#F6F7F8]">

      <div className="px-[75px] py-[39px]">
        <div className='container mx-auto flex gap-[70px]'>

          <div className='flex flex-col basis-1/2'>
            <HeroAuth>Register</HeroAuth>
          </div>

          <div className='flex flex-col basis-1/2'>
            <FormContainer formTitle='Register' formDescription='Register yuk'>
              <div className="flex flex-col gap-4">
                <Input
                  type='email'
                  value={form.email}
                  onChange={handleChange}
                  name="email"
                  label="Email"
                  placeholder="Masukkan email"
                />
                <Input
                  type='password'
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  placeholder="Masukkan password"
                />
                <Input
                  type='text'
                  value={form.name}
                  onChange={handleChange}
                  name="name"
                  label="Name"
                  placeholder="Masukkan nama"
                />
                <Input
                  type='tel'
                  value={form.phone}
                  onChange={handleChange}
                  name="phone"
                  label="Phone"
                  placeholder="Masukkan phone"
                />
              </div>
              <div className="flex flex-col gap-4">
                <Button onClick={handleRegister}>Daftar</Button>
                <p className="text-center font-normal text-base text-[#1F2A36]">Anda belum punya akun? <Link className="text-[#FBB017]" to="/login">Daftar disini</Link></p>
              </div>
            </FormContainer>
          </div>

        </div>
      </div >

    </div >
  )
}

export default Register