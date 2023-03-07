import React from 'react'
import { ProfileData } from '~/components/ProfileData'
import { AdminLayout } from '~/layout/AdminLayout'
import { api } from '~/utils/api'

const profile = () => {
    const user = api.user.profileData.useQuery()
    console.log(user)
    return (
    <AdminLayout>
        <section className='flex flex-col justify-center items-center'>
            <div><h1>Profile</h1></div>
            <div className='border border-solid border-black rounded-3xl w-[548px] h-[767px]'>
                <div className='w-[548px] h-[767px]'>
                    {/** Componente con los datos de las personas */}
                    {user.data ? <ProfileData userdata={user.data} /> : "asdfadsf"}
                </div>
            </div>
        </section>
    </AdminLayout>
  )
}

export default profile