import React, { useState } from 'react'
import HeroAuth from '../../components/module/HeroAuth'
import FormContainer from '../../components/module/FormContainer'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import api from '../../configs/api'

const Login = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: '',
    password:'',
  })

  const handleLogin = (e) => {
    e.preventDefault()
    // console.log(form);
    api.post('/auth/login', {
      email: form.email,
      password: form.password,
    })
      .then((res) => {
        const {token, refreshToken, nama} = res.data.data
        localStorage.setItem('token',token)
        localStorage.setItem('refreshToken',refreshToken)
        alert(`Login berhasil. Selamat datang ${nama}`)
        navigate('/home')
      })
      .catch((err) => {
        console.log(err.response);
        alert('Anda gagal login')
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
            <HeroAuth>Login</HeroAuth>
          </div>

          <div className='flex flex-col basis-1/2'>
            <FormContainer formTitle='Login' formDescription='Login yuk'>
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
              </div>
              <div className="flex flex-col gap-4">
                <Button onClick={handleLogin}>Daftar</Button>
                <p className="text-center font-normal text-base text-[#1F2A36]">Anda belum punya akun? <Link className="text-[#FBB017]" to="/register">Daftar disini</Link></p>
              </div>
            </FormContainer>
          </div>

        </div>
      </div >

    </div >
  )
}

export default Login