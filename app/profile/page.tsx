"use client"
import React from 'react'
import Input from '@/components/Input';
import { Typography } from 'antd';
import Index from '@/components/RadioInput';
import { radioOptions } from '@/data/data';

const { Title } = Typography;

const Profile = () => {
  return (
    <div className='relative px-6 py-10 mx-auto sm:px-16 sm:py-24 max-w-7xl overflow-x-hidden'>
      <Title level={1} className='text-text2'>My Account</Title>
      <div className="grid grid-cols-2 gap-6">
        <Input value='Made Sanjaya' disabled title="Username" />
        <Input value='madeputra.6166@gmail.com' title="Email" disabled />
        <Input value='085942965516' title="Handphone" disabled />
        <Index title="Gender" initialValue={1} options={radioOptions} disabled />
      </div>
    </div>
  )
}

export default Profile