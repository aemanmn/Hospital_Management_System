import React, { useEffect } from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const AllAppointments = () => {

  const { aToken, appointments, cancelAppointment, getAllAppointments } = useContext(AdminContext)
  const { slotDateFormat, calculateAge, currency } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl m-5 '>

      <p className='mb-3 text-lg font-semibold text-teal-700'>All Appointments</p>

      <div className='bg-white border border-gray-100 rounded-xl shadow-sm text-sm max-h-[80vh] overflow-y-scroll'>
        <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 bg-teal-50 border-b border-teal-100 font-medium text-teal-700'>
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        {appointments.map((item, index) => (
          <div className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-6 border-b border-gray-100 hover:bg-teal-50/50 transition-colors' key={index}>
            <p className='max-sm:hidden'>{index+1}</p>
            <div className='flex items-center gap-2'>
              <img src={item.userData.image} className='w-8 h-8 rounded-full object-cover ring-1 ring-teal-100' alt="" /> <p>{item.userData.name}</p>
            </div>
            <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
            <div className='flex items-center gap-2'>
              <img src={item.docData.image} className='w-8 h-8 rounded-full object-cover bg-teal-50 ring-1 ring-teal-100' alt="" /> <p>{item.docData.name}</p>
            </div>
            <p className='font-medium text-gray-700'>{currency}{item.amount}</p>
            {item.cancelled ? <p className='text-red-500 text-xs font-medium bg-red-50 px-3 py-1 rounded-full inline-block w-fit'>Cancelled</p> : item.isCompleted ? <p className='text-green-600 text-xs font-medium bg-green-50 px-3 py-1 rounded-full inline-block w-fit'>Completed</p> : <img onClick={() => cancelAppointment(item._id)} className='w-9 cursor-pointer hover:scale-110 transition-transform' src={assets.cancel_icon} alt="" />}
          </div>
        ))}
      </div>

    </div>
  )
}

export default AllAppointments