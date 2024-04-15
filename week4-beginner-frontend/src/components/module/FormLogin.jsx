import React from 'react'
import { Link } from 'react-router-dom'


const FormLogin = () => {
    return (
        <div className="flex flex-col gap-[52px] basis-1/2 box-border py-[106px] justify-center">
            <div className="flex flex-col gap-4">
                <h2 className="font-semibold text-[32px] text-[#1F2A36]">Halo, Pewpeople</h2>
                <p className="font-normal text-[18px] text-[#46505C]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <form className="flex flex-col gap-[24px]" action="">
                <div className="flex flex-col gap-[32px]">
                    <div className="flex flex-col gap-[4px]">
                        <label className="pl-[5px] font-normal text-xs text-[#9EA0A5]" for="">Email</label>
                        <input className="p-[15px] rounded-[4px] border border-solid border-[#E2E5ED] font-normal text-sm text-[#1F2A36] placeholder:text-[#858D96] outline-none" type="email" placeholder="Masukan alamat email" />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <label className="pl-[5px] font-normal text-xs text-[#9EA0A5]" for="">Kata Sandi</label>
                        <input className="p-[15px] rounded-[4px] border border-solid border-[#E2E5ED] font-normal text-sm text-[#1F2A36] placeholder:text-[#858D96] outline-none" type="password" placeholder="Masukan kata sandi" />
                    </div>
                </div>
                <Link className="text-end font-normal text-base text-[#1F2A36]" to="/login">Lupa kata sandi?</Link>
                <Link to='/profile'><button className=" bg-[#FBB017] p-[15px] rounded-[4px] w-full font-bold text-base leading-5 text-white" type="submit">Masuk</button></Link>
                <p className="text-center font-normal text-base text-[#1F2A36]">Anda belum punya akun? <Link className="text-[#FBB017]" to="/register">Daftar disini</Link></p>
            </form>
        </div>
    )
}

export default FormLogin