import React, { useEffect, useState } from 'react'
import GreyArrowLeft from '../../assets/grey-arrow-left.svg'
import GreyArrowRight from '../../assets/grey-arrow-right.svg'
import NavBar from '../../components/module/NavBar'
import Footer from '../../components/module/Footer'
import Search from '../../components/module/Search'
import HomeCard from '../../components/module/HomeCard'
import { useNavigate } from 'react-router-dom'
import api from '../../configs/api'
import Input from '../../components/base/Input'
import Button from '../../components/base/Button'
import GreySearch from '../../assets/grey-search.svg'



const Home = () => {
  const [talent, setTalent] = useState([])
  const [params, setParams] = useState({
    limit: 10,
    page: 1,
    search: ''
  })
  const [searchInput, setSearchInput] = useState('');
  const [selectedSort, setSelectedSort] = useState('');


  const getTalent = () => {
    api.get('/workers/', {
      params: {
        limit: params.limit,
        page: params.page,
        ...(params.search ? { search: params.search } : {}),
        ...(params.sort ? { sort: params.sort } : {}),
        sortBy: params.sortBy,
      }
    })
      .then((res) => {
        const result = res.data.data
        setTalent(result)
      })
      .catch((err) => {
        console.log(err.response);
      })
  }


  useEffect(() => {
    getTalent()
  }, [params])

  const navigate = useNavigate()
  const handleNavigate = (id) => {
    navigate(`/talent/profile/${id}`)

  }

  const handlePrevious = () => {
    setParams({
      ...params,
      page: params.page - 1
    })
  }
  const handleNext = () => {
    setParams({
      ...params,
      page: params.page + 1
    })
  }

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  }

  const handleSearch = () => {
    if (searchInput === '') {
      setParams({ ...params, search: null });
    } else {
      setParams({ ...params, search: searchInput, sort: selectedSort });
    }
  }

  const handleSortChange = (e) => {
    const selectedValue = e.target.value;
    setSelectedSort(selectedValue);
    // setParams({ ...params, sort: selectedValue });
  };

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

            <div className="flex bg-white p-[8px] rounded-[8px] overflow-hidden shadow-[0px_1px_20px_0_rgba(197,197,197,0.25)]">
              <div className='flex w-full pr-[25px]'>
                <Input onChange={handleSearchInputChange} value={searchInput} name='search' className='p-[20px] outline-none font-normal text-sm leading-5 text-[#1F2A36] placeholder:text-[#858D96] border-0' label='' type="text" placeholder='Search for any skill' />
                <img onClick={handleSearch} className='w-6 cursor-pointer' src={GreySearch} />
              </div>

              <div className='flex border-l pl-[25px] gap-[25px]'>
                <select className='outline-none font-normal text-sm leading-5 text-[#1F2A36]' value={selectedSort}
                  onChange={handleSortChange}>
                  <option value="" selected>Sort</option>
                  <option value="name">Sort by name</option>
                  <option value="domicile">Sort by location</option>
                </select>
                <Button onClick={handleSearch} variant='primary-purple' text='Search' className="px-[30px] py-[15px] rounded-[4px] font-bold text-sm leading-6 text-white bg-[#5E50A1]">Search</Button>
              </div>
              
            </div>

            <div className="flex flex-col rounded-[8px] overflow-hidden shadow-[0px_1px_20px_0_rgba(197,197,197,0.25)] gap-[1px]">
              {talent.map((item) => (
                <HomeCard
                  key={item.id}
                  image={item.photo}
                  name={item.name}
                  job={item.job_desk}
                  location={item.domicile}
                  skills={item.skills}
                  onClick={() => handleNavigate(item.id)}
                />
              ))}
            </div>

            <div className="flex gap-[6px] justify-center items-center">
              <div onClick={handlePrevious} className='flex rounded-[4px] bg-white border border-[#E2E5ED] size-[58px] items-center justify-center'><img className='w-[20px]' src={GreyArrowLeft} alt="" /></div>
              {params.page}
              {/* {(talent.pagination).map((page) => (
                <div
                  key={page}
                  className={`flex rounded-[4px] border border-[#E2E5ED] size-[58px] items-center justify-center cursor-pointer ${
                    params.page === page ? 'bg-[#5E50A1] text-white font-bold' : 'bg-white text-[#9EA0A5] font-normal'
                  }`}
                  onClick={() => setParams({ ...params, page })}
                >
                  {page}
                </div>
              ))} */}
              <div onClick={handleNext} className='flex rounded-[4px] bg-white border border-[#E2E5ED] size-[58px] items-center justify-center'><img className='w-[20px]' src={GreyArrowRight} alt="" /></div>
              {/* Active State <div className='flex rounded-[4px] bg-[#5E50A1] border border-[#E2E5ED] size-[58px] items-center justify-center'><p className='font-bold text-lg leading-7 text-white'>1</p></div> */}
              {/* Inactive State <div className='flex rounded-[4px] bg-white border border-[#E2E5ED] size-[58px] items-center justify-center'><p className='font-normal text-lg leading-7 text-[#9EA0A5]'>2</p></div> */}
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Home