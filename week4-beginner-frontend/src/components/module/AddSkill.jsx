import React, { useEffect, useState } from 'react'
import Input from '../base/Input'
import Button from '../base/Button'
import api from '../../configs/api'

const AddSkill = () => {
    const [skill, setSkill] = useState('')
    const [mySkill, setMySkill] = useState([])

    const getSkill = () => {
        api.get('/skills')
            .then((res) => {
                const skills = res.data.data
                setMySkill(skills)
            })
    }

    const handleSkill = () => {
        api.post(`/skills`,
            { skill_name: skill })
            .then((res) => {
                setSkill(res)
                getSkill()
            })
            .catch((err) => {
                console.log(err.response);
            })
    }

    useEffect(() => {
        getSkill()
    }, [])


    return (
        <div>
            <div className='flex gap-2 items-center'>
                <Input
                    className='w-full'
                    type='text'
                    label=''
                    placeholder='Masukkan skill'
                    value={skill}
                    onChange={(e) => setSkill(e.target.value)}
                />
                <Button onClick={handleSkill}>Tambah</Button>
            </div>
            <ul>
                {mySkill.map((item) => (
                    <li key={item.id}>{item.skill_name}</li>
                ))}
            </ul>

        </div>
    )
}

export default AddSkill