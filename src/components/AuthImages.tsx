import React from 'react'
import Image from 'next/image'
import wea from "public/wea.png"
import resorte1 from "public\resorte1.png"
import resorte2 from "public\resorte2.png"
import resorte3 from "public\resorte3.png"
import resorte4 from "public\resorte4.png"


export const AuthImages = () => {
  return (
    <div className=''>
                <Image src={wea} alt={"girl using phone"} height={572} width={572} className="absolute top-20 left-40"/>
    </div>
  )
}
