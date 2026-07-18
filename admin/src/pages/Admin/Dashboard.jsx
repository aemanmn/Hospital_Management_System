import React, { useContext, useEffect } from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'

const Dashboard = () => {

  const { aToken, getDashData, cancelAppointment, dashData } = useContext(AdminContext)
  const { slotDateFormat } = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getDashData()
    }
  }, [aToken])

  return dashData && (
    <div className='m-5'>

      <div className='flex flex-wrap gap-4'>
        <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 transition-all duration-300'>
          <div className='bg-teal-50 p-2 rounded-full'>
            <img className='w-10' src={assets.doctor_icon} alt="" />
          </div>
          <div>
            <p className='text-xl font-semibold text-gray-700'>{dashData.doctors}</p>
            <p className='text-gray-400 text-sm'>Doctors</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 transition-all duration-300'>
          <div className='bg-teal-50 p-2 rounded-full'>
            <img className='w-10' src={assets.appointments_icon} alt="" />
          </div>
          <div>
            <p className='text-xl font-semibold text-gray-700'>{dashData.appointments}</p>
            <p className='text-gray-400 text-sm'>Appointments</p>
          </div>
        </div>
        <div className='flex items-center gap-3 bg-white p-4 min-w-52 rounded-xl border border-gray-100 shadow-sm cursor-pointer hover:shadow-lg hover:border-teal-200 hover:-translate-y-1 transition-all duration-300'>
          <div className='bg-teal-50 p-2 rounded-full'>
            <img className='w-10' src={assets.patients_icon} alt="" />
          </div>
          <div>
            <p className='text-xl font-semibold text-gray-700'>{dashData.patients}</p>
            <p className='text-gray-400 text-sm'>Patients</p></div>
        </div>
      </div>

      <div className='bg-white rounded-xl shadow-sm mt-10 overflow-hidden'>
        <div className='flex items-center gap-2.5 px-4 py-4 bg-teal-50 border-b border-teal-100'>
          <img className='w-5' src={assets.list_icon} alt="" />
          <p className='font-semibold text-teal-700'>Latest Bookings</p>
        </div>

        <div className='pt-2'>
          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div className='flex items-center px-6 py-3 gap-3 hover:bg-teal-50/50 transition-colors' key={index}>
              <img className='rounded-full w-10 h-10 object-cover ring-2 ring-teal-100' src={item.docData.image} alt="" />
              <div className='flex-1 text-sm'>
                <p className='text-gray-800 font-medium'>{item.docData.name}</p>
                <p className='text-gray-500 '>Booking on {slotDateFormat(item.slotDate)}</p>
              </div>
              {item.cancelled ? <p className='text-red-500 text-xs font-medium bg-red-50 px-3 py-1 rounded-full'>Cancelled</p> : item.isCompleted ? <p className='text-green-600 text-xs font-medium bg-green-50 px-3 py-1 rounded-full'>Completed</p> : <img onClick={() => cancelAppointment(item._id)} className='w-9 cursor-pointer hover:scale-110 transition-transform' src={assets.cancel_icon} alt="" />}
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Dashboard