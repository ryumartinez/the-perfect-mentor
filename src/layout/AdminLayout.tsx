
import React from 'react'

type Props = {
  children: React.ReactNode
}

export const AdminLayout = ({children}:Props) => {
  return (
    <div className='flex h-full p-6 bg-[#BFD732]'>
      
      <div className='flex flex-col w-[272px] h-[944px]'>
          <p className=' text-5xl w-[200px]'>
                The perfect <span className='text-white'>M</span>entor
            </p>
        <ul className='flex flex-col justify-evenly'>
          <li><div className='flex items-center border border-solid border-black h-[71px]'>Users</div></li>
          <li><div className='flex items-center border border-solid border-black h-[71px]'>Stadistics</div></li>
          <li><div className='flex items-center border border-solid border-black h-[71px]'>Reports</div></li>
          <li><div className='flex items-center border border-solid border-black h-[71px]'>Profile</div></li>
        </ul>
      <button>logout</button>
      </div>  
        
      
      <div className='rounded-3xl bg-white w-[1128px] h-[944px]'>
        {children}
      </div>
    </div>
  )
}
