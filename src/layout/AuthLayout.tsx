import React from 'react'
import { AuthImages } from '~/components/AuthImages'

type Props = {
    children: React.ReactNode
}

export const AuthLayout = ({children}:Props) => {
  return (
    <div className='flex flex-col h-screen bg-green-500'>
        <div className='m-auto'>
        <div className='flex items-center justify-center'>
            <p className='md:pl-96 '>the perfect mentor</p>
        </div>
        <div className='w-[315px] h-[361px] border rounded-3xl grid md:grid-cols-2 md:w-[886px] md:h-[479px] '>
            <div className='md:border-r-2 md:my-8'><AuthImages/></div>
           
            <div className='right flex flex-col justify-evenly md:col-start-2 '>
                <div className='text-center '>
                    {children}
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}
