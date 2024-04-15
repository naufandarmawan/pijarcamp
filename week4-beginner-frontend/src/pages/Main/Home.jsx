import React, { useEffect, useState } from 'react'
import GreyArrowLeft from '../../assets/grey-arrow-left.svg'
import NavBar from '../../components/module/NavBar'
import Footer from '../../components/module/Footer'
import Search from '../../components/module/Search'
import HomeCard from '../../components/module/HomeCard'
import { useNavigate } from 'react-router-dom'
import api from '../../configs/api'


const Home = () => {
  const [talent, setTalent] = useState([])

  useEffect(() => {
    // const token = localStorage.getItem('token')
    api.get('/workers/?limit=10&page=1')
      .then((res) => {
        const result = res.data.data
        setTalent(result)
      })
      .catch((err) => {
        console.log(err.response);
      })
  }, [])

  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/talent/profile/${id}`)

  }

  return (

    <div className='bg-[#F6F7F8]'>
      <NavBar />

      <div>
        <div className="px-[150px] py-[33px] bg-[#5E50A1]">
          <div className='container mx-auto'>
            <h1 className='font-bold text-[28px] leading-5 text-white'>Top Jobs</h1>
          </div>
        </div>

        <div className='px-[150px] py-[50px]'>
          <div className='container mx-auto flex flex-col gap-[50px]'>

            <Search />

            <div className="flex flex-col rounded-[8px] overflow-hidden shadow-[0px_1px_20px_0_rgba(197,197,197,0.25)] gap-[1px]">
              {talent.map((item) => (
                <HomeCard
                  image={item.photo}
                  name={item.name}
                  job={item.job_desk}
                  location={item.domicile}
                  skills={item.skills}
                  onClick={()=>handleNavigate(item.id)}
                />
              ))}
              {/* <div className="flex bg-[#FFFFFF] p-[20px] items-center justify-between h-fit">
                <div className="flex gap-5 items-center">
                  <img className="w-[100px]" src={Person1} alt="" />
                  <div className='flex flex-col gap-2'>
                    <h2 className="font-semibold text-[22px] text-[#1F2A36]">Louis Tomlinson
                    </h2>
                    <p className="font-normal text-sm leading-6 text-[#1F2A36]">Lorem ipsum dolor sit amet, consectetur
                      adipiscing elit. Vestibulum erat orci.</p>
                    <div className="flex gap-[11px]"><img src={GreyPin}
                      alt="" />
                      <p className="font-normal text-sm leading-5 text-[#9EA0A5]">Purwokerto, Jawa Tengah</p>
                    </div>
                    <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                      <li
                        className="px-[14px] py-[4px] bg-[#FBB017] bg-opacity-60 border border-[#FBB017] border-solid rounded-[4px] font-semibold text-xs leading-5 text-white">
                        Phyton</li>
                      <li
                        className="px-[14px] py-[4px] bg-[#FBB017] bg-opacity-60 border-[1px] border-[#FBB017] border-solid rounded-[4px] font-semibold text-xs leading-5 text-white">
                        Laravel</li>
                      <li
                        className="px-[14px] py-[4px] bg-[#FBB017] bg-opacity-60 border-[1px] border-[#FBB017] border-solid rounded-[4px] font-semibold text-xs leading-5 text-white">
                        Golang</li>
                    </ul>
                  </div>
                </div>
                <button className="py-[15px] px-[30px] bg-[#5E50A1] rounded-[4px] font-bold text-base leading-5 text-[#FFFFFF]">Edit profile</button>
              </div> */}

              {/* <div className='flex bg-white justify-between items-center px-[20px] py-[20px]'>
                <div className='flex gap-[31px] items-center'>
                  <img className='w-[100px]' src={Person1} alt="" />
                  <div className='flex flex-col gap-[6px]'>
                    <h2 className='font-semibold text-[22px] text-[#1F2A36]'>Louis Tomlinson</h2>
                    <p className='font-normal text-sm leading-5 text-[#9EA0A5]'>Web developer</p>
                    <div className='flex gap-[11px]'>
                      <img src={GreyPin} alt="" />
                      <p className='font-normal text-sm leading-5 text-[#9EA0A5]'>Lorem ipsum</p>
                    </div>
                    <ul className="flex flex-wrap gap-x-[10px] gap-y-[20px]">
                      <li
                        className="px-[14px] py-[4px] bg-[#FBB017] bg-opacity-60 border border-[#FBB017] border-solid rounded-[4px] font-semibold text-xs leading-5 text-white">
                        Phyton</li>
                      <li
                        className="px-[14px] py-[4px] bg-[#FBB017] bg-opacity-60 border-[1px] border-[#FBB017] border-solid rounded-[4px] font-semibold text-xs leading-5 text-white">
                        Laravel</li>
                      <li
                        className="px-[14px] py-[4px] bg-[#FBB017] bg-opacity-60 border-[1px] border-[#FBB017] border-solid rounded-[4px] font-semibold text-xs leading-5 text-white">
                        Golang</li>
                    </ul>
                  </div>
                </div>
                <button className="py-[15px] px-[30px] bg-[#5E50A1] rounded-[4px] font-bold text-base leading-5 text-[#FFFFFF]">Edit profile</button>
              </div> */}
            </div>

            <div className="flex gap-[6px] justify-center">
              <div className='flex rounded-[4px] bg-white border border-[#E2E5ED] size-[58px] items-center justify-center'><img className='w-[20px]' src={GreyArrowLeft} alt="" /></div>
              <div className='flex rounded-[4px] bg-[#5E50A1] border border-[#E2E5ED] size-[58px] items-center justify-center'><p className='font-bold text-lg leading-7 text-white'>1</p></div>
              <div className='flex rounded-[4px] bg-white border border-[#E2E5ED] size-[58px] items-center justify-center'><p className='font-normal text-lg leading-7 text-[#9EA0A5]'>2</p></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home