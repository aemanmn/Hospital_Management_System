import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'

const DoctorsList = () => {

  const { doctors, changeAvailability , aToken , getAllDoctors} = useContext(AdminContext)

  useEffect(() => {
    if (aToken) {
        getAllDoctors()
    }
}, [aToken])

  return (
    <div className='m-5 max-h-[90vh] overflow-y-scroll'>
      <h1 className='text-lg font-semibold text-teal-700'>All Doctors</h1>
      <div className='w-full flex flex-wrap gap-4 pt-5 gap-y-6'>
        {doctors.map((item, index) => (
          <div className='border border-gray-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group hover:shadow-xl hover:border-teal-300 hover:-translate-y-1 transition-all duration-300 bg-white' key={index}>
            <img className='bg-teal-50 group-hover:bg-teal-100 transition-all duration-500' src={item.image} alt="" />
            <div className='p-4'>
              <p className='text-[#262626] text-lg font-medium'>{item.name}</p>
              <p className='text-[#5C5C5C] text-sm'>{item.speciality}</p>
              <div className='mt-2 flex items-center gap-2 text-sm'>
                <input onChange={()=>changeAvailability(item._id)} type="checkbox" checked={item.available} className='accent-teal-600 w-4 h-4 cursor-pointer' />
                <p className={item.available ? 'text-teal-600 font-medium' : 'text-gray-500'}>Available</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DoctorsList